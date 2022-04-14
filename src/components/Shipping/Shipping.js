import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipping = () => {
      const [name, setName]=useState('')
      const [email, setEmail]=useState('')
      const [Adress,setAdress]=useState('')
      const [phone,setPhone]=useState(' ')
      const navigate=useNavigate()
      const user=useAuthState(auth)
      // const handleEmail=(event)=>{
      //       console.log(event.target.value)
      //       setEmail(event.target.value)
      // }
      const handleName=(event)=>{
            console.log(event.target.value)
            setName(event.target.value)
      }

      const handleAddress=(event)=>{
            console.log(event.target.value)
            setAdress(event.target.value)
      }
      const handlePhone=(event)=>{
      setPhone(event.target.value)
      }
     
      const handleSubmit =(event)=>{
            event.preventDefault()
          
      }
      return (
            <div className='form-container'>
            <div>
                  <h2 className='title'>Shipping Information</h2>

                  <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                              <label htmlFor="email" required>Email</label >
                              <input value={user?.email} readOnly type="email" name="" id="" />
                        </div>
                        <div className='input-group'>
                              <label htmlFor="Name">Name</label>
                              <input onBlur={handleName} type="text" name="Name" id="" required />
                        </div>
                        <div className='input-group'>
                              <label htmlFor="Adress">Adress</label>
                              <input onBlur={handleAddress} type="text" name="Adress" id="" required />
                        </div>
                        <div className='input-group'>
                              <label htmlFor="Phone">Phone</label>
                              <input onBlur={handlePhone} type="text" name="Phone" id="" required />
                        </div>
                        
                       <input className='form-button' type="submit" value="Add Shipping" />

                  </form>
                  <p>
                        Already have an account? <Link to='/login'>LogIn</Link>
                  </p>
            </div>
      </div>
      );
};

export default Shipping;