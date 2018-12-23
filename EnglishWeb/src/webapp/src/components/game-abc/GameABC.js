import React, {Component} from 'react';
import Unity, {UnityContent} from "react-unity-webgl";
import {Link} from 'react-router-dom';
class GameABC extends Component {

    constructor(props) {
        super(props);

        this.unityContent = new UnityContent("GameABC/Build/release.json", "GameABC/Build/UnityLoader.js");

    }

    onBackButtonEvent = (e) => {
        this.reload();
    }

    componentDidMount = () => {
        window.onpopstate = this.onBackButtonEvent;
    }

    reload = () => {
        window.location.reload();
        window.scrollTo(0,0);
    }

    render() {

        return (
            <React.Fragment>
                <h4 className="text-center mt-3">Game ABC</h4>
                <hr/>
                <div
                    style={{
                    maxWidth: '900px',
                    width: '100%'
                }}
                    className="mx-auto mt-2 mb-5">
                    <Unity unityContent={this.unityContent}/>
                </div>

                <h4 className="text-center mt-3">More Games</h4>
                <hr/>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-6 my-4 px-3 card-game" onClick={this.reload}>
                            <Link to="/game-ca">
                                <div className="card ">
                                    <img className="card-img-top" src="images/Game/game-ca.png" alt="cinderella"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Game Fish</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 my-4 px-3 card-game" onClick={this.reload}>
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

export default GameABC;
