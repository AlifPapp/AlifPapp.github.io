import * as React from "react"
import Background from "../components/Background"

import icon from "../images/icon.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import "./index.css"

const IndexPage = () => {
  return (
    <main>
      <Background />

      <div className="flex flex-col text-center items-center justify-center min-h-screen">
        <div>
          <div className="sm:inline-block sm:align-middle">
            <img src={icon} alt="profile" className="ml-5 w-28 object-cover object-center border-2 border-solid border-white rounded-full"></img>
          </div>
          <div className="sm:inline-block sm:align-middle m-5 w-28 sm:w-0 sm:h-28 border border-solid border-white "></div>
          <div className="sm:inline-block sm:align-middle sm:mr-8">
            <a className="font-exo2 text-left text-2xl text-white">Alif Papp</a>
          </div>
        </div>
        <div className="sm:mt-10 flex flex-col sm:flex-row items-center text-gray-400">
          <div className="my-8 sm:my-0 sm:mx-8 text-3xl hover:text-gray-200">
            <a href="/discord" target="blank" aria-label="Discord"><FontAwesomeIcon icon={faDiscord} /></a>
          </div>
          <div className="my-8 sm:my-0 sm:mx-8 text-3xl hover:text-gray-200">
            <a href="/github" target="blank" aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <div className="my-8 sm:my-0 sm:mx-8 text-3xl hover:text-gray-200">
            <a href="/instagram" target="blank" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <div className="my-8 sm:my-0 sm:mx-8 text-3xl hover:text-gray-200">
            <a href="/youtube" target="blank" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Alif Papp</title>
