import Home from'./pages/home/Home'
import Login from'./pages/login/Login'
import List from'./pages/list/List'
import New from'./pages/new/New'
import Single from'./pages/single/Single'
import Signup from './pages/signup/Signup'
import "./style/dark.scss"
import {
  BrowserRouter,
  Routes,
  Route,Navigate,
} from "react-router-dom";
import { productInputs, userInputs } from './formSource'
import {useContext} from 'react';
import {DarkModeContext} from './context/darkModeContext';
import {AuthContext} from './context/AuthContext'

function App() {
  const {darkMode}= useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);


  
  const RequireAuth=({children})=>{
   return currentUser ? children : <Navigate to='/login'/>
  }
 console.log(currentUser)

  return (
    <div className={darkMode? "app dark" :"app"}>

<BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route  index element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        
        }/>
        
        <Route path="users">
          <Route index element={
          <RequireAuth>
          <List />
        </RequireAuth>
          }/>
          <Route path=":userId" element={
          
          <RequireAuth>
            <Single/>
          </RequireAuth>
          }/>
          <Route path="new" element={
            <RequireAuth>
           <New inputs={userInputs} title="Add New User"/>
          </RequireAuth>
          
          }/>

        </Route>
        <Route path="products">
          <Route index element={
          <RequireAuth>
          <List />
        </RequireAuth>
          }/>
          <Route path=":productId" element={
          
          <RequireAuth>
            <Single/>
          </RequireAuth>
          }/>
          <Route path="new" element={
            <RequireAuth>
            <New inputs={productInputs} title="Add New Producrs"/>
          </RequireAuth>
          }/>

        </Route>
      </Route>
       
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
