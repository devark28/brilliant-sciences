import {Fragment} from "react"
import {Stack, Slider, Button, RadioGroup, FormControlLabel, Radio} from "@mui/material"
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
        <ContentCard style={{display: "flex", flex: 1}} title="{{No}}. {{Assesment Question}}">
            <RadioGroup sx={{padding: "1rem 1.5rem"}}>
                {["", "", "", ""].map((opt, index) => (
                    <FormControlLabel key={index} value={index+1} control={<Radio />} label={`{{Option ${index+1}}}`} />
                ))}
            </RadioGroup>
        </ContentCard>
        <Stack direction="row" style={{
            padding: "0 .5rem"
        }}>
            <Button variant="contained">{
                true
                ? "Cancel"
                : "Back"
            }</Button>
            <Stack style={{fontSize: ".8rem"}} className="flex-1" alignItems="center">{"{{"}1/2{"}}"}</Stack>
            <Button variant="contained">{
                false
                ? "Submit"
                : "Next"
            }</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

