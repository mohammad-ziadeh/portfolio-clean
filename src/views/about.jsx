import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Top from "../components/about/top"

const About = () => {


    return (
        <div className="mt-90">
            {/* <h2 className="text-4xl text-center text-white">Soon....</h2> */}
            <h2 className="text-4xl text-center text-white">Hello there</h2>
            <br />
            <p className="text-2xl text-center text-white">Glad you’re here — I guess you’d like to know a bit more about me.</p>
            <p className="text-2xl text-center text-white">If yes then start scrolling </p>
            <DotLottieReact
                src="/lottie/Scroll_Down_Arrows.json"
                loop
                autoplay
                style={{
                    width: '210px',
                    height: '120px',
                    margin: '0 auto',
                    marginTop: "40px",
                    marginBottom: "50vh"
                }}
            />
            <Top />
        </div>
    );
};

export default About;
