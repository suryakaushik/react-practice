import React, { Component } from 'react'
import { GoogleLogin } from '@react-oauth/google';

export class GoogleOAuth extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="276655996971-tqcgsfqvun9d061loj9t47demuhbqb9l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}

export default GoogleOAuth;


// import { GoogleOAuthProvider } from '@react-oauth/google';
// ReactDOM.render(
//   <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
//       <React.StrictMode>
//           <App />
//       </React.StrictMode>
//   </GoogleOAuthProvider>,
//   document.getElementById('root')
// );