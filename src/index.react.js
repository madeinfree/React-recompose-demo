import React from 'react'
import { render } from 'react-dom'
import {
  compose,
  withState,
  withHandlers
} from 'recompose'

const enhance = compose(
  withState('counter', 'updateCounter', 0),
  withHandlers({
    increatement: props => () => props.updateCounter(n => n + 1),
    decreatement: props => () => props.updateCounter(n => n - 1)
  })
)

const Index = enhance(({ counter, increatement, decreatement }) =>
  <div>
    <p>{ counter }</p>
    <button onClick={increatement}>++++</button>
    <button onClick={decreatement}>--</button>
  </div>
)

render(
  <Index />,
  document.getElementById('view')
)
