import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Card, Stack } from "react-bootstrap";
import toast from "react-hot-toast";
import CreateTaskModal from "./CreateTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";
import ViewTaskModal from "./ViewTaskModal";
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { Navigate } from "react-router-dom";


const Home = ({ isAuthenticated, tasks, setTasks, taskTitle }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewTaskId, setViewTaskId] = useState(null);
  const [updatedTaskId, setUpdateTaskId] = useState(null);

  // Delete Task Handler
  const deleteTask = async (id) => {
    try {
      const { data } = await axios.delete(`https://task-manager-backend-e5yu.onrender.com/api/v1/task/delete/${id}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Modal Handlers
  const handleCreateModalClose = () => setShowCreateModal(false);
  const handleUpdateModalClose = () => setShowUpdateModal(false);
  const handleViewModalClose = () => setShowViewModal(false);

  const handleCreateModalShow = () => setShowCreateModal(true);

  const handleUpdateModalShow = (id) => {
    setUpdateTaskId(id);
    setShowUpdateModal(true);
  };

  const handleViewModalShow = (id) => {
    setViewTaskId(id);
    setShowViewModal(true);
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container my-4">
      {/* Header Section */}
      <div className="header p-4 mb-4 bg-primary text-white text-center rounded shadow">
        <h1 className="display-4">{taskTitle}</h1>
        <p className="lead">Manage your tasks efficiently and stay productive!</p>
        <Button variant="light" size="lg" onClick={handleCreateModalShow}>
          Create Task
        </Button>
      </div>

      {/* Task Cards Section */}
      <div className="row">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className="col-lg-3 col-md-4 col-sm-6">
              <Card className="mb-4 shadow-sm border-0" style={{ borderRadius: "15px" }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Stack gap={2}>
                    <Card.Title className="text-truncate" title={task.title}>
                        {task && task.title.length <= 40
                            ? task.title
                            : task.title.slice(0, 40) + "..."}
                    </Card.Title>
                    <Card.Text className="text-muted text-truncate" title={task.description}>
                        {task && task.description.length <= 300
                            ? task.description
                            : task.description.slice(0, 300) + "..."}
                    </Card.Text>
                  </Stack>
                  <Stack direction="horizontal" gap={2} className="justify-content-end mt-3">
                    <MdEdit
                      onClick={() => handleUpdateModalShow(task._id)}
                      className="fs-4 text-primary cursor-pointer"
                      title="Edit"
                    />
                    <MdDelete
                      onClick={() => deleteTask(task._id)}
                      className="fs-4 text-danger cursor-pointer"
                      title="Delete"
                    />
                    <FaEye
                      onClick={() => handleViewModalShow(task._id)}
                      className="fs-4 text-info cursor-pointer"
                      title="View"
                    />
                  </Stack>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <h2 className="text-muted">No {taskTitle} found</h2>
            <p className="text-muted">Click "Create Task" to add your first task!</p>
          
          </div>
        )}
      </div>

      {/* Modals */}
      <CreateTaskModal
        handleCreateModalClose={handleCreateModalClose}
        showCreateModal={showCreateModal}
        setTasks={setTasks}
      />

      <UpdateTaskModal
        handleUpdateModalClose={handleUpdateModalClose}
        showUpdateModal={showUpdateModal}
        id={updatedTaskId}
        setTasks={setTasks}
      />

      <ViewTaskModal
        handleViewModalClose={handleViewModalClose}
        showViewModal={showViewModal}
        id={viewTaskId}
      />
    </div>
  );
};

export default Home;
