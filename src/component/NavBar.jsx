import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import { logo } from "../utils/constant";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      sx={{
        backgroundColor: "#000",
        padding: "5px",
        position: "sticky",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Link to="/" style={{ heigh: "10px" }}>
          <img src={logo} alt="logo" height={40}/>
        </Link>
      </Box>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
