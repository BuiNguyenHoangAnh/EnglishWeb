import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">

                    <div className="media mx-auto">
                        <img className="imgLogo" src="http://localhost:3000/images/logo.png" alt="logo"/>
                        <div className="media-body align-self-center contact ml-5">
                            <span>
                                <strong>Contact us:</strong>
                            </span>
                            <br/>
                            <span>Address: University of Information Technology<br/>Quarter 6, Linh Trung Ward, Thu Duc District, Ho Chi Minh City.</span>
                            <br/>
                            <span>Copy right &copy AHA Team</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
export default Footer;
