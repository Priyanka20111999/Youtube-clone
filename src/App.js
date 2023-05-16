
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import {NavBar,VideoDetail,Feed,ChannelDetail,SearchFeed} from './component';

const App = () => {
  return (
    <BrowserRouter>
    <Box>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/vide/:id' exact element={<VideoDetail/>}/>
        <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App