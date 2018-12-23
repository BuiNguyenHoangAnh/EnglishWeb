import React, {Component} from "react";
import './short-story.css'
import {Link} from 'react-router-dom';

class ShortStory extends Component {
    render() {
        return (
            <React.Fragment>
                <h4 className="text-center mt-3">Short Story</h4>
                <hr/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 my-4 px-3 short-story">
                            <Link to="/short-story-cinderella">
                                <div className="card ">
                                    <img
                                        className="card-img-top"
                                        src="images/ShortStory/cinderella.jpg"
                                        alt="cinderella"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Cinderella</h5>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="col-6 my-4 px-3 short-story">
                            <Link to="/short-story-the-ugly-duckling">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src="images/ShortStory/theuglyduckling.jpg"
                                        alt="The Ugly Duckling"/>
                                    <div className="card-body">
                                        <h5 className="card-title">The Ugly Duckling</h5>
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

export default ShortStory;