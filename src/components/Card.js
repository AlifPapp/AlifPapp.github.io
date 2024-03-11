import React, { useEffect, useRef } from "react";
import "./Card.css";
import VanillaTilt from "vanilla-tilt";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Card = ({ title, description, imageSrc, websiteLink, buttonStyles }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const currentCardRef = cardRef.current; // Store current ref value

        VanillaTilt.init(currentCardRef, {
            max: 5,
            speed: 100,
            reverse: true,
            perspective: 700
        });

        return () => {
            currentCardRef.vanillaTilt.destroy(); // Use the stored ref value in cleanup function
        };
    }, []); // Run once on component mount

    return (
        <div className="card" color='red' ref={cardRef}>
            <div className="card-content">
                <img src={imageSrc} alt={title} className="w-[80%]" />
                <div className="card-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={websiteLink}
                    style={buttonStyles}
                >
                    website <FontAwesomeIcon icon={faCircleChevronRight} />
                </a>
            </div>
        </div>
    );
};

export default Card;
