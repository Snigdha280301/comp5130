/*import React from "react";
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
*/

import React from "react";
import { Container, Stack } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Profile = ({ user, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Container className="my-4">
        <h1 className="mb-3">PROFILE</h1>
        {user && (
          <Stack style={{ width: "fit-content", margin: "0 auto" }} gap={1}>
            <Stack direction="horizontal" gap={3}>
              <img
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "100%",
                  marginBottom: "100px",
                }}
                src={user.avatar && user.avatar.url}
                alt="avatar"
              />
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <p className="fw-bold">NAME:</p>
              <p>{user.name}</p>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <p className="fw-bold">EMAIL:</p>
              <p>{user.email}</p>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <p className="fw-bold">PHONE:</p>
              <p>{user.phone}</p>
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
};

export default Profile;