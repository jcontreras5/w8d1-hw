//3.7 creation of DT comp
import React from 'react'
// 3.10 Datatable stuff
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'; 

import {useGetData} from '../../custom-hooks'
const columns: GridColDef[] = [ // default will be any, be we are specifyingh with GridColDef
    { field: 'id', headerName:'ID', width: 140 },
    { field: 'first_name', headerName:'First name', width: 140 },
    { field: 'last_name', headerName: 'Last name', width: 140 },
    { field: 'age', headerName:'Age', type: 'number', width: 140 },
    { field: 'height', headerName: 'Height', width: 140,},
    { field: 'weight', headerName: 'Weight', width: 140 },
    { field: 'position', headerName: 'Position', width: 140 },
    { field: 'club', headerName: 'Club', width: 140 },
    { field: 'nationality', headerName: 'Nationality', width: 140 },
    { field: 'price', headerName: 'Price', width: 140 },
    { field: 'boots', headerName: 'Boots', width: 140 }


  ];

  const rows = [
    {id:1, first_name:'Jonathan', last_name:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican',price:1000,boots:'Nike'},
    {id:2, first_name:'Peter', last_name:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican',price:1000,boots:'Nike'},
    {id:3, first_name:'Luis', last_name:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican',price:1000,boots:'Nike'},
    {id:4, first_name:'Pablo', last_name:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican',price:1000,boots:'Nike'}
  ];

//3.11 creation of DT comp for export 
export const DataTable = () => {
  let {playerData,getData}= useGetData(); // 4.6
  console.log(playerData)
    return (
        
          <DataGrid rows={playerData} columns={columns} pageSize={5} checkboxSelection />
      
      );
}