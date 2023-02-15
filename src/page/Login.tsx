import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../assets/Group.jpg';
import image1 from '../assets/pablo-sign-in 1.jpg';
import '../styles/Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Validate email and password
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }

    if (email && password) {
      toast('You are logged in!', {
        icon: '👏',
      });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <section className="LoginContainer">
      <Toaster position="bottom-right" />
      <div className="LoginImgContainer">
        <img src={logo} alt="logo" className="login_logo" />
        <img src={image1} alt="" className="login_img" />
      </div>
      <div className="LoginForm">
        <h2>Welcome!</h2>
        <h6>Enter details to login.</h6>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>
            {' '}
            {emailError && <span className="error">{emailError}</span>}
          </span>
          <div className="password_container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          {passwordError && (
            <span className="error password_error">{passwordError}</span>
          )}
          <span className="f_password">FORGOT PASSWORD</span>
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
