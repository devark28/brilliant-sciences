import {Select, Stack, MenuItem} from "@mui/material"

export default ({text, options}) => {
  return (
    <Stack id="preferred-course-select-label" justifyContent="space-between" direction="row">
      <span>{text}</span>
      <Select labelId="preferred-course-select-label" value={1} style={{
        minWidth: "30%",
        height: "2rem"
      }}>
        {
          options && (
            options.map((opt, index) => (
              <MenuItem value={index+1}>{opt}</MenuItem>
            ))
          )
        }
      </Select>
    </Stack>
  )
}