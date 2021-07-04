import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/organism/header.jsx';
import Footer from './components/organism/footer.jsx';
import BodyIndex from './components/templates/bodyindex.jsx';
import BodyProfile from './components/templates/bodyprofile.jsx';
import { Root } from './utils/global.js';
import { LABEL } from './utils/constants.js';
import { 
    FontSailecRegular, 
    FontSailecMedium, 
    FontSailecBold, 
    FontSailecLight, 
    FontHarmonyRegular, 
    FontHarmonyLite } from './utils/fonts.js';

const elements = (
    <div>
        <Root/>
        <FontSailecRegular/>
        <FontSailecMedium/>
        <FontSailecBold/>
        <FontSailecLight/>
        <FontHarmonyRegular/>
        <FontHarmonyLite/>
        
        <Router>
            <Switch>

                <Route 
                    exact path='/'>
                    <Header selected={LABEL.initial}/>
                    <BodyIndex/>
                </Route>

                <Route 
                    path='/:id'>
                    <Header selected={LABEL.us}/>
                    <BodyProfile/>
                </Route>

                {/* <Route 
                    path='/contact'>
                    <Header selected={LABEL.contact}/>
                    <BodyContact/>
                </Route>

                <Route 
                    path='/service'>
                    <Header selected={LABEL.service}/>
                    <BodyService/>
                </Route> */}

            </Switch>
        </Router>

        <Footer/>
    </div>
);

ReactDOM.render(elements, document.getElementById("root"));