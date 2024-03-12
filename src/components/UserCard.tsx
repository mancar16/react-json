import Card from "react-bootstrap/Card";
import { UserType } from "./types";
const UserCard = ({ user }: {user: UserType }) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.username}
          </Card.Subtitle>
          <Card.Text>{user.email}</Card.Text>
          <Card.Link href={"user/" + user.id} >Card Link</Card.Link>
        </Card.Body>
      </Card>
    );
};

export default UserCard;
