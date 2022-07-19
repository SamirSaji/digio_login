import makeStyles from "@mui/styles/makeStyles";
export const useStyles = makeStyles((theme) => ({
  topScrollPaper: {
    alignItems: "flex-start !important",
  },
  topPaperScrollBody: {
    verticalAlign: "top !important",
  },
  requestButton: {
    fontSize: "14px !important",
    color: "#fff !important",
    backgroundColor: "#0261B0 !important",
    borderRadius: "0px !important",
  },
  dialogFull: {
    "& .MuiDialog-paper": {
      margin: "0px !important",
      width: "100% !important",
    },
  },
  verifyGrid: {
    display: "flex",
  },
  otpGrid: {
    display: "flex",
    marginTop: "12px",
    marginLeft: "auto",
  },
  verfiybutton: {
    color: "#fff !important",
    // backgroundColor: "#0261B0 !important",
    borderRadius: "0px !important",
    fontSize: "12px !important",
    padding: "2px !important",
    marginLeft: "2px !important",
  },
  contentText: {
    fontSize: "12px !important",
  },
  checkBoxGrid: {
    display: "flex",
  },
}));
