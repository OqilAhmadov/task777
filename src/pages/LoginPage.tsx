import { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.scss";

const theme = createTheme();
const URL = "https://aravagent.herokuapp.com/v1/admin/login";

const LoginPage: React.FC = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);

  console.log(data)

  let token = window.localStorage.getItem("token") || false;

  if (!!token === true) {
    window.location.assign("/");
  }

  const SubmitHandler = () => {
    
     axios
      .post(URL, {
        phone_number: `${user}`,
        password: `${pass}`,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data.data);
        window.localStorage.setItem("token", `${res.data.data.token}`);
        window.location.assign("/");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="bg">
          <img className="logoImg" src="/Arava.svg" alt="Arava-Logo" />

          <div className="LogIn">
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography style={{ fontWeight: "600" }} component="h1" variant="h5">
                    Tizimga kirish
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    // onSubmit={SubmitHandler}
                    sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          fullWidth
                          label="Telefon raqam"
                          autoFocus
                          value={user}
                          // name={user}
                          onChange={(e) => {
                            setUser(e.target.value);
                          }}
                        />
                        
                      </Grid>
                      <Grid item xs={16}>
                        <TextField
                          fullWidth
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          value={pass}
                          // name={pass}
                          onChange={(e) => {
                            setPass(e.target.value);
                          }}
                        />
                    
                      </Grid>
                    </Grid>
                    <Button
                     onClick={() => {
                      SubmitHandler();
                    }}
                     
                      style={{ background: "#159671" }}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}>
                      Boshlash
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
