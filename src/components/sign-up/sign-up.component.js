import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
import Eye from "../../assets/icons/Eye";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      isPasswordShown: false,
      isPasswordShownRepeat: false,
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  togglePasswordVisiblityRepeat = () => {
    const { isPasswordShownRepeat } = this.state;
    this.setState({ isPasswordShownRepeat: !isPasswordShownRepeat });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Şifre Uyuşmadı");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      isPasswordShown,
      isPasswordShownRepeat,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Kayıtlı Hesabım Yok</h2>
        <span>E-posta ve Şifrenizle Giriş Yapınız</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Kullanıcı Adı"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="E-posta"
            required
          />
          <div className="input-container">
            <FormInput
              type={isPasswordShown ? "text" : "password"}
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Şifre"
              required
            />
            <div
              className="eye-icon-container"
              onClick={this.togglePasswordVisiblity}
            >
              <Eye />
            </div>
          </div>
          <div className="input-container">
            <FormInput
              type={isPasswordShownRepeat ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Şifreni Onayla"
              required
            />
            <div
              className="eye-icon-container"
              onClick={this.togglePasswordVisiblityRepeat}
            >
              <Eye />
            </div>
          </div>
          <CustomButton type="submit">KAYDOL</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
