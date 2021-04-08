import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small cyan darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div class="mb-5 flex-center">
                                <a class="fb-ic">
                                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="tw-ic">
                                    <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="gplus-ic">
                                    <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="li-ic">
                                    <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="ins-ic">
                                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">
                    Roselle Burlasa © 2020 Copyright:
                </div>
            </footer>
        </>
    )
}

export default Footer;