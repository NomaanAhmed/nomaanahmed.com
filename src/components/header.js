import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FiDownload } from "react-icons/fi";
import siteConfig from '../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303B;
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #25303B;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
` 

const HeaderLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  margin-top: 8px;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`
const ResumeLink = styled(({ className }) => (
  <a style={{textDecoration: 'none', marginTop: '10px'}} className={className} href='/documents/NomaanAhmed_Resume.pdf' target='_blank' 
    rel="noopener noreferrer">
        <span style={{marginRight: '5px'}}>{'Download Resume'}</span>
    <FiDownload size={32} style={{position: 'relative', bottom: '8px'}} />
  </a>
))`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

class Header extends React.Component {
  render () {
    const { headerLinks } = siteConfig

    return (
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLinkGroup>
            {headerLinks.map((headerLink, i) => (
              <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
                {headerLink.label}
              </HeaderLink>
            ))}
          </HeaderLinkGroup>
          <HeaderLinkGroup>
            <ResumeLink />
          </HeaderLinkGroup>
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header