import React, { useState } from "react";
import {
  Container,
  AppBar,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useStyles } from "./style";
import Logo from "../../assets/img/logo.png";
import DigioLogo from "../../assets/img/digio_logo.jpg";
import GooglePlusIcon from "../../assets/googleplus";
import { ValidateEmail } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // States
  const [details, setDetails] = useState({
    email: "",
    error: false,
  });
  const handleChange = (val) => {
    setDetails({
      email: val,
      error: false,
    });
  };

  // Submit Functions
  const onSubmit = () => {
    if (ValidateEmail(details.email)) {
      navigate("/verify");
    } else {
      setDetails({
        ...details,
        error: true,
      });
    }
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{ p: 0 }}>
        {/* Header Part */}
        <AppBar position="static">
          <Container maxWidth="sm" className={classes.appBarContainer}>
            <Grid container xs={12} alignItems={"center"}>
              <Grid xs={8} sx={{ p: 0.5 }}>
                <Typography className={classes.headerText}>
                  Sign document using
                </Typography>
                <Typography className={classes.contentText}>
                  sanket@digio.io
                </Typography>
              </Grid>
              <Grid xs={4}>
                <img
                  src={Logo}
                  alt="logo"
                  loading="lazy"
                  className={classes.logoImg}
                />
              </Grid>
            </Grid>
          </Container>
        </AppBar>

        {/* Body part */}
        <div className={classes.bodyDiv}>
          <Grid container xs={12} className={classes.bodyContainer}>
            <Grid item className={classes.bodyItem}>
              <Typography>sanket@digio.in uses Gmail?</Typography>
              <Typography>Login using google</Typography>
              <Button className={classes.googleButton}>
                <GooglePlusIcon /> Google
              </Button>
            </Grid>
            <Grid xs={12} item className={classes.largeText}>
              <Divider>OR</Divider>
            </Grid>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <FormLabel className={classes.formLabelText}>
                  Proceed with your email address
                </FormLabel>
                <TextField
                  size="small"
                  type="email"
                  value={details.email}
                  onChange={(e) => handleChange(e.target.value)}
                />
                {details.error && (
                  <FormHelperText className={classes.helperText}>
                    Please Enter Valid Email
                  </FormHelperText>
                )}

                <Typography className={classes.confirmationText}>
                  By continuing, I confirm to the Terms and Service and Privacy
                  Policy of <span className={classes.linkText}>Digio.in</span>
                </Typography>
                <Button className={classes.continueButton} onClick={onSubmit}>
                  Continue
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </div>

        {/* Bottom part */}
        <Container maxWidth="sm" className={classes.bottomContainer}>
          <Grid item xs={8}>
            <Grid container alignItems={"center"}>
              <img
                src={DigioLogo}
                alt="digio"
                loading="lazy"
                width="40px"
                height="40px"
              />
              <Grid item>
                <Typography className={classes.labelText}>
                  &nbsp;&nbsp;Powered by
                </Typography>
                <Typography className={classes.linkText}>
                  &nbsp;&nbsp;www.digio.in
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.contentText}>
              <span className={classes.largeText}>1</span> /3 steps
            </Typography>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default SignIn;
