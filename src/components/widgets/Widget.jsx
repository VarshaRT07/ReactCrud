import './widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({type}) => {
let data;

const amount=100;
const diff=100;

 switch (type) {
     case "user":
         data={
             title: 'USERS',
             isMoney:false,
             link:"See all users",
             icon: <PersonIcon className="icon" 
                     style={{
                         color:"crimson",
                         backgroundColor:"#F4BBBB"
                     }}/>

        };
        break;
        case "balance":
            data={
                title: 'BALANCE',
                isMoney:true,
                link:"See details",
                icon: <AccountBalanceIcon className="icon"style={{
                    color:"#FAC200",
                    backgroundColor:"#F1F0C0"
                }}/>
           };
           break;
           case "order":
            data={
                title: 'ORDERS',
                isMoney:false,
                link:"View all orders",
                icon: <ShoppingCartIcon className="icon"style={{
                    color:"#398BC8",
                    backgroundColor:"#BDE6F1"
                }}/>
           };
           break;
           case "earning":
            data={
                title: 'EARNINGS',
                isMoney:true,
                link:"View net earnings",
                icon: <MonetizationOnIcon className="icon"style={{
                    color:"green",
                    backgroundColor:"#B4E197"
                }}/>
           };
        break;
        default: break;
 }

  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"}{amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpIcon/>
                {diff}
            </div>
            {data.icon}
            


        </div>
    </div>
  )
}

export default Widget