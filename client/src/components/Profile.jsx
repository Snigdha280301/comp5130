import React from "react";
import { Container, Stack, Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Profile = ({ user, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Container className="my-5 d-flex justify-content-center align-items-center">
        <Card className="shadow-lg p-4" style={{ width: "450px", borderRadius: "15px" }}>
          <div className="text-center">
            <img
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #007bff",
              }}
              src={user.avatar && user.avatar.url}
              alt="avatar"
            />
            <h2 className="mt-3 fw-bold">{user.name}</h2>
          </div>
          <hr />
          {user && (
            <Stack className="mt-4" gap={3}>
              <Stack direction="horizontal" gap={3} className="align-items-center">
                <p className="fw-bold text-secondary mb-0">Name:</p>
                <p className="text-dark mb-0">{user.name}</p>
              </Stack>
              <Stack direction="horizontal" gap={3} className="align-items-center">
                <p className="fw-bold text-secondary mb-0">Email:</p>
                <p className="text-dark mb-0">{user.email}</p>
              </Stack>
              <Stack direction="horizontal" gap={3} className="align-items-center">
                <p className="fw-bold text-secondary mb-0">Phone:</p>
                <p className="text-dark mb-0">{user.phone}</p>
              </Stack>
            </Stack>
          )}
        </Card>
      </Container>
    </>
  );
};

export default Profile;
