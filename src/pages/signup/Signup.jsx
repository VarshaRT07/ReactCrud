import './../login/login.scss'
import {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
 import {login} from '../login/Login'
// import {AuthContext} from "../../context/AuthContext"
const Signup = () => {

  
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const {dispatch} = useContext(AuthContext)

  const handlesignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        const user = userCredential.user;
        // dispatch({type:"signup", payload:user})
        
        navigate("/")
      })
      .catch((error) => {
       // setError(true);
      });
  };

  return (
    <div className="container">
    <form onSubmit={handlesignup}>
     <h1>Signup</h1>
     <div className="ui divider"></div>
     <div className="ui flex">
       <div className="field">
         <label>Username</label>
         <input type="text"
          name="username"
           placeholder="Username"
           
          
         />
       </div>
       <div className="field">
         <label>Email</label>
         <input type="email"
          name="email"
           placeholder="email"
           onChange={(e) => setEmail(e.target.value)}
          
           />
       </div>
       <div className="field">
         <label>Password</label>
         <input type="password"
          name="password"
           placeholder="password"
           onChange={(e) => setPassword(e.target.value)}
           />
       </div>
       <button className="ui fluid button blue">Submit</button>
       <p className="log">Already have an account <a href="login">Login</a></p>
       {/* {error && <h5>Wrong username or password</h5>} */}
     </div>
    </form></div>
  )
}

export default Signup