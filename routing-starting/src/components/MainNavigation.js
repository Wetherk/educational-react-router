import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) =>
                            isActive ? classes.active : ""
                        }
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="products"
                        className={({ isActive }) =>
                            isActive ? classes.active : ""
                        }
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default MainNavigation;
