import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserType } from "../components/types";
import UserCard from "../components/UserCard";
import Nav from "react-bootstrap/Nav";
import { ClipLoader } from "react-spinners";

const tabTitles = ["posts", "album", "todo"];

type TabType = "post" | "album" | "todo";

const UserPage = () => {
  //@ts-expect-error:unknown
  const params: { userId: number } = useParams();
  const [tab, setTab] = useState<TabType>("post");
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + params.userId
    );
    const data = await res.json();
    setUser(data);
  };

  const getUserData = async () => {
    setLoading(true);
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/" + tab + "s?userId=" + params.userId
    );
    const data = await res.json();
    setLoading(false);
    setUserData(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getUserData();
  }, [tab]); 

  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/posts">
        {tabTitles.map((title) => (
          <Nav.Item
            key={title}
            onClick={() => {
              setTab(title as TabType);
            }}
          >
            <Nav.Link eventKey={"/" + title}>{title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      {user && <UserCard user={user} />}
      {userData && loading && userData.map(ud => <div key={ud.id}><Link to={"posts/" + ud.id  }>{tab}: {ud.id}</Link></div>)}
      {loading && <ClipLoader />}
    </div>
  );
};

export default UserPage;

