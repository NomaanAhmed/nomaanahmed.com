import React from "react";
import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import siteConfig from '../../data/siteConfig'
import Loader from './loader'

const endpoint =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?direction=desc`

  const Separator = styled.hr`
  margin-bottom: 16px;
`

class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: 'loading'
    }
  }
  async componentDidMount () {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' })
    }
  }
  render () {
    const { status } = this.state
    return (
      <div className={this.props.className}>
        <h3>Here are some of my repositories on GitHub:</h3>
        {status === "loading" && <div className='repositories__loader'><Loader /></div>}
        {status === "ready" &&
          this.state.repos && (
            <React.Fragment>
              <div className="repositories__content">
                {this.state.repos.map(repo => (
                  <React.Fragment key={repo.name}>
                  <div>
                    <div className="repositories__repo">
                      <a className='repositories__repo-link' href={repo.html_url}> 
                      <span className="repositories__repo-lang hideIfMobile">{'<'}{repo.language}{'>'}</span>
                        <strong>{repo.name}</strong>
                      </a>
                      <div>{repo.description}</div>
                      {/* <div className="repositories__repo-date">
                        Updated: {new Date(repo.updated_at).toUTCString()}
                      </div> */}
                    </div>
                  </div>
                    <Separator />
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default styled(Repositories)`

  .repositories__content {
    margin-bottom: 40px;
  }
  .repositories__repo {
    position: relative;
  }
  .repositories__repo-link {
    text-decoration: none;
    color: #25303B;
  }
  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }
  .repositories__repo-lang {
    float: right;
  }

  .repositories__loader {
    display: flex;
  }
  hr {
    margin-top: 16px;
  }
`