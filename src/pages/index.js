import * as React from "react"
import { useRef } from "react";

import Background from "../components/Background"
import ToggleButton from "../components/ThemeButton"
import Card from "../components/Card"

import icon from "../images/icon.png"
import counter_icon from "../images/counter_icon.png"
import ffbd55 from "../images/#ffbd55.png"
import b2d9ff from "../images/#b2d9ff.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import "./index.css"

const IndexPage = () => {
  const cardsContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const cards = cardsContainerRef.current.querySelectorAll(".card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className="md:snap-y md:snap-mandatory h-screen overflow-scroll">
      <Background></Background>
      <ToggleButton></ToggleButton>

      {/* PfP, Name, Socials */}
      <section className="snap-always snap-start flex flex-col text-center items-center justify-center min-h-screen">
        <div>
          <div className="sm:inline-block sm:align-middle">
            <img src={icon} alt="profile" className="pfp ml-5 w-28 object-cover object-center border-2 border-solid border-white rounded-full"></img>
          </div>
          <div className="sm:inline-block sm:align-middle m-5 w-28 sm:w-0 sm:h-28 border border-solid border-white"></div>
          <div className="sm:inline-block sm:align-middle sm:mr-8">
            <a className="font-exo2 text-left text-2xl text-white">Alif Papp</a>
          </div>
        </div>

        <div className="sm:mt-10 flex flex-col sm:flex-row items-center text-gray-200 dark:text-gray-400">
          <div className="my-8 sm:my-0 sm:mx-8 text-3xl hover:text-gray-300 dark:hover:text-gray-200">
            <a href="https://www.linkedin.com/in/alif-papp/" target="blank" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <div className="my-8 sm:my-0 sm:mx-8 text-3xl hover:text-gray-300 dark:hover:text-gray-200">
            <a href="https://github.com/AlifPapp/" target="blank" aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <div className="my-8 sm:my-0 sm:mx-8 text-3xl hover:text-gray-300 dark:hover:text-gray-200">
            <a href="https://www.youtube.com/@alif_papp/" target="blank" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="snap-always snap-start flex flex-col items-center justify-center min-h-screen py-24">
        <div className="flex flex-col w-full max-w-2xl px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-neutral-200">
            <span>Projects</span>
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-200 dark:text-gray-400">
            <span>Here are some of the projects I have worked on.</span>
          </p>
        </div>
        <div className="mt-4 md:mt-8 p-24">
          <div className="cards grid grid-cols-1 md:grid-cols-3 gap-6" ref={cardsContainerRef} onMouseMove={handleMouseMove}> {/* md:grid-cols-3; change when theres at least 3*/}

            <Card
              title="Counter"
              description="Count and collect emojis with Counter. As you count higher, earn coins to unlock new fonts."
              imageSrc={counter_icon}
              websiteLink="https://counterbot.xyz/"
              buttonStyles={{
                "--CardButtonColor": "rgb(79 70 229)",
                "--CardButtonHoverColor": "rgb(49 40 199)",
                "--CardButtonTextColor": "white",
                "--CardButtonUnderlineColor": "white"
              }}
            />

            <Card
              title="Placeholder"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageSrc={ffbd55}
              websiteLink="https://alifpapp.me/"
              buttonStyles={{
                "--CardButtonColor": "rgb(255 189 85)",
                "--CardButtonHoverColor": "rgb(225 159 55)",
                "--CardButtonTextColor": "black",
                "--CardButtonUnderlineColor": "black"
              }}
            />

            <Card
              title="Placeholder 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageSrc={b2d9ff}
              websiteLink="https://alifpapp.me/"
              buttonStyles={{
                "--CardButtonColor": "rgb(178, 217, 255)",
                "--CardButtonHoverColor": "rgb(148, 187, 225)",
                "--CardButtonTextColor": "#0E1525",
                "--CardButtonUnderlineColor": "#0E1525"
              }}
            />

          </div>
        </div>
      </section>


    </div>
  )
}

export default IndexPage

export const Head = () => <title>Alif Papp</title>
