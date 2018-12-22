import React, {Component} from 'react';
import './vocabulary.css';

class Vocabulary extends Component {

    render() {
        return (
            <React.Fragment>
                <br/>
                <div className="selectedTopic" align="center">
                    <button >topic1</button>
                </div>
                <hr/>
                <h3>Selected Topic</h3>
            </React.Fragment>
        );
    }
}

export default Vocabulary;