import { useLoaderData } from "react-router-dom";
import { UserType } from "../components/types";
import UserCard from "../components/UserCard";


const Index = () => {
  //@ts-expect-error:unknown
  const users: UserType[] = useLoaderData();
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      ;
    </div>
  );
};

export default Index;
