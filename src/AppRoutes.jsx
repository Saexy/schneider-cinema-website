import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Project from './pages/Project';
import Press from './pages/Press';

const AppRoutes = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' exact element={<Home />}/>
                <Route path='*' exact element={<Home />}/>
                <Route path='/team' exact element={<Team />}/>
                <Route path='/partners' exact element={<Partners />}/>
                <Route path='/press' exact element={<Press />}/>
                <Route path='/projects/:id' exact element={<Project />}/>
            </Routes>
        </Router>
    );
}
 
export default AppRoutes;