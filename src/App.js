import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './content/blog.js';
import Contact from './content/contact.js';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const Home = () => {
    return <h1>Welcome To my Site.</h1>;
  };

  useEffect(() => {
    const nav = document.querySelectorAll('.mark');
    nav.forEach((b) => {
      let b1 = document.getElementById('1');
      let b2 = document.getElementById('2');
      let b3 = document.getElementById('3');
      b.addEventListener('click', () => {
        if (b.id == 1) {
          b1.classList.add('clicked');
          b2.classList.remove('clicked');
          b3.classList.remove('clicked');
        } else if (b.id == 2) {
          b1.classList.remove('clicked');
          b2.classList.add('clicked');
          b3.classList.remove('clicked');
        } else if (b.id == 3) {
          b1.classList.remove('clicked');
          b2.classList.remove('clicked');
          b3.classList.add('clicked');
        }
      });
    });
  });

  return (
    <>
      <Router>
        <nav id="nav">
          <Link to="/">
            <div id="1" className=" mark Home">
              Home
            </div>
          </Link>
          <Link to="Blog">
            <div id="2" className=" mark blog">
              Blog
            </div>
          </Link>
          <Link to="Contact">
            <div id="3" className="mark contact">
              Contact
            </div>
          </Link>
        </nav>
        <div
          id="bug"
          onClick={() => {
            let nav = document.getElementById('nav');
            let burger = document.getElementById('bug');
            nav.classList.toggle('show');
            burger.style.top = '1%';
          }}
          className="burger"
        >
          <div>
            <FontAwesomeIcon icon={faBars} size={'2x'} />
          </div>
        </div>
        <main>
          <h1>Welcome To my Site.</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route />
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </>
  );
}
