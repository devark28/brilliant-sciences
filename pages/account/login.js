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
          <Typography>Log In</Typography>
        </Stack>
        <Stack component={"span"} style={{
          // backgroundColor: "red"
          }}>
          <TextField label="Enter a username or email" helperText="Error/Success: {{message}}" style={{margin: "2% 0"}}/>
          <TextField label="Enter a password" helperText="Error/Success: {{message}}"  style={{margin: "2% 0"}}/>
          <Button variant="outlined" onClick={(e) => {
            // fire up
          }}>Log In</Button>
          <Stack style={{flexDirection: "row", justifyContent: "space-between", margin: "2% 0"}}>
            <a href="/account/signup">I have no account, Sign Up instead!</a>
            <a href="/resetpassword">Forgot password!</a>
          </Stack>
        </Stack>
      </Stack>
    )
  }
  