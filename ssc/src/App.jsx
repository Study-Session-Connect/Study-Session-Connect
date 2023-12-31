import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import CreateSessionPage from './views/CreateSessionPage';
import MySessionsPage from './views/MySessionsPage';
import SearchPage from './views/SearchPage';
import Profile from './views/Profile';
import Onboarding from './views/Onboarding';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import history from './components/history';

function App() {


    useEffect(() => {
        console.log(localStorage.getItem("username"))
    });

    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="login" element={<LoginPage history={history} />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="" element={<HomePage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="create-session" element={<CreateSessionPage />} />
                    <Route path="my-sessions" element={<MySessionsPage />} />
                    <Route path="onboarding" element={<Onboarding history={history} />} />
                    <Route path="profile" element={<Profile history={history} />} />
                </Routes>
                <div className="spacer"></div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
