import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter  } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import Store from './Store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Provider store={ Store }><HashRouter><App /></HashRouter></Provider>, document.getElementById('root'));
registerServiceWorker()