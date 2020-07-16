import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import "./sign-in.styles.scss";
import Eye from "../../assets/icons/Eye";
import swal from "sweetalert";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isPasswordShown: false,
      currentUser: {},
    };
  }

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });

    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        swal("Giriş Başarılı", "", "success");
      })
      .catch((res) => {
        swal("Hatalı Giriş", "E-posta veya Şifre Yanlış", "error");
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { isPasswordShown } = this.state;
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
          <div className="input-container">
            <FormInput
              type={isPasswordShown ? "text" : "password"}
              name="password"
              value={this.state.password}
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
          <div className="buttons">
            <CustomButton type="submit"> GİRİŞ YAP </CustomButton>
            <div className="login-with-google">
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                <div className="google-icon-container">
                  <GoogleIcon />
                </div>
                <span>İLE GİRİŞ YAP</span>
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
