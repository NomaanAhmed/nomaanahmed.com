import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var location = this.props.data.location;
      var resumeDownload = this.props.data.resumedownload;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#repositories'>
                Projects
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
            <li className='resumeDownload'>
              <a
                href={resumeDownload}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-download'></i> Download Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>Hi, I'm {name}.</h1>
            <h3>{description}</h3>
            <hr />
            <ul className='social'>
              {networks}
              <li className='resumeDownload'>
                <a
                  // className='smoothscroll'
                  href={resumeDownload}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-download'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
