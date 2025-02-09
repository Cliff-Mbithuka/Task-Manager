import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function TaskForm({ visible, onHide, taskToEdit, refreshTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "TODO",
    priority: "MEDIUM",
    dueDate: null,
  });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleSubmit = async () => {
    try {
      const formattedTask = {
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split("T")[0] : null,
      };
      

      if (taskToEdit) {
        await axios.put(`http://localhost:2999/api/tasks/${taskToEdit._id}`, formattedTask);
        toast.success("Task Updated");
      } else {
        await axios.post("http://localhost:2999/api/tasks", formattedTask);
        toast.success("Task Created");
      }

      refreshTasks();
      onHide();
    } catch (error) {
      toast.error("Error saving task");
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog header={taskToEdit ? "Edit Task" : "New Task"} visible={visible} onHide={onHide}>
        <div className="p-fluid task-form">
          <input
            type="text"
            placeholder="Title"
            value={task.title}
            className="p-inputtext p-mb-2"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={task.description}
            className="p-inputtext p-mb-2"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
          <Dropdown
            value={task.status}
            options={["TODO", "IN_PROGRESS", "DONE"]}
            onChange={(e) => setTask({ ...task, status: e.value })}
            placeholder="Select Status"
            className="p-mb-2"
          />
          <Dropdown
            value={task.priority}
            options={["LOW", "MEDIUM", "HIGH"]}
            onChange={(e) => setTask({ ...task, priority: e.value })}
            placeholder="Select Priority"
            className="p-mb-2"
          />
          <Calendar
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.value })}
            dateFormat="dd/mm/yy"
            placeholder="Select Due Date"
            className="p-mb-2"
          />
          <button className="p-button p-button-success" onClick={handleSubmit}>
            {taskToEdit ? "Update Task" : "Save Task"}
          </button>
        </div>
      </Dialog>
    </>
  );
}

export default TaskForm;
