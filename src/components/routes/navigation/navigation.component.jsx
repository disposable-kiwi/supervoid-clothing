import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import {ReactComponent as VoidLogo} from '../../../assets/supervoid-logo.svg';
import './navigation.styles.scss';
import ResponsiveAppBar from "./appbar.component";

const Navigation = (props) => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <VoidLogo className="logo"/>
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to="auth">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
