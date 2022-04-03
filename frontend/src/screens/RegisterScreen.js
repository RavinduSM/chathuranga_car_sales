import React, { useEffect, useState } from "react";
// import loginImg from "../../login.svg";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Message from '../components/Message';


export default function RegisterScreen(props) {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [telephone, setTelephone] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmpassword, setConfirmPassword] = useState(''); 

    const userRegister = useSelector((state) => state.userRegister);
    const {userData, loading, error} = userRegister;

    // const redirect = props.location.search ?
    // props.location.search.split('=')[1] :
    // '/';

    const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      if(password !== confirmpassword){
        alert("Passwords doesn't match")
      } else {
        dispatch(register(username, email, telephone, password));
      }   
    }

    // useEffect(() =>{
    //   if(userData){
    //     props.history.push(redirect);
    //   }
    // }, [props.history, redirect, userData]);
    useEffect(()=>{

    }, [userData]);
    
  

    return (
      <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form" onSubmit={submitHandler}>
          <div>
            {loading && <Loading/>}
            {error && <Message variant="danger">{error}</Message>}
          </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"
               required onChange={(e) => setUsername(e.target.value)}
               />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"
               required onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input type="text" name="telephone" placeholder="telephone"
               required onChange={(e) => setTelephone(e.target.value)}
               />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"
               required onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input type="password" name="confirm password" placeholder="confirm password"
               required onChange={(e) => setConfirmPassword(e.target.value)}
               />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
 
}