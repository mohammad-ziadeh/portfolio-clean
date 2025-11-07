import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function GSAP() {
    const controls = useAnimation();





    const pinnedElementRef = useRef(null);
    const pinnedElementRef2 = useRef(null);
    const pinnedElementRef3 = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: pinnedElementRef.current,
                pin: true,
                start: "top 300px",
                end: "+=800",
                markers: false,
            });
            ScrollTrigger.create({
                trigger: pinnedElementRef2.current,
                pin: true,
                start: "top 300px",
                end: "+=700",
                markers: false,
            });
            ScrollTrigger.create({
                trigger: pinnedElementRef3.current,
                pin: true,
                start: "top 500px",
                end: "+=600",
                markers: false,
                onLeave: () => {
                    controls.start({ scale: 1200 });
                },
                onLeaveBack: () => {
                    controls.start({ scale: 1 });
                },
            });
        }, pinnedElementRef, pinnedElementRef2, pinnedElementRef3);

        return () => ctx.revert()
    }, [controls]);




    return (


        <div className="relative min-h-screen mt-100">

            <h2 className="text-2xl text-center text-white">Practicing GSAP: scroll triggers</h2>

            <div className="mt-150"></div>


            <div ref={pinnedElementRef} className="left-0 w-[48vw] lg:h-[500px] ml-[2vw] mr-[1vw] relative">
                <img src="https://picsum.photos/800/500?grayscale" alt="LMC Project Image 9" />
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -20,
                        height: "500px",
                        width: "100%",
                        backdropFilter: "blur(0.5px)",
                        WebkitBackdropFilter: "blur(0.5px)",
                        background: "linear-gradient(to top, rgba(0,0,0,6), transparent)",
                        zIndex: 9,
                    }}
                >
                </div>
            </div>

            <div className=" float-end w-[47vw] lg:h-[500px] mr-[2vw] ml-[1vw] -mt-[500px] relative" ref={pinnedElementRef2}>
                <img src="https://picsum.photos/800/500?grayscale" alt="LMC Project Image 8" />
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -20,
                        height: "500px",
                        width: "100%",
                        backdropFilter: "blur(0.5px)",
                        WebkitBackdropFilter: "blur(0.5px)",
                        background: "linear-gradient(to top, rgba(0,0,0,6), transparent)",
                        zIndex: 9,
                    }}
                >
                </div>
            </div>

            <div className="h-[150vh]  ">


            </div>

        </div>

    )
}







// let tl = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//         trigger: '.container',
//         pin: true, // pin the trigger element while active
//         start: 'top top', // when the top of the trigger hits the top of the viewport
//         end: '+=500', // end after scrolling 500px beyond the start
//         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         snap: {
//             snapTo: 'labels', // snap to the closest label in the timeline
//             duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//             delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//             ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
//         }
//     }
// });

// // add animations and labels to the timeline
// tl.addLabel('start')
//     .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
//     .addLabel('color')
//     .from('.box', { backgroundColor: '#28a92b' })
//     .addLabel('spin')
//     .to('.box', { rotation: 360 })
//     .addLabel('end');