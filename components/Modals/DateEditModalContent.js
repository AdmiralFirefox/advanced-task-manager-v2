import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import dateEditModalContentStyles from "../../styles/Home.module.scss";

const CancelDeadlineEdit = withStyles(() => ({
  root: {
    color: "#FBFCFF",
    background: "#BF0000",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#C42847",
    },
  },
}))(Button);

const SubmitDeadlineEdit = withStyles(() => ({
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

const DateEditModalTextField = withStyles({
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

function DateEditModalContent({
  task,
  dateEditModal,
  dateEditModalClose,
  setEditTextDeadline,
  deadlineEdit,
  editTextDeadline,
  setEditDeadline,
  darkMode,
}) {
  return (
    <div>
      <Modal
        open={dateEditModal}
        onClose={dateEditModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={dateEditModalContentStyles["date-edit-modal-animation"]}>
          <div
            className={
              darkMode
                ? dateEditModalContentStyles["date-edit-modal-content-dark"]
                : dateEditModalContentStyles["date-edit-modal-content"]
            }
          >
            <div>
              <DateEditModalTextField
                variant="outlined"
                id="datetime-local"
                label="Edit Deadline"
                type="datetime-local"
                onChange={(e) => setEditTextDeadline(e.target.value)}
                defaultValue={task.finished}
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
            </div>
            <div
              className={dateEditModalContentStyles["date-edit-modal-buttons"]}
            >
              <SubmitDeadlineEdit
                variant="contained"
                onClick={() => {
                  deadlineEdit(task.id);
                  dateEditModalClose();
                }}
                disabled={!editTextDeadline}
                className={
                  dateEditModalContentStyles["submit-deadline-edit-button"]
                }
              >
                Submit Deadline Edit
              </SubmitDeadlineEdit>

              <CancelDeadlineEdit
                variant="contained"
                onClick={() => {
                  setEditDeadline(false);
                  setEditDeadline(null);
                  setEditTextDeadline("");
                  dateEditModalClose();
                }}
                className={
                  dateEditModalContentStyles["cancel-deadline-edit-button"]
                }
              >
                Cancel
              </CancelDeadlineEdit>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DateEditModalContent;
