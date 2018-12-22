import React, {Component} from "react";
import "./vocabulary.css";

class Vocabulary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listVocabulary: []
        };
    }

    componentDidMount() {
        this.getVocabularyByTopicId('1');
    }

    getVocabularyByTopicId = async id => {
        await fetch("vocabulary/get-vocabularies-by-topic-id/1")
            .then(response => response.json())
            .then(data => this.setState({listVocabulary: data}));
    };

    render() {

        var elmVoca = this
            .state
            .listVocabulary
            .map((voc, index) => {
                return (
                    <div className=" col-3 p-3 vocabulary-card">

                        <div className="card" key={index}>
                            <img
                                className="card-img-top"
                                src={"/images/Vocabulary/Flowers/" + voc.word + ".png"}
                                alt={voc.word}/>

                            <div className="card-body">
                                <h5 className="card-title">{voc.word}</h5>
                                <p className="card-text">
                                    {voc.meaning}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            });

        console.log(elmVoca);

        return (
            <React.Fragment>
                <br/>

                <div className="selectedTopic" align="center">
                    <button>topic1</button>
                </div>
                <hr/>
                <h3>Selected Topic</h3>
                <div className="container-fluid">
                    <div className="row">
                        {elmVoca}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Vocabulary;
