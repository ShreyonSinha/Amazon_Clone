import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user},dispatch]=useStateValue();
   
    const handleAuthentication = () =>
    {
        if(user){
            auth.signOut();
        }
        
    }
    
    return (
        <nav className="header">
            <Link to="/">
            <img 
            className="header__logo" 
            src={require('./assets/amazon_11.png')} 
            alt="amazon_Logo" 
            />
        </Link>
        <div className="header__search">
        <input type="text" className="header__searchbar" />
        <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
            <Link className="header__Link" to={!user && "/login"}>
                <div onClick={handleAuthentication}className="header__options">
                <span className="header__optionsLineOne">Hello  </span>
                <span className="header__optionsLineTwo">{user ? 'Sign Out':'Sign In' } </span>
                </div>
            </Link>
            <Link className="header__Link" to="/">
                <div className="header__options">
                <span className="header__optionsLineOne">Your </span>
                <span className="header__optionsLineTwo">Prime</span>
                </div>
            </Link>
            <Link className="header__Link" to="/login">
                <div className="header__options">
                <span className="header__optionsLineOne">Returns </span>
                <span className="header__optionsLineTwo">& Orders</span>
                </div>
            </Link>
            <Link className="header__Link" to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingCartIcon/>     
                    <span className="header__optionsLineTwo header__optionBasketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
        </nav>
    );
}

export default Header ;
