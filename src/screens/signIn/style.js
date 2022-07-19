import makeStyles from "@mui/styles/makeStyles";
export const useStyles = makeStyles((theme) => ({
  appBarContainer: {
    background: "linear-gradient(to bottom, #0081CA, #0663B4);",
  },
  logoImg: {
    background: "#fff",
    height: "auto",
    width: "100%",
  },
  headerText: {
    color: "#fff",
  },
  contentText: {
    fontSize: "12px !important",
  },
  bodyContainer: {
    padding: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyGrid: {
    display: "flex",
    justifyContent: "center",
  },
  bottomContainer: {
    position: "fixed",
    bottom: 0,
    padding: "4px 8px !important",
    borderTop: "1px solid #e4eaee",
    display: "flex !important",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  googleButton: {
    backgroundColor: "#dc4a38 !important",
    color: "#fff !important",
    padding: "4px 30px !important",
    fontSize: "12px !important",
    textTransform: "none !important",
    margin: "16px 0px !important",
  },
  confirmationText: {
    fontSize: "14px !important",
    marginTop: "30px !important",
  },
  bodyItem: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
  },
  largeText: {
    color: "#535353",
    fontSize: "24px !important",
    margin: "16px 0px !important",
  },
  formLabelText: {
    fontSize: "14px !important",
    color: "#000 !important",
  },
  labelText: {
    color: "#989898",
    fontSize: "12px !important",
  },
  linkText: {
    color: "#3580C3",
    fontSize: "12px !important",
  },
  continueButton: {
    background: "#005FB3 !important",
    color: "#fff !important",
    fontSize: "12px !important",
    marginTop: "16px !important",
  },
  helperText: {
    color: "red !important",
  },
  bodyDiv: {
    height: "calc(100vh - 160px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
