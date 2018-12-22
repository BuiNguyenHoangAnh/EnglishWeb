import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <span><img className="imgLogo" src="images/logo.png" alt="logo"/></span>
                    </div>
                    <div className="contact">
                        <span>
                            <strong>Contact us:</strong>
                        </span>
                        <br/>
                        <br/>
                        <hr/>
                        <span>Address: University of Information Technology<br/>Quarter 6, Linh Trung Ward, Thu Duc District, Ho Chi Minh City.</span>
                        <br/>
                        <span>Copy right &copy AHA Team</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Footer;
