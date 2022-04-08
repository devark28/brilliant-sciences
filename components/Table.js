// import {Fragment} from 'react'
import {Stack, Button} from "@mui/material"

export default ({data, noHeader, color, style, className, hasHelper}) => {
  return (
    <div className={className} style={{
        display: "grid",
        ...style
    }}>
        {renderData(data, noHeader, color, hasHelper)}
    </div>
  )
}

const renderData = (data, noHeader, color, hasHelper) => {
    let output = Array()
    const cols = data[0].length - 1
    const rows = data.length
    for (let i = 0; i < rows; i++){
        let temp = Array()
        for (let k = 1; k < (cols + 1); k++){
            temp.push(<Stack key={k} spacing={0.5} sx={{borderColor: "primary.main"}} style={{
                width: (
                    hasHelper
                    ? (k == cols) ? "auto" : `${(Math.trunc((1/cols)*150))}%`
                    : `${(Math.trunc((1/cols)*100))}%`
                ),
                color: "inherit",
                // borderBottomWidth: i == rows - 1 ? 0 : "1.5px",
                // paddingBottom: i == rows - 1 ? 0 : ".5rem"
            }}>{data[i][k]}</Stack>)
        }
        if(i == 0 && !noHeader){
            output.push(<Stack key={i} sx={{color: (color != null && color != undefined) ? color : "primary.main", borderColor: "primary.main"}} direction="row" style={{
                // justifyContent: "space-between",
                justifyContent: "flex-start",
                textAlign: "start",
                alignItems: "center",
                padding: noHeader ? ".5rem" : "0 1rem",
                borderStyle: "solid",
                borderWidth: 0,
                borderBottomWidth: noHeader ? 0 : "1.5px",
                paddingBottom:  noHeader ? ".5rem" : ".3rem",
                marginBottom:  noHeader ? 0 : ".7rem"
            }}>{temp}</Stack>)
        }else{
            output.push(<Button key={i} variant="standard" sx={{color: noHeader ? "primary.main" : ""}} direction="row" onClick={() => {console.log(data[i][0])}} style={{
                // justifyContent: "space-between",
                justifyContent: "flex-start",
                textAlign: "start",
                alignItems: "center",
                borderStyle: "none",
            }}>{temp}</Button>)
        }
    }
    return output
}