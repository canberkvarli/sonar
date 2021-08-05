import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import LogInFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';

class Header extends React.Component{
    
    constructor(props){
        super(props)


        this.handleClickTab = this.handleClickTab.bind(this);
        this.state = {
            modal: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(){
        this.setState({
            modal: true
        })
    }

    hideModal(){
        this.setState({
            modal: false
        })
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
        const {signup, login, logout, currentUser} = this.props
        const search = <FontAwesomeIcon icon={faSearch}/>
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            },
        };


        // Not Logged In
        const sessionLinks = () => (
            
            <div>
                <nav className="nav-header">
                    <Modal show={this.state.show}
                        handleClose={this.hideModal}>
                            <LogInFormContainer />
                    </Modal>
                    <button 
                        className="nav-button"
                        id="sign-in-button"
                        onClick={() => this.showModal}
                    >Sign in
                    </button>

                    <br />
                    <Modal show={this.state.show}
                        handleClose={this.hideModal}>
                        <SignUpFormContainer />
                    </Modal>
                    <button 
                        className="nav-button" 
                        id="sign-up-button"
                        onClick={() => this.showModal}
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