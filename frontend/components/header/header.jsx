import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import SearchContainer from '../search/search_container';

// import mars from '../../../app/assets/images/moon.jpg';


class Header extends React.Component{
    
    constructor(props){
        super(props)


        // this.handleClickTab = this.handleClickTab.bind(this);
        // this.openModalSignUp = this.openModalSignUp.bind(this);
        // this.openModalSignIn = this.openModalSignIn.bind(this);
    }


    handleClickTab(e){
        const currEle = e.currentTarget;
        currEle.classList.add('selected');
    }

    handleLogout(){

        const result = window.location.origin;
        this.props.logout().then(
            window.location.href = result
        )
    }

    render(){
        const {signup, login, logout, currentUser, disabled} = this.props
        const search = <FontAwesomeIcon icon={faSearch}/>
        const github = <FontAwesomeIcon icon={["fab", "github"]} />


  
        // Not Logged In
        const sessionLinks = () => (
            
            <div className="session-links">
                
                <nav className="nav-header">
                    <Link to="/" id="header-link">
                        <img id="logo" src="https://logos-world.net/wp-content/uploads/2020/10/SoundCloud-Emblem.png" alt="" />
                        <span id="sonar">S O N A R</span>
                    </Link>
                    
                    <a href="https://github.com/canberkvarli">
                        {github}
                    </a>

                    <Link
                        to="/login"
                        type="button"
                        className="nav-button"
                        id="sign-in-button"
                        >Sign in
                        
                    </Link>
            
                    <br />
                    <Link 
                        className="nav-button" 
                        id="sign-up-button"
                        to="/signup"
                        >
                    Create account</Link>
 
                    <br />

                    <label htmlFor="For Creators" id="nav-label-creator">For Creators</label>

                </nav> 
                <div className="outer-div">
                    <div className="homepage-image">
                        <img id="nightlife" src="https://images.unsplash.com/photo-1514517356012-03ba2c17a027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="nightlife" />
                        <span id="outer-onimage-label">What's next in music is first on Sonar</span>
                        <br />
                        <span id="inner-onimage-label">Upload your first track and begin your journey. SoundCloud gives you space to create, find your fans, and connect with other artists.</span>
                        <button
                            className="nav-button"
                            id="start-uploading-button"
                            onClick={this.openModalSignUp}
                        >
                            Start uploading today</button>
                    </div>
                </div>
                <div className="search-div">
                    <SearchContainer />
                </div>
                    <span id="or">or</span>
                    <button
                        className="nav-button"
                        id="upload-your-own-button"
                        onClick={this.openModalSignUp}
                    >
                        Upload your own</button>
                <span id="intro">Hear what’s trending for free in the Sonar community</span>
            </div>
                
        )

        // If Logged In
        const personalSpace = () => (
            <div className="personal-space">
                <nav className="personal-nav-header">
                    <div className="left-nav-header">
                        <Link to="/" id="header-link">
                            <img id="personal-logo" src="https://logos-world.net/wp-content/uploads/2020/10/SoundCloud-Emblem.png" alt="" />
                            <div className="selected" id="home">Home</div>
                        </Link>
                        <br />
                        <Link
                            to="/stream"
                            className="nav-header-label"
                            id="nav-header-stream"
                            onFocus={this.handleClickTab}
                        >Stream
                            <span className="selected" id="selected"></span>
                        </Link>
                    </div>
                        <br />
                        <Link
                            to="/upload"
                            className="nav-header-label"
                            id="nav-header-upload"
                            onFocus={this.handleClickTab}
                        >Upload
                            <span className="selected" id="selected"></span>
                        </Link>
                        <br />

                    <div className="middle-nav-header">
                        <SearchContainer />
                    </div>
                    <div className="right-nav-header">

                    <a htmlFor="Logout"
                    className="header-nav-setting"
                    onClick={() => this.handleLogout()}>Log out</a>
                    </div>
                </nav>
            
            </div>
        )

            return currentUser ?  personalSpace() :  sessionLinks()
    }
}

export default Header;