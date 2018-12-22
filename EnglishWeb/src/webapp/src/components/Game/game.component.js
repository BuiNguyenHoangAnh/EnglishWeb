import React, {Component} from 'react';
import './game.css';
import GameCa from '../game-ca/GameCa';

class Game extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="game">

                    <br/>
                    <div align="center">

                        <button>Topic1</button>

                        <button>Topic2</button>
                        <button>Topic3</button>
                    </div>
                    <hr/>
                    <h3>Selected Topic</h3>
                    <br/>

                    <div className="playGame mx-auto" align="center">
                        <GameCa/>
                    </div>

                    <br/>
                    <div className="guideGame">
                        <h2>How to play game?</h2>
                        <p>Guide is here</p>
                    </div>
                    <br/>

                </div>
            </React.Fragment>
        );
    }
}

export default Game;