import * as React from "react"
import "../../static/background/background.css"

const Background = () => (
  <background className="bg-black">
    {/* day */}
    <div className="sky dark:invisible"></div>

    {/* night */}
    <div className="stars invisible dark:visible"></div>
    <div className="twinkling invisible dark:visible"></div>
    <div className="clouds invert dark:invert-0"></div>
    
    {/* bad for performance
    import Helmet from 'react-helmet';
    <div class="particles invisible dark:visible" id="particles-js"></div>
    <Helmet>
      <script defer src="/particles.js" type="text/javascript" />
    </Helmet>
    */}
  </background>
)

export default Background
