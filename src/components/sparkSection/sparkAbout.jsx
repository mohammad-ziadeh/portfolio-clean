"use client";
import "aos/dist/aos.css";
import About from "./about";
import { SparklesCore } from "../ui/sparkles";


export default function SparkAbout() {

    return (
        <div className=" relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md" >
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={30}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div style={{ height: "15vh" }}></div>
            <h1 data-aos="fade-up" className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                Build great products
            </h1>
            <div style={{ height: "200px" }}></div>
            <About />
        </div>
    );
}







