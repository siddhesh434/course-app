
import { useParams } from "react-router-dom";
import UserDashBoard from "./UserDashBoard";

const UserDashBoardWrapper = () => {
    const { userId } = useParams();
    return <UserDashBoard userId={userId} />;
};

export default UserDashBoardWrapper;
