import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6Jal32V2nV9WmkbqU74Nc1ITC0zlcPEU",
  authDomain: "proyecto-bit-usuarios.firebaseapp.com",
  projectId: "proyecto-bit-usuarios",
  storageBucket: "proyecto-bit-usuarios.appspot.com",
  messagingSenderId: "841360112245",
  appId: "1:841360112245:web:453a423ed3f1e8bd46963c",
  measurementId: "G-QDBG73F60G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };