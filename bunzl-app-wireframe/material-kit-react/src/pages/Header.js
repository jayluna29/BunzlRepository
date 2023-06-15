import React, {useState, useEffect} from "react";
import ButtonGroupClass  from './ButtonGroupClass';
import GlobalSearch  from './GlobalSearch';
import DropDown from './DropDown';
import './Header.css';

export default function Header() {
   

    return (
      <div className="parent"> 
        <div className="child">
            <ButtonGroupClass/> 
        </div>
        <div className="child">
            <GlobalSearch/>
        </div>
        <div className="child">
            <DropDown/>
        </div>
      </div>
    );
  }