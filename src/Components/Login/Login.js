import React, { useContext, useState } from 'react';
import Topbar from '../Topbar/Topbar';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { Link as button, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
const Login = () => {
  const [valid, setValid] = useState({});
  const [validCheck, setCheckValid] = useState({});
  const { UserInfo } = useContext(UserContext)
  const [loggedInUser, setLoggedInUser] = UserInfo;

  var provider = new firebase.auth.GoogleAuthProvider();
  var Fbprovider = new firebase.auth.FacebookAuthProvider();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const GoogleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { displayName, email } = result.user;
        const googleNewUser = { name: displayName, email: email }
        setLoggedInUser(googleNewUser);
        history.replace(from);
        console.log(googleNewUser);
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        console.log(errorMessage, email, errorCode)
      });
  }
  const FbSignIn = () => {
    console.log("click")
    firebase.auth().signInWithPopup(Fbprovider).then(function (result) {
      var token = result.credential.accessToken;
      const { displayName, email } = result.user;
      const googleNewUser = { name: displayName, email: email }
      setLoggedInUser(googleNewUser);
      history.replace(from);
      console.log(googleNewUser);
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      console.log(errorCode, errorMessage, email,)
    });
  }


  const [toggle, setToggler] = useState(false)

  const handleonBlur = (event) => {
    let isValidForm = true;
    if (event.target.name === "email") {
      isValidForm = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordValue = /\d{1}/.test(event.target.value);
      isValidForm = isPasswordValid && passwordValue
    }
    if (isValidForm) {
      setValid({ name: event.target.name, validations: true })
    }
    else {
      setValid({ name: event.target.name, validations: false })
    }
    if (isValidForm) {
      console.log(event.target.name, " hello", event.target.value)
      const newUserInfo = { ...loggedInUser }
      newUserInfo[event.target.name] = event.target.value;
      setLoggedInUser(newUserInfo)
    }
  }
  const HandleSubmitBtn = (event) => {
    if (toggle && loggedInUser.email && loggedInUser.password) {
      firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then(res => {
          const newUserInfo = { ...loggedInUser };
          setLoggedInUser(newUserInfo)
          UpdateUserName(newUserInfo.name)
          history.replace(from);
          console.log(newUserInfo.name)
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.massages = error.message;
          setLoggedInUser(newUserInfo)
        });
    }
    if (!toggle && loggedInUser.email && loggedInUser.password) {
      firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then(res => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.name =res.user.displayName;
          setLoggedInUser(newUserInfo)
          history.replace(from);
          console.log(newUserInfo.name)
        })
        .catch((error) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.massages = `  But  ${error.code}`;
          setLoggedInUser(newUserInfo)
        });
    }
    event.preventDefault()
  }
  
const UpdateUserName = (name) => {
  var user = firebase.auth().currentUser;
  user.updateProfile({
    displayName:name
  }).then(function() {
    console.log("update successfull")
  }).catch(function(error) {
    console.log(error);
  });
}

  console.log(loggedInUser)
  return (
    <div className="home-container  pb-5" >
      <Topbar></Topbar>
      <div className="from-group  login-form mx-auto p-3">
        <h2 className="mb-3" >Log in</h2>
        <form onSubmit={HandleSubmitBtn} className="mt-2" >
          {
            toggle && <div className="form-group" id="nameInput" >
              <label for="">Name</label>
              <input required onBlur={handleonBlur} name="name" type="name" className="form-control" id="" placeholder="Enter Name" />
            </div>
          }
          <div className="form-group">
            <label for="">Email address</label>
            <input required onBlur={handleonBlur} name="email" type="email" className="form-control" id="" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="">Password</label>
            <input required onBlur={handleonBlur} name="password" type="password" className="form-control" id="" placeholder="Password" />
          </div>

          <div className="d-flex justify-content-between my-2" >
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="">Remember me</label>
            </div>
            <div className="form ">
              <button className="btn btn-outline-warning" >Forget  password</button>
            </div>
          </div>
          <div className="text-center" >
            {
              valid.validations ? <p className="text-center" >  EveryThins is oky ,login take time
             {"But " && loggedInUser.massages}
              </p> : <p className="text-center text-danger" > This {valid.name} is not valid </p>
            }
          </div>
          <button type="submit" className="btn btn-warning  mt-3 d-block w-75 mx-auto "> {toggle ? "Sign up " :"Login"}</button>
        </form>
        {
          toggle ?
            <div className="d-flex justify-content-center mt-3" >
              <p>do not have all ready account  ? </p>
              <button className="btn btn-outline-warning" onClick={() => setToggler(!toggle)} > Login account</button>
            </div>
            :
            <div className="d-flex justify-content-center mt-3" >
              <p className="m-2" >do not have account  ? </p>
              <button className="btn btn-outline-warning" onClick={() => setToggler(!toggle)} > create an account</button>
            </div>
        }
      </div>
      <div className="or-line d-block  mx-auto  text-center text-light" > <span></span> Or <span></span>  </div>
      <button onClick={() => FbSignIn()} className="text-left d-flex sign-btn mx-auto ">
        <img className="m-1" src="https://i.imgur.com/hPkbIgr.png" alt="" />
        <h6 className="m-2 mx-5" >Continue with facebook </h6>
      </button>
      <button onClick={() => GoogleSignIn()} className="text-left d-flex sign-btn mx-auto ">
        <img className="m-1" src="https://i.imgur.com/aneJZWX.png" alt="" />
        <h6 className="m-2 mx-5" >Continue with Google </h6>
      </button>
    </div>
  );
};

export default Login;