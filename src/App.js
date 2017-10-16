import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-static'
import { injectGlobal } from 'styled-components'

import Jsonld from './json_ld.js'
import Home2018 from './components/2018/Home'

injectGlobal`
* {
  font-family: "Noto Sans Japanese";
}

body {
  margin: 0;
  padding: 0;
}
`


export default () => (
  <Router>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home2018} />
        <Redirect to="/" />
      </Switch>
      <Jsonld />
    </div>
  </Router>
)
