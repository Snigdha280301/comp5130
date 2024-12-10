import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import "../App.css";


const ViewTaskModal = ({ showViewModal, handleViewModalClose, id }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getSingleTask = async () => {
      try {
        const { data } = await axios.get(`https://task-manager-backend-e5yu.onrender.com/api/v1/task/single/${id}`, {
          withCredentials: true,
        });
        setTask(data.task);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    if (id) {
      getSingleTask();
    }
  }, [id]);

  return (
    <Modal show={showViewModal} onHide={handleViewModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>View Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack>
          <p className="fw-bold mb-0">Title</p>
          <p className="text-wrap modal-content-text">{task && task.title}</p>
        </Stack>
        <Stack>
          <p className="fw-bold mb-0">Description</p>
          <div className="text-wrap modal-content-box">
            <p className="modal-content-text">{task && task.description}</p>
          </div>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleViewModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewTaskModal;
