import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverWeb: false,
      hoverOOP: false,
      hoverMobile: false,
      hoverOther: false,
    };
  }

  toggleHover = (type) => {
    switch (type) {
      case "web":
        this.setState((prevState) => ({
          hoverWeb: !prevState.hoverWeb,
        }));
      case "oop":
        this.setState((prevState) => ({
          hoverOOP: !prevState.hoverOOP,
        }));
      case "mobile":
        this.setState((prevState) => ({
          hoverMobile: !prevState.hoverMobile,
        }));
      case "other":
        this.setState((prevState) => ({
          hoverOther: !prevState.hoverOther,
        }));
    }
  };

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className='info'>
              {education.degree} <span>&bull;</span>
              <em className='date'>{education.graduated}</em>
            </p>
            <p>{education.description}</p>
            <div>
              <h4>Related Courses</h4>
              <ul className='relatedCourses'>
                {education.relatedCourses.map((course) => {
                  return <li>{course}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      });

      var work = this.props.data.work.map(function (work) {
        const workDescription = work.description.map((line) => <li>{line}</li>);

        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <span>{work.tagline}</span>
            <p className='info'>
              {work.title}
              <span>&bull;</span> <em className='date'>{work.years}</em>
            </p>
            <ul>{workDescription}</ul>
          </div>
        );
      });

      var webSkills = this.props.data.skills.web.map((skills) => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level + "%" }} className={className}>
              {this.state.hoverWeb && (
                <span className='bar-text hideIfMobile'>{skills.details}</span>
              )}
            </span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var oopSkills = this.props.data.skills.oop.map((skills) => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level + "%" }} className={className}>
              {" "}
              {this.state.hoverOOP && (
                <span className='bar-text hideIfMobile'>{skills.details}</span>
              )}
            </span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var mobileSkills = this.props.data.skills.mobile.map((skills) => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level + "%" }} className={className}>
              {this.state.hoverMobile && (
                <span className='bar-text hideIfMobile'>{skills.details}</span>
              )}
            </span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var otherSkills = this.props.data.skills.other.map((skills) => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level + "%" }} className={className}>
              {" "}
              {this.state.hoverOther && (
                <span className='bar-text hideIfMobile'>{skills.details}</span>
              )}
            </span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id='resume'>
        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{work}</div>
        </div>

        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>{education}</div>
            </div>
          </div>
        </div>

        <div className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className='nine columns main-col skillContainer'>
            <Tabs>
              <div className='twelve columns'>
                <TabList>
                  <Tab>Web</Tab>
                  <Tab>Object-Oriented</Tab>
                  <Tab>Mobile</Tab>
                  <Tab>Other</Tab>
                </TabList>
              </div>
              <div>
                <TabPanel>
                  <div
                    className='bars'
                    onMouseEnter={() => this.toggleHover("web")}
                    onMouseLeave={() => this.toggleHover("web")}
                  >
                    <ul className='skills'>{webSkills}</ul>
                  </div>
                </TabPanel>
              </div>
              <div>
                <TabPanel>
                  <div
                    className='bars'
                    onMouseEnter={() => this.toggleHover("oop")}
                    onMouseLeave={() => this.toggleHover("oop")}
                  >
                    <ul className='skills'>{oopSkills}</ul>
                  </div>
                </TabPanel>
              </div>
              <div>
                <TabPanel>
                  <div
                    className='bars'
                    onMouseEnter={() => this.toggleHover("mobile")}
                    onMouseLeave={() => this.toggleHover("mobile")}
                  >
                    <ul className='skills'>{mobileSkills}</ul>
                  </div>
                </TabPanel>
              </div>
              <div>
                <TabPanel>
                  <div
                    className='bars'
                    onMouseEnter={() => this.toggleHover("other")}
                    onMouseLeave={() => this.toggleHover("other")}
                  >
                    <ul className='skills'>{otherSkills}</ul>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
