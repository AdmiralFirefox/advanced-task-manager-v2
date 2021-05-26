import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import textEditModalContentStyles from "../../styles/Home.module.scss";

const TextEditModalTextField = withStyles({
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

const CancelEditButton = withStyles(() => ({
  root: {
    color: "#FBFCFF",
    background: "#BF0000",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#C42847",
    },
  },
}))(Button);

const SubmitEditButton = withStyles(() => ({
  root: {
    fontSize: "0.85rem",
    color: "#FBFCFF",
    background: "#785589",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#977390",
    },
  },
}))(Button);

function TextEditModalContent({
  task,
  textEditModal,
  textEditModalClose,
  setEditText,
  taskEdit,
  editText,
  setEditTask,
  darkMode,
}) {
  return (
    <Modal
      open={textEditModal}
      onClose={textEditModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={textEditModalContentStyles["text-edit-modal-animation"]}>
        <div
          className={
            darkMode
              ? textEditModalContentStyles["text-edit-modal-content-dark"]
              : textEditModalContentStyles["text-edit-modal-content"]
          }
        >
          <div>
            <TextEditModalTextField
              variant="outlined"
              type="text"
              label="Edit Task"
              onChange={(e) => setEditText(e.target.value)}
              defaultValue={task.text}
              checked={task.completed}
              InputLabelProps={{
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
          </div>
          <div>
            <SubmitEditButton
              variant="contained"
              onClick={() => {
                taskEdit(task.id);
                textEditModalClose();
              }}
              disabled={!editText.length}
            >
              Submit Edit
            </SubmitEditButton>
            <CancelEditButton
              variant="contained"
              onClick={() => {
                setEditTask(false);
                setEditTask(null);
                setEditText("");
                textEditModalClose();
              }}
            >
              Cancel
            </CancelEditButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default TextEditModalContent;
