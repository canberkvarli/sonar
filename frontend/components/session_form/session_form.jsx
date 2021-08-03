import React from 'react'

class SessionForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)

    }

    handleSubmit(e){
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        console.log(e);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){

        return(
            <div>
                <h3>Please {this.props.formType} or {this.props.navLink}</h3>
                {this.clearErrors}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username
                        <input 
                            type="text" 
                            placeholder="Your username"
                            value={this.state.username}
                            onChange={this.update('username')}/>
                    </label>
                    <br />
                    <label htmlFor="password">Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br />
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
    
}


export default SessionForm