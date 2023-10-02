import React, { Component } from "react";
import firebase from "./firebase";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }
  componentDidMount() {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("Token : ", token);
      })
      .catch((err) => {
        console.log(err);
      });
    // messaging.onMessage((payload)=>{
    //   console.log(payload);

    // })

    // React Firebase-DB CRUD
    let messageRef = fire
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    fire.database().ref("messages").push(this.state.text);

    //auth
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ auth: user });
      } else {
        this.setState({ auth: false });
      }
    });
  }
  render() {
    return <div></div>;
  }
}
