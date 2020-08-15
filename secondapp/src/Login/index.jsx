import React from 'react';
import './index.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appname: "Login",
            count: 0
        };
        this.attempt = this.attempt.bind(this);

    }
    attempt(e) {
        this.setState({ count: this.state.count + 1 })

    }
    render() {
        return (
            <div>
                <h1>{this.props.headermessage}</h1>
                <h2> {this.state.appname} </h2>
                {this.state.count > 0 && <h3>You clicked this {this.state.count} times </h3>
                }
                <div className="container">
                    <div className="card card-container">
                        <img id="profile-img" className="profile-img-card" src="https://banner2.cleanpng.com/20180405/osq/kisspng-login-google-account-computer-icons-user-activity-5ac6bbe6ecba00.2369522615229736709696.jpg" />
                        <p id="profile-name" className="profile-name-card" />
                        <form className="form-signin">
                            <span id="reauth-email" className="reauth-email" />
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={this.attempt}>Sign in</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;