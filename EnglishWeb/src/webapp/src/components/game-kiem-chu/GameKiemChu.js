import React, {Component} from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

class GameKiemChu extends Component {

    constructor(props) {
        super(props);

        this.unityContent = new UnityContent("GameKiemChu/Build/release.json", "GameKiemChu/Build/UnityLoader.js");
    }

    render() {
        return (
            <React.Fragment>

                <Unity unityContent={this.unityContent}/>

            </React.Fragment>
        );
    }
}

export default GameKiemChu;
