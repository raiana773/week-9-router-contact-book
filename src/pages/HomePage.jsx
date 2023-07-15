import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomePage({ contacts, deleteContact }) {
  const navigate = useNavigate();

  return (
    <div>
      {contacts.map((item) => {
        return (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{`${item.name} ${item.surname}`}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.phoneNumber}
              </Card.Subtitle>
              <Button onClick={() => deleteContact(item.id)} variant="danger">
                Delete
              </Button>
              <Button
                onClick={() => navigate(`/edit/${item.id}`)}
                className="mx-2"
                variant="warning"
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default HomePage;
