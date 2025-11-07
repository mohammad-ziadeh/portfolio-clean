"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Outlet } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Practices() {
    const url = window.location.pathname;

    const projects = [
        { title: 'GSAP', desc: 'Experimenting with GSAP ScrollTrigger', link: '/Tests/gsap', video: '/videos/gsap.mp4' },
        { title: 'Motion', desc: 'Experimenting with Motion useScroll', link: '/Tests/motion', video: '/videos/motion.mp4' },
        // { title: 'Home', desc: 'Go to home page', link: 'Tests/gsap', video: '/videos/motion.mp4' },
        // { title: 'Home', desc: 'Go to home page', link: 'Tests/gsap', video: '/videos/motion.mp4' },

    ];

    return (
        <>
            <h2 className="text-3xl text-center text-white mt-50 ">This page is for u to watch my experiments and practices for animation </h2>
            {url == "/Tests" ? <div></div>
                : <DotLottieReact
                    src="/lottie/Scroll_Down_Arrows.json"
                    loop
                    autoplay
                    style={{
                        width: '210px',
                        height: '120px',
                        margin: '0 auto',
                        marginTop: "20px",
                    }}
                />}
            <section className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 mt-30 ">
                {projects.map((project, i) => (
                    <div className="h-[30rem] w-full flex items-center justify-center " key={project.title + i}>
                        <PinContainer
                            title={project.title}
                            href={project.link}
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 xl:w-[25rem] xl xl:h-[18rem] 2xl:w-[30rem] 2xl:h-[20rem]  w-[30rem] h-[20rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                    {project.title}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500 ">
                                        {project.desc}
                                    </span>
                                </div>

                                <video src={project.video} muted loop autoPlay className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </section>


            <div className="border-b-1 mt-10 border-[#ffffff63]"></div>

            <Outlet />

        </>
    );
}