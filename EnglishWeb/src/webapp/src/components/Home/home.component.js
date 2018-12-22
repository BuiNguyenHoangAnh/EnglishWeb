import React, {Component} from 'react';
import Banner from '../Banner/banner.component';
import ScrollIntoView from 'react-scroll-into-view';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <ScrollIntoView selector="#main">
                    <Banner/>
                </ScrollIntoView>
                <div className="container" id="main">
                    <div className="row">

                        <div className="container col-md-9" id="topic">
                            <br/>
                            <br/>
                            <br/>
                            <ul className="row">
                                <li className="col-md-6" id="vocabularyTab">
                                    <a>
                                        <Link to="/vocabulary">
                                            <div>
                                                <img
                                                    className="chosen"
                                                    src="images/vocabulary.png"
                                                    title="Vocabulary"
                                                    alt="Vocabulary"/>
                                            </div>
                                            <br/></Link>

                                    </a>
                                </li>
                                <li className="col-md-6" id="gameTab">
                                    <a >
                                        <Link to="/game">
                                            <div>
                                                <img className="chosen" src="images/game.png" title="Game" alt="Game"/>
                                            </div>
                                            <br/>
                                        </Link>
                                    </a>
                                </li>
                                <li className="col-md-6" id="tellTab">
                                    <a >
                                        <Link to="/short-story">
                                            <div>
                                                <img
                                                    className="chosen"
                                                    src="images/fairytale.png"
                                                    title="Short Story"
                                                    alt="Short Story"/>
                                            </div>
                                        </Link>
                                        <br/>
                                    </a>
                                </li>
                                <li className="col-md-6" id="helpTab">
                                    <a >
                                        <Link to="/help">
                                            <div>

                                                <img className="chosen" src="images/help.png" title="Help" alt="Help"/>

                                            </div>
                                        </Link>
                                        <br/>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="container col-md-3">
                            <br/>
                            <br/>
                            <br/>
                            <div id="overview">
                                <h4>Overview</h4>
                            </div>
                            <div id="content">
                                <ul>
                                    <li>
                                        <strong>Number of topics:
                                        </strong>9</li>
                                    <hr/>
                                    <li>
                                        <strong>Number of vocabularies:
                                        </strong>90</li>
                                    <li>
                                        <strong>Number of stories:
                                        </strong>2</li>
                                    <li>
                                        <strong>Number of games:
                                        </strong>3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
