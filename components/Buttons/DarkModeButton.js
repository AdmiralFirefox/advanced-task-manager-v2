import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Sun from "../../assets/sunny.svg";
import Moon from "../../assets/half-moon.svg";
import darkModeButtonStyles from "../../styles/Home.module.scss";

const DarkModeButtonToggle = withStyles(() => ({
  root: {
    color: "#222222",
    background: "#fbfcff",
    "&:hover": {
      background: "#D8DAD3",
    },
  },
}))(Button);

const LightModeButtonToggle = withStyles(() => ({
  root: {
    color: "#fbfcff",
    background: "#00171F",
    "&:hover": {
      background: "#172121",
    },
  },
}))(Button);

function DarkModeButton({ toggleDarkMode, darkMode }) {
  return (
    <>
      {darkMode ? (
        <div className={darkModeButtonStyles["dark-mode-button-content"]}>
          <DarkModeButtonToggle variant="contained" onClick={toggleDarkMode}>
            Light Mode
          </DarkModeButtonToggle>
          <img src={Sun} alt="Sun Logo" />
        </div>
      ) : (
        <div className={darkModeButtonStyles["dark-mode-button-content"]}>
          <LightModeButtonToggle variant="contained" onClick={toggleDarkMode}>
            Dark Mode
          </LightModeButtonToggle>
          <img src={Moon} alt="Moon Logo" />
        </div>
      )}
    </>
  );
}

export default DarkModeButton;
