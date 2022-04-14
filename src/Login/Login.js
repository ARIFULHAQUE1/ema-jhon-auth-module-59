import { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css'
const Login = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      const handleEmail = event => {
            setEmail(event.target.value)
      }
      const handlePassword = event => {
            setPassword(event.target.value)
      }
      const handleSignIn = (event) => {
            event.preventDefault()
            signInWithEmailAndPassword(email, password)
      }
      if(user){
            navigate(from,{ replace: true} );
      }
      return (
            <div className='form-container'>
                  <div>
                        <h2 className='title'>Login</h2>

                        <form onSubmit={handleSignIn}>
                              <div className='input-group'>
                                    <label htmlFor="email">Email</label>
                                    <input onBlur={handleEmail} type="email" name="" id="" required />
                              </div>
                              <div className='input-group'>
                                    <label htmlFor="password">Password</label>
                                    <input onBlur={handlePassword} type="password" name="" id="" required />
                              </div>

                                    <input className='form-button' type="submit" value="LogIn" />

                        </form>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        <p>
                              New on Ema-jhon? <Link to='/signIn'>Create Account</Link>

                        </p>
                  </div>
            </div>
      );
};

export default Login;