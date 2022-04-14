import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const SignIn = () => {
      const [email, setEmail]=useState('')
      const [password,setPassword]=useState('')
      const [confrimPassword,setConfrimPassword]=useState(' ')
      const [error,setError]=useState('')
      const navigate=useNavigate()
      const [createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth)
      const handleEmail=(event)=>{
            console.log(event.target.value)
            setEmail(event.target.value)
      }
      const handlePassword=(event)=>{
            console.log(event.target.value)
            setPassword(event.target.value)
      }

      const confrimpassword=(event)=>{
            console.log(event.target.value)
            setConfrimPassword(event.target.value)
      }
      if(user){
            navigate('/shop');
      }
      const handleSubmit =(event)=>{
            event.preventDefault()
          console.log('clicked')
            if(password !==confrimPassword){
                  setError('Password Dont Match')
                  return;
            }
            
            createUserWithEmailAndPassword(email,password)
      }
  
      return (
            <div className='form-container'>
                  <div>
                        <h2 className='title'>Sign Up</h2>

                        <form onSubmit={handleSubmit}>
                              <div className='input-group'>
                                    <label htmlFor="email" required>Email</label >
                                    <input onBlur={handleEmail} type="email" name="" id="" />
                              </div>
                              <div className='input-group'>
                                    <label htmlFor="password">Password</label>
                                    <input onBlur={handlePassword} type="password" name="" id="" required />
                              </div>
                              <div className='input-group'>
                                    <label htmlFor="Confrim Password">Confrim Password</label>
                                    <input onBlur={confrimpassword} type="password" name="" id="" required />
                              </div>
                              <p style={{color:'red'}}>{error}</p>
                             <input className='form-button' type="submit" value="Sign Up" />

                        </form>
                        <p>
                              Already have an account? <Link to='/login'>LogIn</Link>
                        </p>
                  </div>
            </div>
      );
};

export default SignIn;