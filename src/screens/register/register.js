import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
  Snackbar,
} from "@mui/material";
import { useStyles } from "./style";
import DocumentImage from "../../assets/img/dummyimage.jpg";
import AaatharImage from "../../assets/img/aathar.png";
import MuiAlert from "@mui/material/Alert";

// Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Register components
const Register = () => {
  const classes = useStyles();

  // States
  const [openDialog, setOpenDialog] = useState(true);
  const [formData, setFormData] = useState({
    aathar: "",
    otp: "",
    isChecked: false,
    isAatharValid: false,
    isOtpValid: false,
  });
  const [openSnackBar, setOpenSnackBar] = useState(false);

  // handle Functions
  const handleChange = (e) => {
    if (e.target.name === "aathar") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        isAatharValid: e.target.value.length === 12 ? true : false,
      });
    } else if (e.target.name === "otp") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        isOtpValid: e.target.value.length === 6 ? true : false,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleCheck = (e) => {
    setFormData({
      ...formData,
      isChecked: e.target.checked,
    });
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // Submit function
  const verifySubmit = () => {
    setOpenSnackBar(true);
    setOpenDialog(false);
    setFormData({
      aathar: "",
      otp: "",
      isChecked: false,
      isAatharValid: false,
      isOtpValid: false,
    });
  };
  const handleClose = () => {
    setOpenSnackBar(false);
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{ p: 0 }}>
        {/* Dialog Form  */}
        <Dialog
          onClose={handleDialogClose}
          open={openDialog}
          scroll="paper"
          classes={
            (classes.dialogFull,
            {
              scrollPaper: classes.topScrollPaper,
              paperScrollBody: classes.topPaperScrollBody,
            })
          }
          fullWidth
        >
          <DialogTitle>Register Aadhaar</DialogTitle>
          <Divider />
          <DialogContent style={{ padding: "16px 8px" }}>
            <Grid container xs={12}>
              <Grid
                item
                container
                xs={12}
                justifyContent="center"
                alignItems={"flex-start"}
              >
                <Grid item xs={3}>
                  <img
                    src={AaatharImage}
                    alt="document"
                    loading="lazy"
                    width="100%"
                    height={"auto"}
                  />
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.verifyGrid}>
                    <TextField
                      size="small"
                      type={"number"}
                      value={formData.aathar}
                      name="aathar"
                      onChange={handleChange}
                    />

                    <Button
                      className={classes.verfiybutton}
                      disabled={!formData?.isAatharValid}
                      style={{
                        background: !formData?.isAatharValid
                          ? "grey"
                          : "#0261B0",
                      }}
                    >
                      Verify
                    </Button>
                  </div>
                  <Grid item xs={12} className={classes.checkBoxGrid}>
                    <Checkbox
                      checked={formData?.isChecked}
                      onChange={handleCheck}
                    />

                    <Grid item>
                      <span className={classes.contentText}>
                        I agree to the esign this <u>KYC document</u> to get
                        started
                      </span>
                    </Grid>
                  </Grid>
                  <Grid className={classes.otpGrid} xs={8}>
                    <TextField
                      size="small"
                      type={"number"}
                      value={formData.otp}
                      name="otp"
                      onChange={handleChange}
                      disabled={!formData?.isAatharValid}
                    />
                    <Button
                      className={classes.verfiybutton}
                      style={{
                        background: !formData?.isOtpValid ? "grey" : "#0261B0",
                      }}
                      disabled={
                        !formData?.isOtpValid && !formData?.isAatharValid
                      }
                      onClick={verifySubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>

        {/* Body of the page */}
        <Grid container xs={12} justifyContent="center" alignItems={"center"}>
          <Typography>Register Page</Typography>

          <img
            src={DocumentImage}
            alt="document"
            loading="lazy"
            width="100%"
            height={"auto"}
          />

          <Grid item xs={10} spacing={2}>
            <Button
              onClick={() => setOpenDialog(true)}
              fullWidth
              className={classes.requestButton}
            >
              Request OTP to Sign
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Success snack Bar */}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Aathar Verification Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
