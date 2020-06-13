import React from "react";
import jsonFetch from "simple-json-fetch";
// import Loader from "./loader";

const endpoint = `https://api.github.com/users/nomaanahmed/repos?direction=desc`;

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      status: "loading",
    };
  }
  async componentDidMount() {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: "ready" });
    }
  }
  render() {
    const { status } = this.state;
    return (
      <section id='repositories'>
        <div className='row repositories_float'>
          <div className='three columns header-col'>
            <h1>
              <span>Projects</span>
            </h1>
          </div>

          <div className='columns main-col repositories'>
            {status === "ready" && this.state.repos && (
              <div className='repositories__content nine columns main-col'>
                {this.state.repos.map((repo) => (
                  <React.Fragment key={repo.name}>
                    <div>
                      <div className='repositories__repo'>
                        <a
                          className='repositories__repo-link'
                          href={repo.html_url}
                        >
                          <span className='repositories__repo-lang hideIfMobile'>
                            {"<"}
                            {repo.language}
                            {">"}
                          </span>
                          <strong>{repo.name}</strong>
                        </a>
                        <div>{repo.description}</div>
                        {/* <div className="repositories__repo-date">
                      Updated: {new Date(repo.updated_at).toUTCString()}
                    </div> */}
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Repositories;
