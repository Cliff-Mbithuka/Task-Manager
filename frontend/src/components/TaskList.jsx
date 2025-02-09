import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TaskForm from "./TaskForm";
import { ToastContainer, toast } from "react-toastify";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:2999/api/tasks");
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:2999/api/tasks/${id}`);
    toast.success("Task Deleted");
    fetchTasks();
  };

  const editTask = (task) => {
    setTaskToEdit(task);
    setVisible(true);
  };

  return (
    <div>
      <ToastContainer />
      <button className="p-button p-button-primary " onClick={() => setVisible(true)}>
        New Task
      </button>
      <TaskForm visible={visible} onHide={() => setVisible(false)} taskToEdit={taskToEdit} refreshTasks={fetchTasks} />

      <DataTable value={tasks} responsiveLayout="scroll">
        <Column field="title" header="Title" />
        <Column field="status" header="Status" />
        <Column field="priority" header="Priority" />
        <Column field="dueDate" header="Due Date" />
        <Column
          header="Actions"
          body={(rowData) => (
            <div>
              <button className="p-button p-button-info p-mr-4" onClick={() => editTask(rowData)}>
                Edit
              </button>
              <button className="p-button p-button-danger" onClick={() => deleteTask(rowData._id)}>
                Delete
              </button>
            </div>
          )}
        />
      </DataTable>
    </div>
  );
}

export default TaskList;
