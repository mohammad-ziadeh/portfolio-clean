"use client";
import { FaReact, FaBootstrap, FaPhp, FaGithub, FaFigma, FaShopify } from "react-icons/fa";
import {
    SiVite,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiMysql,
    SiLaravel,
    SiFlutter,
    SiDart,
    SiPostman,
    SiXampp,
    SiWebflow,
    SiStrapi,
} from "react-icons/si";
import { Lock } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function TechStack() {
    const techGroups = [
        {
            icons: [
                { id: 1, name: "React", icon: <FaReact /> },
                { id: 2, name: "Vite", icon: <SiVite /> },
                { id: 3, name: "JavaScript", icon: <SiJavascript /> },
                { id: 4, name: "HTML5", icon: <SiHtml5 /> },
                { id: 5, name: "CSS3", icon: <SiCss3 /> },
                { id: 6, name: "Bootstrap", icon: <FaBootstrap /> },
            ],
        },
        {
            icons: [
                { id: 7, name: "PHP", icon: <FaPhp /> },
                { id: 8, name: "MySQL", icon: <SiMysql /> },
                { id: 9, name: "Laravel", icon: <SiLaravel /> },
                { id: 10, name: "XAMPP", icon: <SiXampp /> },
            ],
        },
        {
            icons: [
                { id: 11, name: "Flutter", icon: <SiFlutter /> },
                { id: 12, name: "Dart", icon: <SiDart /> },
            ],
        },
        {
            icons: [
                { id: 13, name: "Postman", icon: <SiPostman /> },
                { id: 14, name: "GitHub", icon: <FaGithub /> },
                { id: 15, name: "Figma", icon: <FaFigma /> },
            ],
        },
        {
            icons: [
                { id: 16, name: "Shopify", icon: <FaShopify /> },
                { id: 17, name: "Webflow", icon: <SiWebflow /> },
                { id: 18, name: "Strapi", icon: <SiStrapi /> },
            ],
        },
    ];


    return (
        <ul
            className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-11 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
            style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 1rem" }}
        >
            <GridItem
                area="md:[grid-area:1/7/2/12] xl:[grid-area:2/1/3/5]"

                icons={techGroups[4].icons}
                title="No-Code & CMS"
                description="Webflow & Shopify for no-code sites, Strapi for headless CMS"
            />
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icons={techGroups[3].icons}
                title="Tools & Workflow"
                description="Development & design tools"
            />
            <GridItem
                area="md:[grid-area:3/1/4/12] xl:[grid-area:2/8/3/12]"

                icon={<Lock className="h-4 w-4  text-neutral-400" />}
                icons={techGroups[2].icons}
                title="Mobile"
                description="Cross-platform mobile development"
            />
            <GridItem
                area="md:[grid-area:2/7/3/12] xl:[grid-area:1/8/2/12]"

                icons={techGroups[0].icons}
                title="Frontend"
                description="Web interfaces & UI libraries"
            />
            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icons={techGroups[1].icons}
                title="Backend"
                description="Server-side programming & databases"
            />


        </ul>
    );
}

const GridItem = ({ area, icons, title, description }) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.5}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div>
                            <ul className="flex flex-wrap gap-2">

                                {icons.map((icon, index) => (

                                    <li
                                        key={index}
                                        className="flex items-center justify-center rounded-lg border border-gray-600 text-neutral-400 p-2 md:p-3 text-1xl md:text-2xl"
                                    >
                                        <AnimatedTooltip items={[icon]} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
