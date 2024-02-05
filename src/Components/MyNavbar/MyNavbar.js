import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LeetCode from './LeetCode';
import DisplayQAndA from './DisplayQAndA';
import QAndAHome from '../QAndA/QAndAHome';
import VlogHome from '../Vlog/VlogHome';
import VlogPage from '../Vlog/VlogPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';

import  './MyNavbar.css';

function MyNavbar() {



  return (
    <Router>
      <div dir="rtl">
        <Navbar bg="dark" expand="lg" className='sticky'>
          <Navbar.Brand href="/" className='text-white mx-4'>פינתי-קוד</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/leetcode" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>LeetCode !!</Nav.Link>
              <Nav.Link as={NavLink} to="/qandahome" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>QAndAHome</Nav.Link>
              <Nav.Link as={NavLink} to="/vloghome" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>VlogHome</Nav.Link>
              <Nav.Link as={NavLink} to="/aboutpage" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>AboutPage</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/DisplayQAndA/:fileId" element={<DisplayQAndA />}  />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/displayqanda" element={<DisplayQAndA />} />
          <Route path="/qandahome" element={<QAndAHome />} />
          <Route path="/vloghome" element={<VlogHome />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/vlogpage/:fileId" element={<VlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MyNavbar;