import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Stack  from '@mui/material/Stack';
import {Button, TextField}  from '@mui/material';

export default () => {
    return (
      <Stack style={{width: "70%", margin: "auto"}} component={"span"}>
        <Stack direction="row" style={{
          // backgroundColor: "red",
          margin: "5% 0",
          borderStyle: "solid",
          borderWidth: "2px",
          borderRadius: ".5rem",
          height: "3rem",
          justifyContent: "center",
          alignItems: "center"
          }}>
          <LockIcon style={{marginRight: "1%"}}/>
          <Typography>Sign Up</Typography>
        </Stack>
        <Stack component={"span"} style={{
          // backgroundColor: "red"
          }}>
          <TextField type="text" label="Enter a username" helperText="Error/Success: {{message}}" style={{margin: "2% 0"}}/>
          <TextField type="email" label="Enter your email" helperText="Error/Success: {{message}}" style={{margin: "2% 0"}}/>
          <TextField type="password" label="Enter a password" helperText="Error/Success: {{message}}"  style={{margin: "2% 0"}}/>
          <TextField type="password" label="Confirm the password" helperText="Error/Success: {{message}}"  style={{margin: "2% 0"}}/>
          <Button variant="outlined" onClick={(e) => {
            // fire up
          }}>Sign Up</Button>
          <Stack style={{flexDirection: "row", justifyContent: "space-between", margin: "2% 0"}}>
            <a></a>
            <a href="/account/login">I already have an account, Log In instead!</a>
          </Stack>
        </Stack>
      </Stack>
    )
  }
  