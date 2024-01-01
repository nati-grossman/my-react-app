import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Vlogs from './Vlogs';
import QAndA from './QAndA';
import LeetCode from './LeetCode';
import DisplayVlog from './DisplayVlog';
import DisplayQAndA from './DisplayQAndA';
import QAndAHome from '../QAndA/QAndAHome';

function MyNavbar() {



  return (
    <Router>
      <div dir="rtl">
        <Navbar bg="dark" expand="lg" className='sticky'>
          <Navbar.Brand href="/" className='text-white mx-4'>פינתי-קוד</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/vlogs" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>Vlogs</Nav.Link>
              <Nav.Link as={NavLink} to="/qanda" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>Q&A</Nav.Link>
              <Nav.Link as={NavLink} to="/leetcode" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>LeetCode !!</Nav.Link>
              <Nav.Link as={NavLink} to="/displayvlog" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>DisplayVlog</Nav.Link>
              <Nav.Link as={NavLink} to="/qandahome" className='border-5 border-bottom text-white mx-2 bg-hover-navbar link-offset-3'>QAndAHome</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/vlogs" element={<Vlogs />} />
          <Route exact path="/DisplayQAndA/:fileId" element={<DisplayQAndA />}  />
          <Route path="/qanda" element={<QAndA />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/displayvlog" element={<DisplayVlog />} />
          <Route path="/displayqanda" element={<DisplayQAndA />} />
          <Route path="/qandahome" element={<QAndAHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MyNavbar;