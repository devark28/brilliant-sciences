import {Fragment} from "react"
import {Stack, Button} from "@mui/material"
import MenuButton from "../MenuButton"
import ContentCard from "../ContentCard"
import InputItem from "../settingItems/InputItem"
import LabelItem from "../settingItems/LabelItem"
import ButtonItem from "../settingItems/ButtonItem"
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
        <ContentCard title="Plans">
          <LabelItem text="Pay as you learn" value="course dependent" valueProps={{
            sx: {
              borderColor: "primary.main"
            },
            style: {
              borderRadius: "4px",
              borderStyle: "solid",
              borderWidth: "1.5px",
              padding: ".5rem",
              height: "2rem",
              display: "flex",
              alignItems: "center"
            }
          }}/>
        </ContentCard>
        <ContentCard>
          <InputItem text="Choose a preference" unit="Rwf" inputProps={{
            value: 5000
          }}/>
        </ContentCard>
        <ContentCard>
          <InputItem text="full package" unit="Rwf" inputProps={{
            value: 9000
          }}/>
        </ContentCard>
        <div style={{display: 'flex', flex: 1}}></div>
        <ButtonItem spacing={3} checkBox checked text="Save with discount" buttons={[
          {
            text: "Save",
            props: {
              variant: "contained",
              style: {
                width: "7rem"
              }
            }
          },
          {
            text: "Cancel",
            props: {
              style: {
                width: "7rem"
              }
            }
          },
        ]}/>
      </Stack>
    </Stack>
  )
}