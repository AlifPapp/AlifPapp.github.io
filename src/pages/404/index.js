import * as React from "react"

import Background from "../../../src/components/Background"

const PageNotFound = () => {
  return (
    <div >
      <Background />

      <div className="flex flex-col items-center justify-center min-h-screen ">
        <a className="font-exo2 text-4xl text-white">Page Not Found</a>
      </div>
    </div>
  )
}

export default PageNotFound

export const Head = () => <title>Not found</title>
