import { ButtonHandler } from './NavBar';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src="/images/logo.png" alt="logo"></img>
            <ul className="navbar-list">
                <li className="navbar-item" onClick={ButtonHandler.playOnline}>
                    <p className="navbar-item-text">Play Online</p>
                </li>
                <li className="navbar-item" onClick={ButtonHandler.playWithBot}>
                    <p className="navbar-item-text">Play with Computer</p>
                </li>
                <li className="navbar-item" onClick={ButtonHandler.playWithFriend}>
                    <p className="navbar-item-text">Play with Friends</p>
                </li>
                <li className="navbar-item" onClick={ButtonHandler.playWithSelf}>
                    <p className="navbar-item-text">Practice yourself</p>
                </li>
            </ul>
            <div className="sign-in-btn" onClick={ButtonHandler.signIn}>
                <p className="sign-in-btn-text">Sign In</p>
            </div>
        </nav>
    )
}

export default NavBar;