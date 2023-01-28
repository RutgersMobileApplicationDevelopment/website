import React from 'react';

import '../index.css';
import './navbar.css';

class NavAnchor extends React.Component {
    constructor(){
        super();
        this.handleClickEvent = this.handleClickEvent.bind(this)
    }

    handleClickEvent(){
        this.props.setLoc(this.props.href);
    }

    render() {
        var className = "nav-anchor" + (this.props.loc == this.props.href ? " selected" : "")
        return <a className={className} href={"#"+this.props.href} onClick={this.handleClickEvent}>
            {this.props.text}
        </a>
    }
}

class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            loc: window.location.href.replace(/.*#/,"")
        }

        this.setLoc = this.setLoc.bind(this);
    }

    setLoc(newLoc){
        this.setState({loc:newLoc})
    }

    render() {
        return <div class="flex-row nav-row">
            <div class="nav-icon">
                <div class="circle-2x circle circle-raised align-center">
                    <img src="./logo.png"/>
                </div>
            </div>
            <div class="nav-anchors">
                <NavAnchor text="ABOUT" href="about" loc={this.state.loc} setLoc={this.setLoc}/>
                <NavAnchor text="ACCELERATOR" href="accelerator" loc={this.state.loc} setLoc={this.setLoc}/>
                <NavAnchor text="INCUBATOR" href="incubator" loc={this.state.loc} setLoc={this.setLoc}/>
                <NavAnchor text="CONTACT US" href="contact" loc={this.state.loc} setLoc={this.setLoc}/>
            </div>
        </div>
    }
}

export default NavBar;