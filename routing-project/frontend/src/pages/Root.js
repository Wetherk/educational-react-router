import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
    const navigation = useNavigation();

    // {navigation.state === "loading" && <p>Loading....</p>}

    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
