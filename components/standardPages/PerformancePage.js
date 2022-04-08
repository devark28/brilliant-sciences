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
import LabelItem from "../settingItems/LabelItem"
import EvaluationItem from "../settingItems/EvaluationItem"

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
        <ContentCard title="Performance">
          <LabelItem text="Overall performance" value="{{percentage}}%"/>
        </ContentCard>
        <ContentCard title="Taken Courses">
          <EvaluationItem list={[
              ["{{course name}}", true],
              ["{{course name}}", true],
              ["{{course name}}", true],
              ["{{course name}}", true],
              ["{{course name}}", false],
              ["{{course name}}", true],
              ["{{course name}}", false],
              ["{{course name}}", true],
            ]}/>
        </ContentCard>
      </Stack>
    </Stack>
  )
}
