import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("products");
    };

    return (
        <>
            <h1>My Home</h1>
            <button onClick={handleNavigation}>Navigate</button>
        </>
    );
};

export default HomePage;
