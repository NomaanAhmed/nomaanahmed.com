import React from "react";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false,
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ displayTooltip: false });
  }
  showTooltip() {
    this.setState({ displayTooltip: true });
  }

  render() {
    const { message, position, styling } = this.props;
    return (
      <span className='tooltip hideIfMobile' onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            {styling === "Default" ? (
              <div className={`defaultTooltip tooltip-box-${position}`}>
                {message}
              </div>
            ) : styling === "Hero" ? (
              <div className={`heroTooltip tooltip-box-${position}`}>
                {message}
              </div>
            ) : (
              <div className={`defaultTooltip tooltip-box-${position}`}>
                {message}
              </div>
            )}
          </div>
        )}
        {styling === "Default" ? (
          <span className='tooltip-trigger-wide' onMouseOver={this.showTooltip}>
            {this.props.children}
          </span>
        ) : styling === "Hero" ? (
          <span className='tooltip-trigger' onMouseOver={this.showTooltip}>
            {this.props.children}
          </span>
        ) : (
          <span className='tooltip-trigger-wide' onMouseOver={this.showTooltip}>
            {this.props.children}
          </span>
        )}
      </span>
    );
  }
}

export default Tooltip;
