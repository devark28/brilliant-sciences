import {Fragment, useState} from "react"
import {Stack, Slider, Typography, Button, CircularProgress, MenuItem} from "@mui/material"
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
  const username = "Dev Ardy"
  const email = "devardy@ovutex.com"

  const [uploadingImage, setUploadingImage] = useState(false)
  const [image, setImage] = useState("/apparatus.jpg")
  const [theme, setTheme] = useState(1)
  const [themeName, setThemeName] = useState("")
  const [preferredCourse, setPreferredCourse] = useState(1)
  const [preferredCourseName, setPreferredCourseName] = useState("")

  const handleImageFile = (e) => {
    if(e.target.files[0]){
      const url = URL.createObjectURL(e.target.files[0])
      setUploadingImage(true)
      setTimeout(() => {
        setUploadingImage(false)
        setImage(url)
      }, 5000);
    }
  }

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
          <ImageCard style={{maxHeight: "10rem"}} src={image} content={
            [
              [username],
              [email],
              [<Button variant="outlined" style={{height: "2rem"}}>Change Password</Button>],
              [<Button component="label" variant="outlined" style={{height: "2rem"}}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography style={{fontSize: ".875rem"}}>Change Profile Picture</Typography>
                  <input type="file" accept=".jpg, .png" hidden onChange={handleImageFile}/>
                  {
                    uploadingImage
                    ? <CircularProgress size={18}/>
                    : <Fragment/>
                  }
                </Stack>
              </Button>]
            ]
          }/>
        </ContentCard>
        <ContentCard spacing={1} title="General/settings">
          <SelectItem text="Preferred course" options={[
              "Mathematics",
              "Physics",
              "Chemistry",
              "Biology"
          ]}
          value={preferredCourse}
          onChange={(value, name) => {
            setPreferredCourse(value)
            setPreferredCourseName(name)
          }}
          />
          <SelectItem text="Theme" options={[
              "Light",
              "Dark"
          ]}
          value={theme}
          onChange={(value, name) => {
            setTheme(value)
            setThemeName(name)
          }}
          />
        </ContentCard>
      </Stack>
    </Stack>
  )
}
