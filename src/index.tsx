import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'mobx-react/batchingForReactDom'
import App from './App'
import './styles/sass/style.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
