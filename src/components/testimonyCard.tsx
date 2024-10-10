import "../styles/testimonyCard.css";

import React, { useState } from 'react';

interface TestimonyCardPropos {
    imageUrl: string;
    name: string;
    text: string;
}

export default function Testimony_card({ imageUrl, name, text } : TestimonyCardPropos) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    function handleClick() {
        if (isExpanded) {
            setIsExpanded(false);
        } else {
            setIsExpanded(true);
        }
    }

    return (
            <div className="col-md-8 col-lg-4 p-4 mb-md-5">
                <div className="testimonial-card">
                    <div className="profile-picture">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="img-fluid rounded-circle"
                        />
                    </div>
                    <h3 className="name mt-5 mt-md-3">{name}</h3>
                    <div className={isExpanded ? ('') : ('testimonial-text')}  aria-live="polite">
                        <p>{text}</p>
                    </div>
                    <div className="read-more-container">
                        <span className="read-more-text" onClick={handleClick} role="button">{isExpanded? "Leer menos" : "Leer más"}</span>
                    </div>
                </div>
            </div>
    );
}