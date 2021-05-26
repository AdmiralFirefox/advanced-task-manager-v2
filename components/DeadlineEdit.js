import React, { useState } from "react";
import DateEditModalContent from "./Modals/DateEditModalContent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import deadlineEditStyles from "../styles/Home.module.scss";

const EditDeadlineButton = withStyles(() => ({
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

const ClearDeadlineButton = withStyles(() => ({
  root: {
    fontSize: "0.85rem",
    color: "#0D160B",
    background: "#EAF6FF",
    "&:hover": {
      background: "#D9D9D9",
    },
  },
}))(Button);

function DeadlineEdit({
  editDeadline,
  task,
  setEditTextDeadline,
  deadlineEdit,
  setEditDeadline,
  clearDeadline,
  editTextDeadline,
  darkMode,
}) {
  const [dateEditModal, setDateEditModal] = useState(false);

  function dateEditModalOpen() {
    setDateEditModal(true);
  }

  function dateEditModalClose() {
    setDateEditModal(false);
    setEditDeadline(false);
    setEditDeadline(null);
    setEditTextDeadline("");
  }

  return (
    <div>
      <DateEditModalContent
        task={task}
        dateEditModal={dateEditModal}
        dateEditModalClose={dateEditModalClose}
        setEditTextDeadline={setEditTextDeadline}
        deadlineEdit={deadlineEdit}
        editTextDeadline={editTextDeadline}
        setEditDeadline={setEditDeadline}
        darkMode={darkMode}
      />
      {editDeadline === task.id ? (
        <div
          className={
            task.completed
              ? deadlineEditStyles["date-edit-content-completed"]
              : deadlineEditStyles["date-edit-content"]
          }
        >
          <div>
            <h2 className={deadlineEditStyles["date-edit-title"]}>Deadline:</h2>
            <h2>{task.finished}</h2>
          </div>
          <div className={deadlineEditStyles["date-edit-buttons"]}>
            <div>
              <EditDeadlineButton
                variant="contained"
                disabled={task.completed}
                onClick={() => {
                  setEditDeadline(task.id);
                  dateEditModalOpen();
                }}
              >
                Edit Deadline
              </EditDeadlineButton>
            </div>
            <div>
              <ClearDeadlineButton
                variant="contained"
                onClick={() => clearDeadline(task.id)}
                disabled={task.completed}
              >
                Clear Deadline
              </ClearDeadlineButton>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            task.completed
              ? deadlineEditStyles["date-edit-content-completed"]
              : deadlineEditStyles["date-edit-content"]
          }
        >
          <div>
            <h2 className={deadlineEditStyles["date-edit-title"]}>Deadline:</h2>
            <h2>{task.finished}</h2>
          </div>
          <div className={deadlineEditStyles["date-edit-buttons"]}>
            <div>
              <EditDeadlineButton
                variant="contained"
                disabled={task.completed}
                onClick={() => {
                  setEditDeadline(task.id);
                  dateEditModalOpen();
                }}
              >
                Edit Deadline
              </EditDeadlineButton>
            </div>
            <div>
              <ClearDeadlineButton
                variant="contained"
                onClick={() => clearDeadline(task.id)}
                disabled={task.completed}
              >
                Clear Deadline
              </ClearDeadlineButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeadlineEdit;
