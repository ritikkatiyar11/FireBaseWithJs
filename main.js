// import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getDatabase, set, ref } from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDHKF4d13ZgK7efLKeAUxXhOmnpchHMaPU",
  authDomain: "crud-7f697.firebaseapp.com",
  projectId: "crud-7f697",
  storageBucket: "crud-7f697.appspot.com",
  messagingSenderId: "1033356828823",
  appId: "1:1033356828823:web:95a83e956a3fa6225089d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)

const notfy = document.querySelector('.display')
const save = document.querySelector('#save_form')
const update = document.querySelector('#update_form')
save.addEventListener('click', saveData)
function saveData() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  if (!name || !email) {
    notfy.innerText = 'please fill the form'

  }
  const userId = Date.now()
  fetch(set(ref(db, 'users/' + userId), {
    name: name,
    email: email
  })).then(notfy.innerText = 'saved successfully'


  ).then(document.querySelector('#name').value = '').then(document.querySelector('#email').value = '')




}


