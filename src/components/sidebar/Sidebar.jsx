import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from 'react-router-dom';

import {useContext} from 'react';import {DarkModeContext} from '../../context/darkModeContext';



const Sidebar = () => {
    
    const {dispatch}= useContext(DarkModeContext);

  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Admin Dashboard</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                   <li>
                    <PersonIcon className="icon"/>
                    <span>Users</span>
                </li> 
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                    <LocalGroceryStoreIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>
                
                <li>
                     <AssignmentTurnedInIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    < LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">INFOS</p>
                <li>
                    <InsertChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li> 
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
               <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                 <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                <ExitToAppIcon className="icon"/>
                    <span>Logout</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar