import React from 'react'
import Tooltip from '../components/tooltip'

class SkillBarSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };       
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (      
      <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>        
        <ul className="skills">
          {skills.map((skill, index) =>
              <li key={skill.name} 
                  style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}>
                                  <Tooltip message={skill.details} position={'right'} styling={'Default'}>

                  <p className='skillItem'>  
                  <div>
                    {skill.name}
                    <span>
                      {skill.level === 25 ? 'Decent' 
                        : skill.level === 50 ? 'Good'
                        : skill.level === 75 ? 'Great'
                        : skill.level === 100 ? 'Awesome'
                        : 'unspecified'}
                    </span>
                    </div>
                  </p>
                  </Tooltip>
              </li>
          )}
        </ul>
      </div>
    )
  }
}

export default SkillBarSet