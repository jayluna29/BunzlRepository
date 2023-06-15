import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ProgressBar from "./Progress";

const columns = [
  { field: 'itemNumber', headerName: 'Item Number', width: 100 },
  {
    field: 'bunzlItemNumber',
    headerName: 'Bunzl Item Number',
    width: 150,
    editable: true,
  },
  {
    field: 'majorCategory',
    headerName: 'Major Category',
    width: 150,
    editable: true,
  },
  {
    field: 'minorCategory',
    headerName: 'Minor Category',
    width: 150,
    editable: true,   
  },
  {
    field: 'progress',
    headerName: 'Progress',
    sortable: false,
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    editable: true,
  },
];

const rows = [
  { id: 1, itemNumber: '1010', bunzlItemNumber: '0001', majorCategory: 'Safety', minorCategory: 'Gloves', progress: '', status: 'Pending' },
  { id: 2, itemNumber: '1011', bunzlItemNumber: '0002', majorCategory: 'Safety', minorCategory: 'Helmet', progress: '', status: 'Completed' },
  { id: 3, itemNumber: '1012', bunzlItemNumber: '0003', majorCategory: 'Safety', minorCategory: 'Helmet', progress: '', status: 'Pending' },
  { id: 4, itemNumber: '1013', bunzlItemNumber: '0004', majorCategory: 'Safety', minorCategory: 'Gloves', progress: '', status: 'Pending' },
  { id: 5, itemNumber: '1014', bunzlItemNumber: '0005', majorCategory: 'Safety', minorCategory: 'Helmet', progress: '', status: 'Completed' },
  { id: 6, itemNumber: '1015', bunzlItemNumber: '0006', majorCategory: 'Safety', minorCategory: 'Gloves', progress: '', status: 'Pending' },
  { id: 7, itemNumber: '1016', bunzlItemNumber: '0007', majorCategory: 'Safety', minorCategory: 'Mask', progress: '', status: 'Completed' },
  { id: 8, itemNumber: '1017', bunzlItemNumber: '0008', majorCategory: 'Safety', minorCategory: 'Gloves', progress: '', status: 'Pending' },
  { id: 9, itemNumber: '1018', bunzlItemNumber: '0009', majorCategory: 'Safety', minorCategory: 'Mask', progress: '', status: 'Completed' },
];



export default function DataGridLayout() {

  return (
    
    <Box sx={{ height: 400, width: '100%' }}>
       
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

  );
}