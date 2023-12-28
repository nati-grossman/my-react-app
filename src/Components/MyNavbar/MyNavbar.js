import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vlogs from './Vlogs';
import QAndA from './QAndA';
import LeetCode from './LeetCode';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/vlogs">Vlogs</Nav.Link>
              <Nav.Link href="/qanda">Q&A</Nav.Link>
              <Nav.Link href="/leetcode">LeetCode</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
        <Route path="/vlogs" element={<Vlogs />} />
          <Route path="/qanda" element={<QAndA />} />
          <Route path="/leetcode" element={<LeetCode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MyNavbar;
