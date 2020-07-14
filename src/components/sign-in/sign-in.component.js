import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Kayıtlı Hesabım Mevcut</h2>
        <span>E-posta ve Şifrenizle Giriş Yapınız</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="E-posta"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Şifre"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> GİRİŞ YAP </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              GOOGLE İLE GİRİŞ YAP
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
