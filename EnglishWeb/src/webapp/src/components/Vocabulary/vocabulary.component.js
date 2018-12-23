import React, {Component} from "react";
import "./vocabulary.css";

class Vocabulary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listVocabulary: [],
            topicName: "",
            listTopic: []
        };
    }

    componentDidMount() {
        this.getVocabularyByTopicId("1");
        this.getAllTopic();
    }

    getVocabularyByTopicId = async id => {
        await fetch("vocabulary/get-vocabularies-by-topic-id/" + id)
            .then(response => response.json())
            .then(data => this.setListVocabulary(data));
    };

    setListVocabulary = (data) => {

        let topicName = data[0].topicName;

        this.setState({listVocabulary: data, topicName: topicName});
    }

    getAllTopic = async() => {
        await fetch("vocabulary/get-all-topic")
            .then(response => response.json())
            .then(data => this.setState({listTopic: data}));
    }

    changeListVocabulary = (idTopic) => {
        this.getVocabularyByTopicId(idTopic);
    }

    render() {

        var elmVoca = this
            .state
            .listVocabulary
            .map((voc, index) => {
                return (
                    <div className=" col-3 p-3 vocabulary-card" key={index}>

                        <div className="card">
                            <img
                                className="card-img-top"
                                src={"http://localhost:3000/images/Vocabulary/" + this.state.topicName + "/" + voc.img + ".png"}
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

        var elmListTopic = this
            .state
            .listTopic
            .map((topic, index) => {
                return (
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => this.changeListVocabulary(topic.id)}
                        key={index}>{topic.topicName}</button>
                );
            });

        console.log(elmVoca);

        return (
            <React.Fragment>
                <br/>

                <div className="text-center">
                    <div className="btn-group mx-auto" role="group">
                        {elmListTopic}
                    </div>
                </div>
                <hr/>
                <h3>{this.state.topicName}</h3>
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
