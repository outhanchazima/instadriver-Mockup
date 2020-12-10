import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="container footer">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <img className="" alt="logo" src='https://www.instadriver.co/img/footerlogo.svg'></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a className="links" href="##">About InstaDriver </a></li>
                            <li><a className="links" href="##">Verified Search (For employees & Drivers) </a></li>
                            <li><a className="links" href="##">Top Ad Feature (For Drivers)  </a></li>
                        </ul>
                        
                    </div>
                    <div className="col-sm">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="##">Driver Sign In </a> </li>
                            <li><a href="##">Driver Sign Up </a> </li>
                        </ul>
                                             
                    </div>
                    <div className="col-sm">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="##">FAQs </a></li>
                            <li><a href="##">Contact Us </a></li>
                            <li><a href="##">Terms & Conditions </a></li>

                        </ul>
                    </div>
                    <div className="col-sm">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="##">IG</a></li>
                            <li><a href="##">YT</a></li>
                            <li><a href="##">FB</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer