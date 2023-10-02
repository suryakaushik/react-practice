import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
export class FbLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }
  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedin: true,
    });
  };
  render() {
    return this.state.isLoggedin ? (
      "Home"
    ) : (
      <div>
        <FacebookLogin
          appId="2329606420682017"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

export default FbLogin;





//                                How the FacebookLogin library works
// To understand how the FacebookLogin library works, we need to take a look at the code we have installed in our project. Open the react-facebook-login folder in the directory "/ node_modules / react-facebook-login /". Then open the facebook.js file in the directory "/node_modules/react-facebook-login/dist/facebook.js". Before the FacebookLogin component is rendered, the attributes given to this component will be fetched and processed by FB SDK, especially in the appId we prepared earlier.
// window.FB.init({
//   version: 'v' + version,
//   appId: appId,
//   xfbml: xfbml,
//   cookie: cookie
// });
// View facebook.js in context at Quod AI

//       if (_this.props.isMobile && !disableMobileRedirect) {
//         window.location.href = '//www.facebook.com/dialog/oauth?' + (0, _objectToParams2.default)(params);
//       } else {
//         window.FB.login(_this.checkLoginState, { scope: scope, auth_type: params.auth_type });
//       }

// Line 126: The login function is executed when we click the login button. Then the response will be caught by the checkLoginState function.
//     }, _this.responseApi = function (authResponse) {
//       window.FB.api('/me', { locale: _this.props.language, fields: _this.props.fields }, function (me) {
//         _extends(me, authResponse);
//         _this.props.callback(me);
//       });
//     }, _this.checkLoginState = function (response) {
//       _this.setStateIfMounted({ isProcessing: false });
//       if (response.authResponse) {
//         _this.responseApi(response.authResponse);
//       } else {
//         if (_this.props.callback) {
//           _this.props.callback({ status: response.status });
//         }
//       }

// Line 74: The authResponse we get will then be processed by the responseApi function.

// Line 69-73 the responseApi data will be returned to the callback function which in our code was previously used to get the profile data response from our Facebook account.


