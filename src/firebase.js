import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy2u-yBTAuLCN8FZ1v6jPlYyTrgRhZ1fk",
  authDomain: "reactcrud-c4af9.firebaseapp.com",
  projectId: "reactcrud-c4af9",
  storageBucket: "reactcrud-c4af9.appspot.com",
  messagingSenderId: "810243138087",
  appId: "1:810243138087:web:e64b60d6af26497fcd6402"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth()