import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
// import { SearchIcon } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={() => {}} sx={{pl:2,borderRadius:20,boxShadow:'none',mr:{sm:5}}}>

       <input className="search-bar " value='' onChange={()=>{}} placeholder="search....." style={{border:'none'}}/>
       <IconButton sx={{color:'red'}}>
        <SearchIcon/>
       </IconButton>
    </Paper>
  );
};

export default SearchBar;
