import React, { Component } from "react";
import profilepic from "../static/images/profilepic.jpg";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var location = this.props.data.location;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns profile-pic-container'>
            <img
              className='profile-pic'
              src={profilepic}
              alt='Nomaan Ahmed Profile Pic'
            />
          </div>
          <div className='nine columns main-col'>
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address'>
                  <span>{name}</span>
                  <span>
                    <br />
                    {location}
                  </span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a
                    href={resumeDownload}
                    target='_blank'
                    className='button'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-download'></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
