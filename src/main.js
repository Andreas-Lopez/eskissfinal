import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_iAGiGVR8_ryakYDYEc4aHlqO1yXgUaU",
    authDomain: "eskiss-f1b1f.firebaseapp.com",
    projectId: "eskiss-f1b1f",
    storageBucket: "eskiss-f1b1f.appspot.com",
    messagingSenderId: "831916290720",
    appId: "1:831916290720:web:90f20ebf9708bff6300fc5"
  };

  // Initialize Firebase
  const FireApp = initializeApp(firebaseConfig);