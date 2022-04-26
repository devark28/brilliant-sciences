import {Fragment, useState, useRef, useEffect} from "react"
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

export default () => {
  const [started, setStarted] =  useState(false)
  const [playing, setPlaying] =  useState(false)
  const [muted, setMuted] =  useState(false)
  const [fullScreen, setFullScreen] =  useState(false)
  const [volume, setVolume] =  useState(1)
  const [initial_volume, set_initial_volume] =  useState(volume)
  const [showVolumeTrack, setShowVolumeTrack] = useState(false)
  const [buffering, setBuffering] =  useState(false)
  const [progress, setProgress] =  useState(0)
  const [duration, setDuration] =  useState(0)
  const [timeStamp, setTimeStamp] =  useState([0, 0, 0])
  const [was_playing, set_was_playing] =  useState(false)
  const video_player_ref = useRef("video_player_ref")
  const video_player_conatiner_ref = useRef("video_player_conatiner_ref")

  useEffect(() => {
    console.log(duration)
    const hours = Math.trunc(duration / 3600)
    const minutes = Math.trunc(((duration / 3600) - hours) * 60)
    const seconds = Math.trunc(((((duration / 3600) - hours) * 60) - minutes) * 60)
    // video_player_ref.current.seekTo(progress * duration / 100, "seconds")
    // console.log("t", progress * duration / 100)
  }, [duration])
  
  return (
    <Stack
    style={{
      flex: 1,
      minHeight: "100vh",
      padding: "1rem"
    }}>
      <Stack
      className="video_player"
      ref={video_player_conatiner_ref}
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
            }}>{"{{"}Headin'{"}}"}</h3>
        </Stack>
        <Stack style={{
          backgroundColor: "black",
          // black
          width: "100%",
          flex: 1
        }}
        onClick={(e) => {
          e.stopPropagation()
          setPlaying(!playing)
        }}
        onDoubleClick={(e) => {
          e.stopPropagation()
          if(!document.fullscreen || document.fullscreenElement !== video_player_conatiner_ref.current){
            video_player_conatiner_ref.current.requestFullscreen().then(()=>{setFullScreen(true)}).catch(()=>{setFullScreen(false)})
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
            // url="https://youtu.be/bwmSjveL3Lc"
            url="/spykids4.mp4"
            onReady={() => {
              // setPreview(true)
            }}
            pip={false}
            config={{ file: { attributes: { controlsList: 'nodownload', disablePictureInPicture: true, preload: "none" } } }}
            onStart={()=>{
              setDuration(video_player_ref.current.getDuration())
              // video_player_ref.current.seekTo(time_stamp, "seconds")
            }}
            // onPlay={()=>{console.log("playing")}}
            // onPause={()=>console.log("pausing")}
            onProgress={(state)=>{
              // (state.played * 100).toFixed(5)
              setProgress((state.played * 100).toFixed(5))
              // console.log("1", state.playedSeconds)
              // console.log("2", state.played * 100)
              // console.log("3", state.played)
              // setProgress(state.playedSeconds)
              // set_time_stamp(state.playedSeconds)
              const time = state.playedSeconds
              const hours = Math.trunc(time / 3600)
              const minutes = Math.trunc(((time / 3600) - hours) * 60)
              const seconds = Math.trunc(((((time / 3600) - hours) * 60) - minutes) * 60)
              setTimeStamp([hours, minutes, seconds])
              // console.log("time", hours, minutes, seconds)
            }}
            // onEnded={()=>{dispatch(nextModule())}}
            onBuffer={()=>{
              setBuffering(true)
            }}
            onBufferEnd={()=>{
              setBuffering(false)
            }}
            width='100%'
            height='100%'
            // controls={true}
            // wrapper={Fragment}
            playing={playing}
            muted={muted}
            volume={volume}
            // loop={true}
            // playIcon={">"}
            // pip={true}
            onClick={()=>{
                // set_is_playing(!is_playing)
            }}/>
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
              <Slider sx={{/* margin: 0 */}} step={0.000001} min={0} max={100} classes={{markLabel: {color: "white"}}}
              value={progress}
              onMouseDown={()=>{
                if(playing){
                    set_was_playing(true)
                }else{
                    set_was_playing(false)
                }
                // console.log(was_playing)
                setPlaying(false)
              }}
              onChange={(e) => {
                video_player_ref.current.seekTo((e.target.value) * duration / 100, "seconds")
                setProgress(e.target.value)
              }}
              onMouseUp={()=>{
                if(was_playing){
                    setPlaying(true)
                }else{
                    setPlaying(false)
                }
              }}
              marks={[
                {value: 0},
                {value: 20},
                {value: 37}
              ]}/>
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
                          set_initial_volume(volume)
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
                      {timeStamp[0] > 0 ? `${timeStamp[0] < 10 ? `0${timeStamp[0]}` : timeStamp[0]}:` : ""}
                      {timeStamp[1] < 10 ? `0${timeStamp[1]}` : timeStamp[1]}:{timeStamp[2] < 10 ? `0${timeStamp[2]}` : timeStamp[2]}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      opacity: "70%",
                      // fontWeight: 500,
                      letterSpacing: 0.3,
                      color: "white"
                    }}>{"|"}</span>
                    <span style={{
                      fontSize: '0.8rem',
                      opacity: "70%",
                      // fontWeight: 500,
                      letterSpacing: 0.3,
                      color: "white"
                    }}>{"{{"}section Name{"}}"}</span>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <IconButton sx={{color: "white"}} onClick={(e) => {
                    e.stopPropagation()
                    if(!document.fullscreen || document.fullscreenElement !== video_player_conatiner_ref.current){
                      video_player_conatiner_ref.current.requestFullscreen().then(()=>{setFullScreen(true)}).catch(()=>{setFullScreen(false)})
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
