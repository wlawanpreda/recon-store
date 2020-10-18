import React from "react";
import firebase from "firebase";
import { Container, Button } from "@material-ui/core";

const firebaseConfig = {
  apiKey: "AIzaSyD8VT1V-tWhyt_snJ5I51aFUiOST5mbNp4",
  authDomain: "recon-store.firebaseapp.com",
  databaseURL: "https://recon-store.firebaseio.com",
  projectId: "recon-store",
  storageBucket: "recon-store.appspot.com",
  messagingSenderId: "834595150236",
  appId: "1:834595150236:web:fb72fddfcac19d0ad69059",
  measurementId: "G-78SL119T57",
};
var app = firebase.initializeApp(firebaseConfig);

function Equipment() {
  return (
    <Container maxWidth="sm">
      Hi!
      <Button color="primary">Hello World</Button>
    </Container>
  );
}
export default Equipment;
