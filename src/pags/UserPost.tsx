import { Link, useLoaderData, useParams } from 'react-router-dom'

const UserPost = () => {
    const pageData = useLoaderData();
    const { userId } = useParams(); 
    return <div>
        <Link to={"/users/" + userId}>{pageData.user.name}</Link>
    </div>
}

export default UserPost