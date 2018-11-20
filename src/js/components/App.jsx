import React, { Component } from 'react';

class App extends Component {
    state = {
        isOpen: false,
        width: 0,
        height: 0,
        scrollY: 0
    };

    constructor(props){
        super(props);

        this.onTogglingMenu = this.onTogglingMenu.bind(this);
        this.updateWindowDimension = this.updateWindowDimension.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    onTogglingMenu(){
        this.setState({
           isOpen: !this.state.isOpen
        });
    }

    handleScroll(event){
        this.setState({
            scrollY: window.scrollY
        });
    }

    updateWindowDimension(){
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    componentDidMount() {
        this.updateWindowDimension();
        window.addEventListener('resize', this.updateWindowDimension);
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <div className="grid-container add-fade-in">
                    <header className="header-container">
                        <div className="navigation-container">
                            <div className="nav-brand-toggle">
                                <div className="wed-logo">
                                    <span className="title">Mila <i className="fas fa-heart"/> Zaki</span>
                                    <span className="subtitle">Wedding</span>
                                </div>
                                <span className="nav-toggle" onClick={this.onTogglingMenu}>
                                <i className="fas fa-bars"/>
                            </span>
                            </div>
                            <ul className={"nav-menu" + (this.state.isOpen ? "" : " collapsed")}>
                                <li className="nav-link"><a href="#">Home</a></li>
                                <li className="nav-link"><a href="#story">Story</a></li>
                                <li className="nav-link"><a href="#">Time</a></li>
                                <li className="nav-link"><a href="#location">Place</a></li>
                            </ul>
                        </div>
                    </header>
                    <div className="banner-container">
                        {/*<div className="slider-container">*/}
                            {/*Slider*/}
                        {/*</div>*/}
                        <div>
                            We are getting married in
                        </div>
                        <div className="countdown-container">
                            <div className="time-box">
                                <span className="days">365</span>
                                <span>Days</span>
                            </div>
                            <div className="time-box">
                                <span className="hours">24</span>
                                <span>Hours</span>
                            </div>
                            <div className="time-box">
                                <span className="minutes">00</span>
                                <span>Minutes</span>
                            </div>
                            <div className="time-box">
                                <span className="seconds">00</span>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.scrollY > 5 ? (
                        <div id="story" className="story-container add-fade-in">

                        </div>
                    ) : null
                }
                {
                    this.state.scrollY > (this.state.height - 5) ? (
                        <div id="location" className="location-container add-fade-in">

                        </div>
                    ) : null
                }
                <div className="schedule-container">

                </div>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
