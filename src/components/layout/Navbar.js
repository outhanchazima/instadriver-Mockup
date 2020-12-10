import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col top">
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="###">  <img alt="logo" src="https://www.instadriver.co/img/logo.svg"></img> </a>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <div className="box-nav">Jobs</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="box-nav">Get Social</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="box-nav">James Keem</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="menu">Menu <span><img alt="menu" src="https://www.instadriver.co/img/menu.svg"></img></span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col black">
                </div>
            </div>
        )
    }
}

export default Navbar
