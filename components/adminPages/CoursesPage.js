import {useEffect} from "react"
import {Stack, IconButton, Typography, Button, Select, TextField} from "@mui/material"
import ContentCard from "../ContentCard"
import Table from "../Table"
import NonPropagationButton from "../NonPropagationButton"
import {
  PlayArrowRounded as PlayIcon,
  SkipPreviousRounded as SkipBackIcon,
  SkipNextRounded as SkipNextIcon,
  FlagRounded as FlagIcon,
  Delete as DeleteIcon,
  ClosedCaption as SubtitleIcon,
} from '@mui/icons-material';
import InputItem from "../settingItems/InputItem"
import SelectItem from "../settingItems/SelectItem"
import ComponentItem from "../settingItems/ComponentItem"
import ButtonItem from "../settingItems/ButtonItem"

const data1 = [
  [0, "Title", 'Traffic', 'Dop', "", ""],
  [1, "electricity", 10, '12/2/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton variant="outlined">Unpublish</NonPropagationButton>],
  [2, "electricity", 10, '12/2/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton variant="outlined">Unpublish</NonPropagationButton>],
  [3, "cell study", 4, '13/3/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton variant="outlined">Unpublish</NonPropagationButton>],
  [4, "cell study", 4, '13/3/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton variant="outlined">Unpublish</NonPropagationButton>],
]
const data2 = [
  [0, "Title", 'Traffic', 'Dop', "", ""],
  [1, "electricity", 10, '12/2/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton color="error" variant="outlined">Delete</NonPropagationButton>],
  [2, "electricity", 10, '12/2/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton color="error" variant="outlined">Delete</NonPropagationButton>],
  [3, "cell study", 4, '13/3/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton color="error" variant="outlined">Delete</NonPropagationButton>],
  [4, "cell study", 4, '13/3/22', <NonPropagationButton variant="outlined">Edit</NonPropagationButton>, <NonPropagationButton color="error" variant="outlined">Delete</NonPropagationButton>],
]

export default () => {
  // useEffect(() => {
  //   const styleSheet = getComputedStyle(document.documentElement)
  //   styleSheet.setProperty('--followers-display', 'inline')
  //   console.log(styleSheet.getPropertyValue("--followers-display"))
  //   return () => {
  //     styleSheet.setProperty('--followers-display', 'none')
  //   }
  // }, [])
  
  return (
    <Stack style={{
      flex: 1,
      minHeight: "100vh",
      height: "100vh",
      maxHeight: "100vh",
      // padding: "1rem"
    }}>
      <Stack style={{
        flex: 1,
        borderRadius: "4px",
        overflow: "hidden",
        // marginRight: "1rem",
        position: "relative"
      }}>
        <Stack direction="row" spacing={1} style={{
              // flex: 1
              position: "absolute",
              width: "200%",
              transition: ".5s ease",
              marginLeft: true ? "-100%" : "0%"
          }}>
          {/* Page 1 */}
          <Page1/>
          {/* Page 2 */}
          <Page2/>
        </Stack>
      </Stack>
    </Stack>
  )
}

const Page1 = () => {
  return (
    <Stack spacing={1} style={{
      // position: "absolute",
      width: "50%",
      // background: "green",
      overflow: "auto",
      height: "100vh",
      padding: "1rem",
      borderRadius: "4px",
      margin: 0
      // marginTop: "18.15%"
      // flex: 1
    }}>
    <Stack direction="row" spacing={1}>
        <Button variant="outlined">Published</Button>
        <Button variant="outlined">Unpublished</Button>
        <Stack sx={{flex: 1}}/>
        <Button variant="contained">New</Button>
    </Stack>
    <Stack spacing={1.5} className="Courses-Page-Cards-Container">
      <ContentCard title="Pending courses" noPad>
        <Table data={[[0, "{{course name}}", "{{Subject}}", "{{Date}}", "{{Status}}"]]} noHeader/>
      </ContentCard>
      <ContentCard noPad>
        <Table data={[[0, "{{course name}}", "{{Subject}}", "{{Date}}", "{{Status}}"]]} noHeader/>
      </ContentCard>
      <ContentCard noPad>
        <Table data={[[0, "{{course name}}", "{{Subject}}", "{{Date}}", "{{Status}}"]]} noHeader/>
      </ContentCard>
      <ContentCard title="Published courses">
        <Table className="Published-Course-Table-data-Container" data={data1}/>
      </ContentCard>
      <ContentCard title="Unpublished courses">
        <Table data={data2}/>
      </ContentCard>
    </Stack>
    </Stack>
  )
}

const Page2 = () => {
  const data = [
    [0, "Time", 'Title', ''],
    [1, "12:32", '{{section 1}}', <IconButton color="error"><DeleteIcon/></IconButton>],
    [2, "13:24", '{{section 2}}', <IconButton color="error"><DeleteIcon/></IconButton>],
    [3, "16:22", '{{section 3}}', <IconButton color="error"><DeleteIcon/></IconButton>],
  ]
  return (
    <Stack spacing={1} style={{
      // position: "absolute",
      width: "50%",
      // background: "green",
      overflow: "auto",
      height: "100vh",
      padding: "1rem",
      borderRadius: "4px",
      margin: 0
      // marginTop: "18.15%"
      // flex: 1
    }}>
    <ContentCard title="New Course Video">
      <Stack spacing={1.5} direction="row">
        <Stack flex={1}>
          <Stack spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
            <IconButton><SkipBackIcon/></IconButton>
            <Typography>00:00</Typography>
            <IconButton><SkipNextIcon/></IconButton>
            <IconButton><PlayIcon/></IconButton>
            <IconButton><FlagIcon/></IconButton>
          </Stack>
          <ContentCard innerStyle={{
            maxHeight: "15rem",
            overflow: "auto"
          }}>
            <Table className="CoursePage-table" data={data} hasHelper/>
          </ContentCard>
        </Stack>
        <Stack flex={1}>
          <ContentCard noPad>
            <Stack style={{background: "black", borderRadius: "4px", height: "15rem", width: "100%", color: "white"}} justifyContent="center" alignItems="center">
              Drag and Drop a video
              <br/><a href="#">choose a file</a>
            </Stack>
          </ContentCard>
          <Button component="label" variant="outlined" startIcon={<SubtitleIcon/>}>
            <Typography>Add subtitles</Typography>
            <input type="file" accept=".srt" hidden/>
          </Button>
        </Stack>
      </Stack>
    </ContentCard>
    <ContentCard title="New Course Info">
      <Stack spacing={1}>
        <InputItem text="Title"/>
        <SelectItem text="Subject" options={[
            "Mathematics",
            "Physics",
            "Chemistry",
            "Biology"
        ]}/>
        <ComponentItem text="Preview file" component={
          <Button component="label" variant="outlined">
            <Typography>Choose a file</Typography>
            <input type="file" accept=".mp4" hidden/>
          </Button>
        }/>
        <ComponentItem text="Video file" component={
          <Button component="label" variant="outlined">
            <Typography>Choose a file</Typography>
            <input type="file" accept=".mp4" hidden/>
          </Button>
        }/>
        <InputItem text="Tags"/>
        <ComponentItem text="Notes" component={
          <Button component="label" variant="outlined">
            <Typography>Choose a file</Typography>
            <input type="file" accept=".pdf" hidden/>
          </Button>
        }/>
        <ComponentItem className="InputItem-textarea" text="Comment" component={
          <TextField multiline maxRows={3} variant="outlined" sx={{
            padding: 0
          }}></TextField>
        }/>
        <ComponentItem text="Date of publication" component={
          <Button component="label" variant="outlined">
            <Typography>19/1/2050</Typography>
            <input type="date" hidden/>
          </Button>
        }/>
        <InputItem text="Price" unit="Rwf"/>
        <ButtonItem text="allow reviews" checkBox checked/>
        <ButtonItem text buttons={[
          {
            text: "Publish",
            props: {
              variant: "contained"
            }
          }
        ]}/>
      </Stack>
    </ContentCard>
    </Stack>
  )
}
