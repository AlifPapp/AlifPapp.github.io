import React, { useEffect } from "react";

var link = "https://github.com/AlifPapp/";

const Link = () => {
    // Redirect to support link
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.location.replace(link);
        }
    }, []);

    return (
        <div>
            <p>If auto-redirect fails, click the link below.</p>
            <a href={link}>link</a>
        </div>
    );
};

export default Link;

export const Head = () => <title>Github</title>;
