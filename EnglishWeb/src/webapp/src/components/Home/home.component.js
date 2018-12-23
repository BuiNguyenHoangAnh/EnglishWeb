import React, {Component} from 'react';
import Banner from '../Banner/banner.component';
import ScrollIntoView from 'react-scroll-into-view';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listTopic: []
        };
    }

    componentDidMount() {
        this.getAllTopic();
    }

    getAllTopic = async() => {
        await fetch("vocabulary/get-all-topic")
            .then(response => response.json())
            .then(data => this.setState({listTopic: data}));
    }

    render() {

        var listTopic = this
            .state
            .listTopic
            .sort((tp1, tp2) => {
                if (tp1.topicName > tp2.topicName) {
                    return 1;
                } else if (tp1.topicName < tp2.topicName) {
                    return -1;
                } else {
                    return 0;
                }
            });

        var elmListTopic = listTopic.map((topic, index) => {
            return (
                <div key={index}>
                    <li>{topic.topicName}</li>
                </div>
            );
        });

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
                                <li className="col-md-6" id="vocabularyTab" >
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
                                <h5 className="pl-2">A - Z topics: 9</h5>
                                <ul className="ml-3">
                                    {elmListTopic}
                                </ul>
                                <br/>
                                <h5 className="pl-2">Game: 3</h5>
                                <ul className="ml-3">
                                    <div>
                                        <li>Game Fish</li>
                                    </div>
                                    <div>
                                        <li>Game ABC</li>
                                    </div>
                                    <div>
                                        <li>Game Match Words</li>
                                    </div>
                                </ul>

                                <br/>
                                <h5 className="pl-2">Short story: 2</h5>
                                <ul className="ml-3">
                                    <div>
                                        <li>Cinderella</li>
                                    </div>
                                    <div>
                                        <li>The Ugly Duckling</li>
                                    </div>
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
