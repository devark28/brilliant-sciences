import { useState, useRef, useEffect } from "react"
import {Stack, Slider, IconButton} from "@mui/material"
import {
  PlayArrowRounded as PlayIcon,
  VolumeUpRounded as VolumeIcon,
  VolumeOffRounded as MuteIcon,
  FullscreenRounded as FullscreenIcon,
  FullscreenExitRounded as ExitFullscreenIcon,
  Pause as PauseIcon,
} from '@mui/icons-material';
import Player from "react-player"
import { useSelector } from "react-redux";
import { extractKey } from "../../utils";

export default ({hidden}) => {
  const [started, setStarted] =  useState(false)
  const [ready, setReady] =  useState(false)
  const [playing, setPlaying] =  useState(true)
  const [muted, setMuted] =  useState(true)
  const [fullScreen, setFullScreen] =  useState(false)
  const [volume, setVolume] =  useState(1)
  const [initial_volume, setInitial_volume] = useState(volume)
  const [showVolumeTrack, setShowVolumeTrack] = useState(false)
  // TODO: implement buffering for this player
  const [buffering, setBuffering] = useState(false) // NOSONAR
  const [progress, setProgress] =  useState(0)
  const [duration, setDuration] =  useState(0)
  const [timeStamp, setTimeStamp] =  useState([0, 0, 0])
  const [was_playing, setWas_playing] = useState(false)
  const [marks, setMarks] =  useState([])
  const [sectionTitle, setSectionTitle] =  useState("")
  const video_player_ref = useRef("video_player_ref")
  const video_player_container_ref = useRef("video_player_container_ref")
  const video = useSelector(state => state.Course.video)
  const title = useSelector(state => state.Course.title)
  const sections = useSelector(state => state.Course.sections)

  useEffect(() => {
    let _marks = extractKey(sections, "stamp")
    console.log(_marks.map(value => ({value})));
    setMarks(_marks.map(value => ({value})))
  }, [])

  useEffect(() => {
    console.log(duration)
    const hours = Math.trunc(duration / 3600)
    const minutes = Math.trunc(((duration / 3600) - hours) * 60)
    const seconds = Math.trunc(((((duration / 3600) - hours) * 60) - minutes) * 60) // NOSONAR
  }, [duration])

  useEffect(() => {
    let _marks = extractKey(sections, "stamp")
    console.log(progress);
    _marks = _marks.sort() // NOSONAR
    console.log(_marks);
    for (let index = 0; index < _marks.length; index++) {
      if(_marks[index] <= progress  && progress < _marks[index+1]){
        setSectionTitle(sections[index].title)
        console.log("Success");
        break;
      }
    }
  }, [progress])
  
  return (
    <Stack
    style={{
      display: hidden ? "flex" : "none",
      flex: 1,
      minHeight: "100vh",
      padding: "1rem"
    }}>
      <Stack
      className="video_player"
        ref={video_player_container_ref}
      style={{
        flex: 1,
        borderRadius: "4px",
        overflow: "hidden",
        marginRight: "1rem"
      }}>
        <Stack style={{position: "relative"}}>
          <h3 style={{
            padding: ".7rem 1rem 1.5rem 1rem",
            position: "absolute",
            width: "100%",
            color: "white",
            background: "linear-gradient(180deg, hsl(0deg 0% 0% / 30%), transparent 90%)"
            }}>{title}</h3>
        </Stack>
        <Stack style={{
          backgroundColor: "black",
          width: "100%",
          flex: 1
        }}
        onClick={(e) => {
          e.stopPropagation()
          setPlaying(!playing)
        }}
        onDoubleClick={(e) => {
          e.stopPropagation()
          if (document.fullscreenElement == null) {
            video_player_container_ref.current.requestFullscreen().then(() => { setFullScreen(true) }).catch(() => { setFullScreen(false) })
          }else{
              document.exitFullscreen().then(()=>{setFullScreen(false)}).catch(()=>{setFullScreen(true)})
          }
        }}>
          <Player
            ref={video_player_ref}
            style={{
              display: "flex",
              flex: 1,
              pointerEvents: "none"
            }}
            url={video}
            pip={false}
            onDuration={(dur)=>{
              console.log("Buffer end -- " + dur);
              setDuration(dur)
            }}
            config={{ file: { attributes: { controlsList: 'nodownload', disablePictureInPicture: true, preload: "none" } } }}
            onStart={() => {
              if(!started && (duration > 0) && !ready){
                setPlaying(false)
                setMuted(false)
                video_player_ref.current.seekTo(0, "seconds")
                setProgress(0)
                setReady(true)
              }else{
                setStarted(true)
              }
            }}
            onEnd={()=>{
              setPlaying(false)
            }}
            onProgress={(state) => {
              setProgress((state.played * 100).toFixed(5))
              const time = state.playedSeconds
              const hours = Math.trunc(time / 3600)
              const minutes = Math.trunc(((time / 3600) - hours) * 60)
              const seconds = Math.trunc(((((time / 3600) - hours) * 60) - minutes) * 60)
              setTimeStamp([hours, minutes, seconds])
            }}
            onBuffer={()=>{
              setBuffering(true)
            }}
            onBufferEnd={()=>{
              setBuffering(false)
            }}
            width='100%'
            height='100%'
            playing={playing}
            muted={muted}
            volume={volume} />
        </Stack>
        <Stack style={{position: "relative", justifyContent: "flex-end"}}>
          <Stack className="video-controls-hover" style={{
            padding: "1rem 2rem",
            position: "absolute",
            width: "100%",
            color: "white",
            transition: ".5s",
            marginBottom: "-3rem",
            background: "linear-gradient(0deg, hsl(0deg 0% 0% / 70%), transparent 80%)"
            }}>
            <Slider step={0.000001} min={0} max={100} classes={{ markLabel: { color: "white" } }}
              value={progress}
              onMouseDown={()=>{
                if(playing){
                  setWas_playing(true)
                }else{
                  setWas_playing(false)
                }
                setPlaying(false)
              }}
              onChange={(e) => {
                video_player_ref.current.seekTo((e.target.value) * duration / 100, "seconds")
                setProgress(e.target.value)
                console.log(progress, e.target.value , (e.target.value) * duration / 100);
              }}
              onMouseUp={()=>{
                if(was_playing){
                    setPlaying(true)
                }else{
                    setPlaying(false)
                }
              }}
              marks={marks}/>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={1}>
                  <IconButton sx={{color: "white"}} onClick={() => {
                    setPlaying(!playing)
                  }}>
                    {
                      playing
                      ? <PauseIcon/>
                      : <PlayIcon/>
                    }
                  </IconButton>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Stack direction="row" spacing={2} alignItems="center"
                    onMouseOver={() => {
                      setShowVolumeTrack(true);
                    }}
                    onMouseOut={() => {
                      setShowVolumeTrack(false);
                    }}>
                      <IconButton sx={{color: "white"}} onClick={(e) => {
                        e.stopPropagation()
                        if(muted){
                          setVolume(initial_volume)
                          setMuted(false)
                        }else{
                          setInitial_volume(volume)
                          setVolume(0)
                          setMuted(true)
                        }
                      }}>
                        {
                          muted
                          ? <MuteIcon/>
                          : <VolumeIcon/>
                        }
                      </IconButton>
                      <Slider step={0.01} min={0} max={1} value={volume} onClick={(e) => {e.stopPropagation()}}
                      style={{
                        transition: ".5s",
                        width: showVolumeTrack ? "5rem" : 0,
                        visibility: showVolumeTrack ? "visible" : "hidden"
                      }}
                      onChange={(e) => {
                        console.log(e.target.value)
                        if(e.target.value * 100 > 0){
                          setMuted(false)
                        }else{
                          setMuted(true)
                        }
                        setVolume(e.target.value)
                      }}/>
                    </Stack>
                    <span style={{
                      fontSize: '0.75rem',
                      opacity: "70%",
                      fontWeight: 500,
                      letterSpacing: 0.2,
                      color: "white"
                    }}>
                    {timeStamp[0] > 0 ? `${timeStamp[0] < 10 ? `0${timeStamp[0]}` : timeStamp[0]}:` : ""} {/* NOSONAR */}
                      {timeStamp[1] < 10 ? `0${timeStamp[1]}` : timeStamp[1]}:{timeStamp[2] < 10 ? `0${timeStamp[2]}` : timeStamp[2]}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                    opacity: "70%",
                      letterSpacing: 0.3,
                      color: "white"
                    }}>{"|"}</span>
                    <span style={{
                      fontSize: '0.8rem',
                    opacity: "70%",
                      letterSpacing: 0.3,
                      color: "white"
                    }}>{sectionTitle}</span>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <IconButton sx={{color: "white"}} onClick={(e) => {
                    e.stopPropagation()
                  if (document.fullscreenElement == null) {
                    video_player_container_ref.current.requestFullscreen().then(() => { setFullScreen(true) }).catch(() => { setFullScreen(false) })
                    }else{
                        document.exitFullscreen().then(()=>{setFullScreen(false)}).catch(()=>{setFullScreen(true)})
                    }
                  }}>{
                  fullScreen
                    ? <ExitFullscreenIcon/>
                    : <FullscreenIcon/>
                  }</IconButton>
                </Stack>
              </Stack>
            </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
