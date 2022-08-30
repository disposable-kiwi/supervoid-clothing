import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import './navigation.styles.scss';
import ResponsiveAppBar from "./appbar.component";

const Navigation = (props) => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-links" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-links" to="sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
