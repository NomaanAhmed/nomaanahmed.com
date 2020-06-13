import React from 'react'
import styled from 'styled-components'

const Default = styled.div`
  background: rgba(37, 48, 60, 0.85);
  border-radius: 5px;
  border: 1px solid #25303B;
  color: #fff;
  font-size: 1rem;
  line-height: 1.4;
  padding: 0.75em;
  text-align: center;
`

const HeroTooltip = styled.div`
  background: rgba(37, 48, 60, 0.85);
  border-radius: 5px;
  border: 1px solid #25303B;
  color: #fff;
  font-size: 1rem;
  line-height: 1.4;
  padding: 0.75em;
  text-align: center;
  font-family: 'Times New Roman', 'Times', 'serif';
  font-style: italic;
`

class Tooltip extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        displayTooltip: false
      }
      this.hideTooltip = this.hideTooltip.bind(this)
      this.showTooltip = this.showTooltip.bind(this)
    }
    
    hideTooltip () {
      this.setState({displayTooltip: false})
      
    }
    showTooltip () {
      this.setState({displayTooltip: true})
    }
  
    render() {
    const { message, position, styling } = this.props
        return (
          <span className='tooltip'
              onMouseLeave={this.hideTooltip}
            >
            {this.state.displayTooltip &&
            <div className={`tooltip-bubble tooltip-${position}`}>
              {styling === 'Default' ? <Default>{message}</Default> 
                      : styling === 'Hero' ? <HeroTooltip>{message}</HeroTooltip>
                      : <Default>{message}</Default> }
            </div>
            }
            {styling === 'Default' ?  <span className='tooltip-trigger-wide' 
                                            onMouseOver={this.showTooltip}> 
                                        {this.props.children}
                                      </span>
                    : styling === 'Hero' ?  <span className='tooltip-trigger' 
                                                  onMouseOver={this.showTooltip}>
                                              {this.props.children}
                                            </span> 
                    : <span className='tooltip-trigger-wide' 
                            onMouseOver={this.showTooltip}> 
                        {this.props.children}
                      </span> }
          </span>
      )
    }
  }

  export default Tooltip

  // if (styling == 'inherit') {
  //   return (
  //       <span className='tooltip'
  //           onMouseLeave={this.hideTooltip}
  //         >
  //         {this.state.displayTooltip &&
  //         <div className={`tooltip-bubble tooltip-${position}`}>
  //           <div className='tooltip-message'>{message}</div>
  //         </div>
  //         }
  //         <span 
  //           className='tooltip-trigger'
  //           onMouseOver={this.showTooltip}
  //           >
  //           {this.props.children}
  //         </span>
  //       </span>
  //   )