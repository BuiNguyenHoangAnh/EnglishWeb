import React, {Component} from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

class GameCa extends Component {

    constructor(props) {
        super(props);

        this.unityContent = new UnityContent("GameCa/Build/release.json", "GameCa/Build/UnityLoader.js");
    }

    render() {
        return (
            <React.Fragment>

                <div style={{maxWidth: '900px', width: '100%'}}>
                  <Unity unityContent={this.unityContent}/>
                </div>

            </React.Fragment>
        );
    }
}

export default GameCa;
