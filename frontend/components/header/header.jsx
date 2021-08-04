import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component{
    constructor(props){
        super(props)


        this.handleClickTab = this.handleClickTab.bind(this);
    }


    handleClickTab(e){
        const currEle = e.currentTarget;
        currEle.classList.add('selected');
    }

    render(){
        const {signup, login, logout, openModal} = this.props
        const search = <FontAwesomeIcon icon={faSearch}/>

        // Not Logged In
        const sessionLinks = () => (
            <div>
                <nav className="nav-header">
                    <button 
                        className="nav-button"
                        id="sign-in-button"
                        onClick={() => openModal('login')}
                    >Sign in
                    </button>
                    <br />
                    <button 
                        className="nav-button" 
                        id="sign-up-button"
                        onClick={() => openModal('signup')}
                        >
                    Create account</button>
                    <br />
                    <label htmlFor="For Creators" id="nav-label-creator">For Creators</label>
                </nav>
            </div>
        )

        // If Logged In
        const personalSpace = () => (
            <div>
                <nav className="nav-header-personal">
                    <div className="left-nav-header">
                        <Link 
                        to="/discover"
                        className="nav-header-label"
                        onFocus={this.handleClickTab}
                        >Home
                            <span className="selected" id="selected"></span>
                        </Link>
                        <br />
                        <Link
                            to="/stream"
                            className="nav-header-label"
                            onFocus={this.handleClickTab}
                        >Stream
                            <span className="selected" id="selected"></span>
                        </Link>
                    </div>
                    <div className="middle-nav-hedaer">
                        <form action="/"
                        method="get">
                            <input id="header-nav-searchbar" type="text" placeholder="Search"/>
                            <span id="icon-search">{search}</span>
                        </form>
                    </div>
                    <div className="right-nav-header">

                    <label htmlFor="Logout"
                    onClick={() => logout}>Logout</label>
                    </div>
                </nav>
            </div>
        )

            if(this.currentUser){
                return personalSpace();
            }else{
                return sessionLinks();
            }
    }
}

export default Header;