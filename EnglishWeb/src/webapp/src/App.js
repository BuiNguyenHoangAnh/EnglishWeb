import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/home.component';
import Header from './components/Header/header.component';

import './App.css';
import Footer from './components/Footer/footer.component';
import Vocabulary from './components/Vocabulary/vocabulary.component';
import Help from './components/Help/help.component';
import Game from './components/Game/game.component';
import ShortStory from './components/ShortStory/short-story.component';
import GameCa from './components/game-ca/GameCa';
import GameKiemChu from './components/game-kiem-chu/GameKiemChu';
import GameABC from './components/game-abc/GameABC';
import ShortStoryCinderrella from './components/ShortStoryDetail/short-story-cinderella.component';
import ShortStoryUglyDuckling from './components/ShortStoryDetail/short-story-ugly-duckling.component';


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
                    <Route path='/game-ca' component={GameCa}/>
                    <Route path='/game-match-word' component={GameKiemChu}/>
                    <Route path='/game-abc' component={GameABC}/>
                    <Route path='/short-story' component={ShortStory}/>
                    <Route path='/short-story-cinderella' component ={ShortStoryCinderrella}/>
                    <Route path='/short-story-the-ugly-duckling' component ={ShortStoryUglyDuckling}/>
                </Switch>
                <Footer/>
            </React.Fragment>

        );
    }
}

export default App;
