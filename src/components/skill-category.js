import React, { Fragment } from 'react'
import SkillBarSet from './skillbar-set'

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
        <SkillBarSet hue="210" saturation="40" skills={skills} />
        <br />
    </Fragment>
  )
}