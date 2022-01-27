import React, { Component } from "react";
import Form from "./commons/form";
class Register extends Form {
  state = { data: { email: "", username: "", password: "" }, errors: {} };
  render() {
    return (
      <div className="jumbotron">
        <div className="container w-50 p-0">
          <h3>Register </h3>
          <form className="mt-4">
            {this.renderInput("email", "Email")}
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Submit")}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
