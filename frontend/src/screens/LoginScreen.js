import React, { useEffect, useState } from "react";
// import loginImg from "../../login.svg";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from "../actions/userActions";
import Loading from "../components/Loading";
import Message from "../components/Message";


export default function LoginScreen(props) {
  const[email,setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  // const redirect = props.location.search
  // ? props.location.search.split('=')[1]
  //   : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(signin(email, password));
  }

  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  // }, [props.history, redirect, userInfo]);
  
    return (
      <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form" onSubmit={submitHandler}>
          {loading && <Loading></Loading>}
          {error && <Message variant="danger">{error}</Message>}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"
              required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" 
              required onChange={(e) => setPassword(e.target.value)} />
            </div>
            
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  
}