import React, {Component} from 'react';
import './game.css';
import {Link} from 'react-router-dom';
class Game extends Component {

    render() {
        return (
            <React.Fragment>
                <h4 className="text-center mt-3">Game</h4>
                <hr/>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-4 my-4 px-3 card-game" onClick={window.scrollTo(0,0)}>
                            <Link to="/game-ca">
                                <div className="card ">
                                    <img className="card-img-top" src="images/Game/game-ca.png" alt="cinderella"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Game Fish</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-4 my-4 px-3 card-game" onClick={window.scrollTo(0,0)}>
                            <Link to="/game-abc">
                                <div className="card">
                                    <img className="card-img-top" src="images/Game/game-abc.png" alt="Game abc"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Game ABC</h5>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="col-4 my-4 px-3 card-game" onClick={window.scrollTo(0,0)}>
                            <Link to="/game-match-word">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src="images/Game/game-kiem-chu.png"
                                        alt="Game match word"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Game Match Words</h5>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Game;