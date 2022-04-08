import {Fragment} from "react"
import {Stack, Slider, IconButton, Button, Select, MenuItem} from "@mui/material"
import {
  PlayArrowRounded as PlayIcon,
  VolumeUpRounded as VolumeIcon,
  VolumeOffRounded as MuteIcon,
  FullscreenRounded as FullscreenIcon,
  FullscreenExitRounded as ExitFullscreenIcon,
} from '@mui/icons-material';
import ContentCard from "../ContentCard"
import ImageCard from "../ImageCard"
import SelectItem from "../settingItems/SelectItem"

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
        <ContentCard title="Profile">
          <ImageCard style={{maxHeight: "10rem"}} src="/apparatus.jpg" content={
            [
              ["{{username}}"],
              ["{{email or phone number}}"],
              [<Button variant="outlined" style={{height: "2rem"}}>Change Password</Button>],
              [<Button variant="outlined" style={{height: "2rem"}}>Change Profile Picture</Button>]
            ]
          }/>
        </ContentCard>
        <ContentCard spacing={1} title="General/settings">
          <SelectItem text="Preferred course" options={[
              "Mathematics",
              "Physics",
              "Chemistry",
              "Biology"
          ]}/>
          <SelectItem text="Theme" options={[
              "Light",
              "Dark"
          ]}/>
        </ContentCard>
      </Stack>
    </Stack>
  )
}
