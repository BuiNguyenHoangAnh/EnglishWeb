import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/home.component';
import Header from './components/Header/header.component';

import './App.css';
import Footer from './components/Footer/footer.component';
import Vocabulary from './components/Vocabulary/vocabulary.component';
import Help from './components/Help/help.component';
import Game from './components/Game/game.component';


class App extends Component {
    render() {
        return (

            <React.Fragment>

                <Header/>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/vocabulary' component={Vocabulary}/>
                    <Route path='/help' component={Help}/>
                    <Route path='/game' component={Game}/>
                </Switch>
                <Footer/>
            </React.Fragment>

        );
    }
}

export default App;
