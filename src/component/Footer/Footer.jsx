import React from 'react'

const Footer = () => {
    return (
        <div className="bg-dark footer-container">
            <footer className="container align-items-center ">
                
                <div className="footer-content text-center">
                    <div className="row align-items-center py-2">
                    <h5 className="text-white text-start col-md-6">Designed and Developed by Gyan Kashyap <span className="text-white fw-light">&copy; 2022</span></h5>
                    <div className="footer-social-links text-end col-md-6">
                            <a className="text-white" href="https://github.com/gyankashyap">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="http://linkedin.com/in/gyan-kashyap">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:gyankashyap56@gmail.com">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    
                    
                </div>
            </footer>
        </div>

    )
}

export default Footer;
