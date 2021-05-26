import React, { useState } from "react";
import TextEditModalContent from "./Modals/TextEditModalContent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import editTextStyles from "../styles/Home.module.scss";

const EditTextButton = withStyles(() => ({
  root: {
    color: "#FBFCFF",
    background: "#546A7B",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#798086",
    },
  },
}))(Button);

function EditText({
  task,
  editTask,
  setEditText,
  editText,
  taskEdit,
  setEditTask,
  darkMode,
}) {
  const [textEditModal, setTextEditModal] = useState(false);

  function textEditModalOpen() {
    setTextEditModal(true);
  }

  function textEditModalClose() {
    setTextEditModal(false);
    setEditTask(false);
    setEditTask(null);
    setEditText("");
  }

  return (
    <div>
      <TextEditModalContent
        task={task}
        textEditModal={textEditModal}
        textEditModalClose={textEditModalClose}
        setEditText={setEditText}
        taskEdit={taskEdit}
        editText={editText}
        setEditTask={setEditTask}
        darkMode={darkMode}
      />
      {editTask === task.id ? (
        <div
          className={
            task.completed
              ? editTextStyles["edit-text-styles-content-completed"]
              : editTextStyles["edit-text-styles-content"]
          }
        >
          <div>
            <h2>{task.text}</h2>
          </div>
          <div>
            <EditTextButton
              variant="contained"
              disabled={task.completed}
              onClick={() => {
                setEditTask(task.id);
                textEditModalOpen();
              }}
            >
              Edit
            </EditTextButton>
          </div>
        </div>
      ) : (
        <div
          className={
            task.completed
              ? editTextStyles["edit-text-styles-content-completed"]
              : editTextStyles["edit-text-styles-content"]
          }
        >
          <div>
            <h2>{task.text}</h2>
          </div>
          <div>
            <EditTextButton
              variant="contained"
              disabled={task.completed}
              onClick={() => {
                setEditTask(task.id);
                textEditModalOpen();
              }}
            >
              Edit
            </EditTextButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditText;
