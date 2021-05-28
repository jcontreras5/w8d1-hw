//3.7 creation of DT comp
import React from 'react'
// 3.10 Datatable stuff
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'; 

const columns: GridColDef[] = [ // default will be any, be we are specifyingh with GridColDef
    { field: 'id', headerName:'ID', width: 150 },
    { field: 'firstName', headerName:'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'age', headerName:'Age', type: 'number', width: 150 },
    { field: 'height', headerName: 'Height', width: 150,},
    { field: 'weight', headerName: 'Weight', width: 150 },
    { field: 'position', headerName: 'Position', width: 150 },
    { field: 'club', headerName: 'Club', width: 150 },
    { field: 'nationality', headerName: 'Nationality', width: 150 },


  ];

  const rows = [
    {id:1, firstName:'Jonathan', lastName:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican'},
    {id:2, firstName:'Peter', lastName:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican'},
    {id:3, firstName:'Luis', lastName:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican'},
    {id:4, firstName:'Pablo', lastName:'Contreras', age:28, height:'5ft 10in', weight:'155lb', position:'FW', club:'FC Barcelona', nationality:'Mexican'}
  ];

//3.11 creation of DT comp for export 
export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Drones In Inventory</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}