import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DataGridLayout from "./DataGridLayout";

function ButtonGroupClass(){
    const printButtonLabel = async (event) => {
        console.log(event.currentTarget.value);
      };
    return (  
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
             <Button value="All" onClick={printButtonLabel}>All</Button>
            <Button value="Pending" onClick={printButtonLabel}>Pending</Button>
             <Button value="Completed" onClick={printButtonLabel}>Completed</Button>
        </ButtonGroup> 
     
    );

}
export default ButtonGroupClass;
