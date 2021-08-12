import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    componentDidMount(){
        this.props.errors;
    }

    handleDemoUser(e) {
        e.preventDefault()
        const user = { username: 'demouser', password: 'password' }
        this.props.processForm(user)
    }

    handleSubmit(e){
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    renderErrors() {
        return (
            <ul className="session-form" id="session-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        const SessionFormSignIn = () => (
           <div className="outer-session-form">
            <div className="root-session-form">
                <h4 className="session-form" id="session-form-title"> 

                Please {this.props.formType} or <span id="navLink"> {this.props.navLink}</span>

                </h4>

                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label className="session-form-label" htmlFor="username">Username

                        <input
                            className="session-form-input"
                            type="text" 
                            placeholder="Your username"
                            value={this.state.username}
                            onChange={this.update('username')}/>
                    </label>
                    <br />
                    <br />
                    <label className="session-form-label"htmlFor="password">Password

                        <input
                            className="session-form-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br />
                    <input type="submit" id="demo-user-button" value="Demo User" />
                    <input className="session-form-submit" type="submit" value={this.props.formType} />
                    <br />
                </form>
                    
                    {this.renderErrors()}
            </div>

           </div>
            )

        const SessionFormSignUp = () => (
        <div className="outer-session-form">

            <div className="root-session-form">
                <h4 className="session-form" id="session-form-title">

                    Please {this.props.formType} or <span id="navLink"> {this.props.navLink}</span>

                </h4>

                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label className="session-form-label" htmlFor="username">Username

                        <input
                            className="session-form-input"
                            type="text"
                            placeholder="Your username"
                            value={this.state.username}
                            onChange={this.update('username')} />
                    </label>
                    <br />
                    <br />
                    <label className="session-form-label" htmlFor="password">Password

                        <input
                            className="session-form-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br />
                    <input className="session-form-submit" type="submit" value={this.props.formType} />
                    <br />
                    
                </form>
                {this.renderErrors()}
            </div>
        </div>
        )

            if(this.props.formType === "Log In"){
                return SessionFormSignIn();
            }else if(this.props.formType === "Sign Up"){
                return SessionFormSignUp();
            }
        }
    }


export default SessionForm