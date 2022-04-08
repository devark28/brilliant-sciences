import {Fragment} from "react"
import {Stack, Slider, IconButton} from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  PlayArrowRounded as PlayIcon,
  VolumeUpRounded as VolumeIcon,
  VolumeOffRounded as MuteIcon,
  FullscreenRounded as FullscreenIcon,
  FullscreenExitRounded as ExitFullscreenIcon,
} from '@mui/icons-material';
import ContentCard from "../ContentCard"
import ImageCard from "../ImageCard"

export default () => {
  return (
    <Stack style={{
      flex: 1,
      minHeight: "100vh",
      padding: "1rem"
    }}>
      <Stack spacing={2} style={{
        flex: 1,
        marginRight: "1rem"
      }}>
        <ContentCard title="About the Video">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </ContentCard>
        <ContentCard title="Notes">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          Lorem ipsum dolor sit amet, consectetur adipiscing
          Lorem ipsum dolor sit amet, consectetur adipiscing
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </ContentCard>
        <ContentCard title="References">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          Lorem ipsum dolor sit amet, consectetur adipiscing
          Lorem ipsum dolor sit amet, consectetur adipiscing
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </ContentCard>
        <ContentCard title="Author">
          <ImageCard src="/apparatus.jpg" content={
            [
              ["Name", "{{Name}}"],
              ["Bio", `{{
                Lorem ipsum dolor sit amet, consectetur adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing
                Lorem ipsum dolor sit amet, consectetur adipiscing
              }}`]
            ]
          }/>
        </ContentCard>
      </Stack>
    </Stack>
  )
}

