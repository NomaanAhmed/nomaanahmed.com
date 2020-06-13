import React, { Fragment } from 'react'
import styled from 'styled-components'
import Tooltip from '../components/tooltip'

export default ({ title = 'subheader'}) => {
  return (
    <Fragment>
        <div>
        <h1 class='subheader'>{title}
            <span class="superscript">
                <Tooltip message={'Hover for more details.'} position={'top'} styling={'Default'}>
                    {'\u24D8'}
                </Tooltip>
            </span>
        </h1>
        </div>
    </Fragment>
  )
}                