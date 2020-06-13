import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      body: "",
    };
  }

  handleSubjectChange = (e) => {
    this.setState({ subject: e.target.value });
  };

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var location = this.props.data.location;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id='contact'>
        <div className='row section-head'>
          <div className='two columns header-col'>
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <p className='lead'>{message}</p>
        </div>

        <div className='row'>
          <div className='eight columns'>
            <div>
              <label htmlFor='contactSubject'>Subject</label>
              <input
                type='text'
                defaultValue=''
                size='35'
                id='contactSubject'
                name='contactSubject'
                value={this.state.subject}
                onChange={this.handleSubjectChange}
              />
            </div>

            <div>
              <label htmlFor='contactMessage'>Message</label>
              <textarea
                cols='50'
                rows='15'
                id='contactMessage'
                name='contactMessage'
                value={this.state.body}
                onChange={this.handleBodyChange}
              ></textarea>
            </div>

            <div>
              <button className='submit'>
                <a
                  href={`mailto:${email}?subject=${this.state.subject}&body=${this.state.body}`}
                >
                  Submit
                </a>
              </button>
            </div>

            <div id='message-warning'> Error boy</div>
            <div id='message-success'>
              <i className='fa fa-check'></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className='four columns footer-widgets'>
            <div className='widget widget_contact'>
              <h4>Contact</h4>
              <p className='address'>
                {name}
                <br />
                {location}
                <br />
                {email}
              </p>
            </div>

            {/* <div className='widget widget_tweets'>
              <h4 className='widget-title'>Latest Tweets</h4>
              <ul id='twitter'>
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href='#'>http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href='#'>2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href='#'>http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href='#'>3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div> */}
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
