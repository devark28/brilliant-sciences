import {Fragment} from "react"
import {Stack, Slider, IconButton} from "@mui/material"
import {
  PlayArrowRounded as PlayIcon,
  VolumeUpRounded as VolumeIcon,
  VolumeOffRounded as MuteIcon,
  FullscreenRounded as FullscreenIcon,
  FullscreenExitRounded as ExitFullscreenIcon,
} from '@mui/icons-material';

export default () => {
  return (
    <Stack style={{
      flex: 1,
      minHeight: "100vh",
      padding: "1rem"
    }}>
      <Stack style={{
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
        }}>
        </Stack>
        <Stack style={{position: "relative", justifyContent: "flex-end"}}>
          <Stack style={{
            padding: "1rem 2rem",
            position: "absolute",
            width: "100%",
            color: "white",
            background: "linear-gradient(0deg, hsl(0deg 0% 0% / 70%), transparent 80%)"
            }}>
              <Slider sx={{/* margin: 0 */}} min={0} classes={{markLabel: {color: "white"}}} value={50} marks={[
                {value: 0},
                {value: 20},
                {value: 37}
              ]}/>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={1}>
                  <IconButton sx={{color: "white"}}><PlayIcon/></IconButton>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton sx={{color: "white"}}>{
                  false
                    ? <MuteIcon/>
                    : <VolumeIcon/>
                  }</IconButton>
                  {
                  false
                    ? <Slider style={{width: "5rem"}} value={100}></Slider>
                    : <Fragment/>
                  }
                  <span style={{
                    fontSize: '0.75rem',
                    opacity: "70%",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                    color: "white"
                  }}>00:00</span>
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
                  <IconButton sx={{color: "white"}}>{
                  true
                    ? <FullscreenIcon/>
                    : <ExitFullscreenIcon/>
                  }</IconButton>
                </Stack>
              </Stack>
            </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
