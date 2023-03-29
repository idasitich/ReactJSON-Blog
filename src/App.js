import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './content/blog.js';
import Contact from './content/contact.js';


export default function App() {
  const Home = () => {
    return <h1>Welcome To my Site.</h1>;
  };

  return (
    <>
      <Router>
        <nav>
          <Link to="/">
            <div class="Home">Home</div>
          </Link>
          <Link to="Blog">
            <div class="blog">Blog</div>
          </Link>
          <Link to="Contact">
            <div class="contact">Contact</div>
          </Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />}/>
            <Route path="contact" element={<Contact />} />
            <Route />
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </>
  );
}
