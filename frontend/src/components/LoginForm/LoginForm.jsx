import React from "react";
import { Link, withRouter } from "react-router-dom";
import Base from "./LoginFormBase";

class LoginForm extends Base {
  render() {
    return (
      <>
        <div className="content_rgt">
          <div className="login_sec">
            <h1>Log In</h1>
            <form onSubmit={this.submitData}>
              <ul>
                <li>
                  <span>Username</span>
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handelChange}
                    type="text"
                    placeholder="Enter your username"
                    required
                  />
                </li>
                <li>
                  <span>Password</span>
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handelChange}
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </li>
                <li>
                  <input type="checkbox" />
                  Remember Me
                  {this.state.err}
                </li>
                <li>
                  <input type="submit" value="Log In" />
                  <a>Forgot Password</a>
                </li>
              </ul>
            </form>
            <div className="addtnal_acnt">
              I don't have any account yet.
              <Link to="/signup">Create My Account Now !</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
