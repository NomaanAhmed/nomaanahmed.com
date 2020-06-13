import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaAlignRight,
} from 'react-icons/fa'
import siteConfig from '../../data/siteConfig'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper'
import Section from '../components/section'
import SkillCategory from '../components/skill-category'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'
import Subheader from '../components/subheader'
import Education from '../components/education'
import subheader from '../components/subheader'

const Separator = styled.hr`
  margin-bottom: 20px;
`

class Home extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title={"Hi. I'm Nomaan Ahmed."}
          keywords={[
            'nomaan',
            'ahmed',
            'nomaanahmed',
            'gatsby',
            'gatsbyjs',
            'react',
            'curriculum',
          ]}
        />

        <Hero
          heroImg={siteConfig.siteCover}
          title={"Hi. I'm"}
          title2={'Nomaan.'}
        />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src="/../images/avatar.png"
                  alt="user avatar"
                />
                <div className="social">
                  {siteConfig.social.github && (
                    <a
                      className="social-link github"
                      href={siteConfig.social.github}
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={siteConfig.social.linkedin}
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.twitter && (
                    <a
                      className="social-link twitter"
                      href={siteConfig.social.twitter}
                    >
                      <FaTwitter className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${siteConfig.social.email}`}
                    >
                      <FaEnvelope className="social-icon" size="32" />
                    </a>
                  )}
                </div>
                <span className="heading4">Currently in: Toronto, ON</span>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={8}>
                <Section title="About" text={siteConfig.authorDescription} />
              </Col>
            </Row>
            <Separator />
            <Row>
              <Subheader title={'Technical Experience'} />
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <SkillCategory
                  title="Object-Oriented"
                  skills={siteConfig.oopSkills}
                />
              </Col>
              <Col xs={4} sm={4}>
                <SkillCategory
                  title="Mobile"
                  skills={siteConfig.mobileSkills}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <SkillCategory title="Web" skills={siteConfig.webSkills} />
              </Col>
              <Col xs={4} sm={4}>
                <SkillCategory
                  title="Other (SCM, DBMS,  ...)"
                  skills={siteConfig.otherSkills}
                />
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Wrapper>
          <Education />
        </Wrapper>
        <Wrapper>
          <Timeline />
        </Wrapper>
        <Wrapper>
          <Section title={'Projects'} />
          <h3>
            Currently working on:{' '}
            <a href="https://github.com/signalapp/Signal-Android">
              Signal Messenger for Android
            </a>
          </h3>
          <Separator />
          <Repositories />
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
  }
  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }
  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }
  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .social-link {
    padding: 8px;
    color: #555;
  }
  a.social-link.twitter:hover {
    color: #1da1f2;
  }
  a.social-link.github:hover {
    color: #24292e;
  }
  a.social-link.linkedin:hover {
    color: #0077b5;
  }
  a.social-link.email:hover {
    color: #c23a2b;
  }
`
