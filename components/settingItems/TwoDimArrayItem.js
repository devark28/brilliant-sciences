import {Typography, Stack, TextField, Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState, Fragment, useEffect } from "react"
import { makeId, maxChars } from "../../utils"

export default ({text, style, onChange, typeFile}) => {
  const [_value, set_value] = useState("")
  const [_title, set_title] = useState("")
  const [_file, set_file] = useState()
  const [values, setValues] = useState([])
  const addValue = async (value) => {
    if(value){
      if(typeFile){
        const url = URL.createObjectURL(value)
        const text = await (await fetch(url)).text()
        console.log(text);
        setValues([
          ...values,
          {
            id: makeId(5),
            value: value.name,
            file: value,
            text: text,
            title: _title,
          }
        ])
      }else{
        setValues([
          ...values,
          {
            id: makeId(5),
            value,
            title: _title,
          }
        ])
      }
    }
  }

  const removeValue = (id) => {
    if(id){
      setValues(values.filter(value => (value.id != id)))
    }
  }

  useEffect(() => {
    try{
      onChange(values)
      console.log(values);
    }catch(e){}
  }, [values])

  return (
    <Stack style={style} justifyContent="space-between" alignItems="flex-start" direction="row">
      <span>{text}</span>
      <Stack spacing={1} component={"span"} alignItems="flex-start" direction="column" style={{fontSize: ".8rem", fontWeight: "bold"}}>
        <Stack spacing={1} component={"span"} alignItems="center" direction="row">
          <Fragment>
            {typeFile
            ? (
              <Fragment>
                <TextField className="InputItem-input" value={_title} placeholder="Note Title" onChange={(e) => {
                    set_title(e.target.value)
                }}></TextField>
                <Button component="label" variant="outlined">
                    <Typography>
                    {_file
                    ? (maxChars(_file.name))
                    : "Choose a file"}
                    </Typography>
                    <input type="file" accept=".txt" hidden onChange={(e) => {
                    if(e.target.files[0] && e.target.files[0].type == "text/plain"){
                        set_file(e.target.files[0])
                        e.target.files = undefined
                        // type: "text/plain"
                    }
                    }}/>
                </Button>
              </Fragment>
            )
            : (
              <Fragment>
                <TextField className="InputItem-input" value={_title} onChange={(e) => {
                    set_title(e.target.value)
                }}></TextField>
                <TextField className="InputItem-input" value={_value} onChange={(e) => {
                    set_value(e.target.value)
                }}></TextField>
              </Fragment>
            )}
          </Fragment>
          <Button variant="outlined" style={{
            height: "2rem",
            width: "2rem",
            minWidth: 0,
          }} onClick={() => {
            if(typeFile){
              if(_file && _title){
                console.log(_file);
                addValue(_file)
                set_file(null)
                set_title("")
              }
            }else{
              if(_value && _title){
                addValue(_value)
                set_value("")
                set_title("")
              }
            }
          }}>
            <AddIcon/>
          </Button>
        </Stack>
        <Fragment>
          {renderItems(values, removeValue)}
        </Fragment>
      </Stack>
    </Stack>
  )
}

const renderItems = (values, removeValue) => {
  const output = Array()
  for (let index = 0; index < values.length; index++) {
    const title = values[index].title
    const val = values[index].value
    const id = values[index].id
    output.push(
      <Stack spacing={1} component={"span"} alignItems="center" direction="row" style={{width: "100%"}}>
        <Button variant="outlined" style={{
          height: "2rem",
          width: "2rem",
          minWidth: 0,
        }} onClick={() => {
          removeValue(id)
        }}>
          <RemoveIcon/>
        </Button>
        <Typography variant="outlined" sx={{borderColor: "primary.main"}} style={{
          height: "2rem",
          minWidth: 0,
          fontSize: "1rem",
          fontWeight: "200",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "4px",
          padding: "0 .5rem",
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}>{maxChars(title)} ({maxChars(val)})</Typography>
      </Stack>
    )
  }
  return output
}