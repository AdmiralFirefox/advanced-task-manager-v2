import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const TextFieldDateTime = withStyles({
  root: {
    marginBottom: "1.7em",
    width: "min(65vw, 28em)",
    "& label.Mui-focused": {
      color: "red",
    },
    "& .MuiInput-underline:after": {
      border: "3px solid #548687",
      transition: "border .3s ease-in-out",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "3px solid #548687",
        transition: "border .3s ease-in-out",
      },
      "&:hover fieldset": {
        border: "3px solid #FFB140",
        transition: "border .3s ease-in-out",
      },
      "&.Mui-focused fieldset": {
        border: "3px solid #47A025",
        transition: "border .3s ease-in-out",
      },
    },
  },
})(TextField);

function DateTimeTextfield({ deadline, setDeadline, darkMode }) {
  return (
    <TextFieldDateTime
      variant="outlined"
      id="datetime-local"
      label="Set Deadline"
      type="datetime-local"
      onChange={(e) => setDeadline(e.target.value)}
      value={deadline}
      InputLabelProps={{
        shrink: true,
        style: {
          color: darkMode ? "#fbfcff" : "#222222",
          fontWeight: "500",
          transition: "all .3s ease-in-out",
        },
      }}
      InputProps={{
        style: {
          color: darkMode ? "#fbfcff" : "#222222",
          fontWeight: "500",
          transition: "all .3s ease-in-out",
        },
      }}
    />
  );
}

export default DateTimeTextfield;
