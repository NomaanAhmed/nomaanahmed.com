import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-awesome-styled-grid'
import Section from '../components/section'

const Separator = styled.hr`
  margin-bottom: 16px;
  margin-left: 8%;
`
export default ({ title = 'Education', text = '' }) => {
  return (
    <Fragment>
      <Section title='Education & Related Courses'/>
        <Row>
        <Col xs={4} sm={4}>
            <div>
              <img
                className='section-icon'
                src='/../images/concordia.png'
                alt='Concordia Logo'
              />
              <span className='heading2'>Concordia University</span> 
              <span className='heading3'>Bachelor's of Engineering</span>
              <span className='heading4 hideIfMobile'>Major Software Engineering</span>
              <span className='heading4 hideIfNonMobile'>Major Software Eng.</span>
            </div>
        </Col>
        <Col xs={4} sm={4}>
            <div style={{textAlign: 'right'}}>
              <span className='heading3'>Expected: May 2019</span>
            </div>
        </Col>
      </Row>
      <Row>
        <p className='heading4' style={{marginLeft: '12%'}}>Currently enrolled at the Gina Cody School of
          Engineering & Computer Science at Concordia University.</p>
      </Row>
      <Separator />
      <Row>
        <div style={{marginLeft: '10%'}}>
          <ul style={{display: 'inline-block', verticalAlign: 'middle'}}>
            <li>Big Data Analytics & Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>Computer Graphics</li>
            <li>Web Applications</li>
            <li>System Hardware</li>
            <li>Operating Systems</li>
          </ul>
          <ul style={{display: 'inline-block', verticalAlign: 'middle'}}>
            <li>Principles of Programming Languages</li>
            <li>Software Architecture I & II</li>
            <li>Software Process</li>
            <li>Control Systems Engineering</li>
            <li>Discrete Math for Computer Science</li>
            <li>Data Structures & Algorithms</li>
          </ul>
          </div>
      </Row>
  </Fragment>
  )
}