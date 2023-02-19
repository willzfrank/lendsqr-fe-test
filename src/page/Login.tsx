import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Group.jpg';
import logo2 from '../assets/Union.png';
import image1 from '../assets/pablo-sign-in 1.jpg';
import '../styles/Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const validateEmail = () => {
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is invalid',
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      return false;
    } else if (password.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 3 characters long',
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      return true;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      navigate('/user');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="LoginContainer">
      <div className="LoginImgContainer">
        <img src={logo} alt="logo" className="login_logo" />
        <img src={image1} alt="" className="login_img" />
      </div>
      <div className="LoginForm">
        <img src={logo2} alt="logo" className="mobile_login_logo" />
        <h2>Welcome!</h2>
        <h6>Enter details to login.</h6>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <div className="password_container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
            <span onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          {errors.password && (
            <span className="error password_error">{errors.password}</span>
          )}
          <span className="f_password">FORGOT PASSWORD</span>
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
