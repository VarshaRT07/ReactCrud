import './login.scss'
import {useState,useContext} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {signup} from '../signup/Signup'
import {AuthContext} from "../../context/AuthContext"
const Login = () => {

  
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        
        navigate("/")
      
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="container">
    <form onSubmit={handleLogin}>
     <h1>LOGIN</h1>
     <div className="ui divider"></div>
     <div className="ui flex">

       <div className="field">
         <label>Email</label>
         <input type="email"
          name="email"
           placeholder="email"
           onChange={e => setEmail(e.target.value)}
          
           />
       </div>
       <div className="field">
         <label>Password</label>
         <input type="password"
          name="password"
           placeholder="password"
           onChange={e => setPassword(e.target.value)}
           />
       </div>
       <button className="ui fluid button blue">Submit</button>
       <p className="log">Don't have an account <a href="signup">Signup</a></p>
       {error && <h5>Wrong username or password</h5>}
     </div>
    </form></div>
  )
}

export default Login