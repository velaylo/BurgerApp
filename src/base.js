import Rebase from "re-base";
import firebase from "firebase/app";
require('firebase/database')

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXsvr3TDwsDGjIL8IN9hPMWO__AmF-gp4",
    authDomain: "very-hot-burgers-8d8cf.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-8d8cf-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;