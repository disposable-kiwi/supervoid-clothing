import { Fragment, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { ReactComponent as VoidLogo } from '../../../assets/supervoid-logo.svg';
import './navigation.styles.scss';
import ResponsiveAppBar from "./appbar.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";

const Navigation = (props) => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const signOutHandler = async () =>{
        await signOutUser();
        //we need to use setCurrentUser to set the state of currentUser *back to* null to represent a *successful sign out* (remember that we use this validation below for the <Link>'s for Sign In vs. Sign Out)
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <VoidLogo className="logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutHandler} className="nav-link">Sign Out</span>
                        ) : (
                            <Link className="nav-link" to="auth">
                                Sign In
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
