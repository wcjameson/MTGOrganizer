import React from "react";
import firebase from "firebase/compat/app";


function Signin() {


  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      alert("successfully signed up!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      alert("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      alert("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return(
    <React.Fragment>
      <div className="container col-md-4">

      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input className="form-control"
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input className="form-control"
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit' className="btn btn-dark">Sign in</button>
      </form>

      <br></br>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input className="form-control"
          type='text'
          name='email'
          placeholder='email' />
        <input className="form-control"
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit' class="btn btn-dark">Sign up</button>
      </form>
      {/* <h1>Sign Out</h1> */}
      <br></br>
      <button onClick={doSignOut} className="btn btn-dark">Sign out</button>
      </div>
    </React.Fragment>
  )
}

export default Signin;