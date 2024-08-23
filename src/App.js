import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header.jsx"; 
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx"; 
import YoutubePage from "./pages/YoutubePage.jsx";
import MoviePage from "./pages/MoviePage.jsx"; 
import PortPage from "./pages/PortPage.jsx"; 
import IntroPage from "./pages/IntroPage.jsx"; 
import Unsplash from "./pages/Unsplash.jsx";    
import PostView from "./pages/board/PostView.jsx";
import PostMain from "./pages/board/PostMain.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={< IntroPage/>} />
        <Route path="/port" element={<PortPage />} />
        <Route path="/youtube" element={<YoutubePage />} /> 
        <Route path="/movie" element={<MoviePage />} /> 
        <Route path="/unsplash" element={<Unsplash />} />  
        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/' component={PostMain} />
      </Routes>
      <Footer  />
    </BrowserRouter>
  );
};

export default App;