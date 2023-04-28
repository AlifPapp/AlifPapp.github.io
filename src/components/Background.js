import * as React from "react"
import Helmet from 'react-helmet';

import "../../static/background/background.css"

const Background = () => (
  <background>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="clouds"></div>
    <div class="particles" id="particles-js"></div>
    <Helmet>
      <script defer src="/background/particles.js" type="text/javascript" />
    </Helmet>
  </background>
)

export default Background
