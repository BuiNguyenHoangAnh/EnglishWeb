import React, {Component} from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

class GameABC extends Component {

    constructor(props) {
        super(props);

        this.unityContent = new UnityContent("GameABC/Build/release.json", "GameABC/Build/UnityLoader.js");
    }

    render() {
        return (
            <React.Fragment>

                <Unity unityContent={this.unityContent}/>

            </React.Fragment>
        );
    }
}

export default GameABC;
