import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { collection, getDocs,deleteDoc,doc } from "firebase/firestore";
import {db} from "../../firebase"
import { onSnapshot } from "firebase/firestore";


const DataTable = () => {

    const [data,setData]= useState([]);
    useEffect(()=>{
      // const fetchData= async()=>{
      //   let list=[];
      //   try{

      //     const querySnapshot = await getDocs(collection(db, "users"));
      //     querySnapshot.forEach((doc) => { 
      //        list.push({id:doc.id,...doc.data()});
      //     });
      //     setData(list);
      //    console.log(list);
      //   }
      //   catch(err){
      //     console.log(err)
      //   }
      // }
      // fetchData()

      const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
        let list=[];
        snapShot.forEach((doc)=>{
          list.push({id:doc.id,...doc.data()})
        })
        setData(list);
    },
    (error)=>{
      console.log(error);
    }
    );
    return ()=>{
      unsub();
    }
    },[])

    console.log(data)
    const handleDelete= async(id)=>{
      try{
        await deleteDoc(doc(db, "users", id));
        setData(data.filter(item=>item.id!==id));
      }catch(err){
        console.log(err);
      }
    }
     const actionColumn =[
       {field: "Action",header: "Action",width:"200",renderCell:(params)=>{
         return(
           <div className="cellAction">
             <Link to="/users/userid" style={{textDecoration:"none"}} >

               <div className="viewButton">
                View
             </div>
             </Link>
             
             <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>
                Delete
             </div>
           </div>
         )
       }}
     ]
  return (
    <div className="datatable">
       <div className="dataTableTitle">
         Add New User
         <Link to="/users/new" style={{textDecoration:"none"}} className="link">
          Add New </Link>

       </div>
       <div style={{ height: 630, width: '100%' }}>
      <DataGrid className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default DataTable