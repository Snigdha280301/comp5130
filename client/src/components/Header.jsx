import { useEffect, useState } from "react";
import { Container, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


function Header({
  setTasks,
  setIsAuthenticated,
  isAuthenticated,
  setTaskTitle,
}) {
  const [allTasks, setAllTasks] = useState([]);
  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    fetchTasks();
  }, [isAuthenticated]);

  // Fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://localhost:4000/api/v1/task/mytask",
        { withCredentials: true }
      );
      setAllTasks(response.data.tasks);
      setTasks(response.data.tasks); // Update tasks with fetched tasks
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const { data } = await axios.get(
        "https://localhost:4000/api/v1/user/logout",
        { withCredentials: "true" }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const filterTasks = (filterType) => {
    let filteredTasks = [];

    switch (filterType) {
      case "completed":
        filteredTasks = allTasks.filter((task) => task.status === "completed");
        setTaskTitle("Completed Tasks");
        break;
      case "incomplete":
        filteredTasks = allTasks.filter((task) => task.status === "incomplete");
        setTaskTitle("Incomplete Tasks");
        break;
      case "archived":
        filteredTasks = allTasks.filter((task) => task.archived === true);
        setTaskTitle("Archived Tasks");
        break;
      case "all":
        filteredTasks = allTasks;
        setTaskTitle("Tasks");
        break;
      default:
        filteredTasks = allTasks;
    }
    setTasks(filteredTasks);
  };
  
  return (
    <Navbar
      expand="lg"
      className={`shadow-sm bg-white ${
        !isAuthenticated ? "d-none" : ""
      } sticky-top`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <h2 className="mb-0">TASK MANAGER</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Link
              to={"/"}
              className="text-decoration-none me-3 fw-semibold link-primary"
            >
              Home
            </Link>
            <Link
              to={"/profile"}
              className="text-decoration-none fw-semibold link-primary"
            >
              Profile
            </Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <NavDropdown
              title="Filter Tasks"
              id="basic-nav-dropdown"
              className="text-primary"
            >
              <NavDropdown.Item onClick={() => filterTasks("all")}>
                All Tasks
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterTasks("completed")}>
                Completed Tasks
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterTasks("incomplete")}>
                Incomplete Tasks
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterTasks("archived")}>
                Archived Tasks
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              className="bg-danger text-white fw-semibold border-0 ms-3 px-4 py-2"
              style={{ borderRadius: "20px" }}
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
