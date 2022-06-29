import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import {Link} from 'react-router-dom';
import {useState} from 'react';



const DataTable = () => {
    const [data,setData]= useState(userRows);

    const handleDelete=(id)=>{
      setData(data.filter(item=>item.id!=id));
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