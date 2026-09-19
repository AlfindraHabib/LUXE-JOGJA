import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Logu from "../src/pages/Logu";
import Loga from "../src/pages/Loga";
import Register from './pages/Register';
import Regu from './pages/Regu';
import Rega from './pages/Rega';
import Beranda from './pages/Beranda';
import SearchHotel from './pages/SearchHotel';

// import './styles/styles.css';
import Areahotelform from './components/Areahotelform'
import Areahotellist from './components/Areahotellist'
import Turisareahotelupdate from './components/AreahotelUpdate';
import DetailArea from './components/Detailarea';
import EditHotel from './components/Editdetailarea';
import AddDetailArea from './components/Adddetailarea';
import Landing from './pages/Landingpage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginuser" element={<Logu />} />
        <Route path="/loginadmin" element={<Loga />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registeruser" element={<Regu />} />
        <Route path="/registeradmin" element={<Rega />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/hotelsearch" element={<SearchHotel />} />
        <Route path="/" element={<Landing />} />
        <Route path='/turisareahotel' element={<Areahotellist />} />
        <Route path='/turisareahotel/add' element={<Areahotelform />} />
        <Route path='/turisareahotel/edit/:id' element={<Turisareahotelupdate />} />
        <Route path='/turisareahotel/:id' element={<DetailArea />} />
        <Route path='/turisareahotel/hotel/:id/edithotel' element={<EditHotel />} />
        <Route path="/turisareahotel/:turiareahotel_id/hotel" element={<AddDetailArea />} />
      </Routes>
    </Router>
  );
};

export default App;