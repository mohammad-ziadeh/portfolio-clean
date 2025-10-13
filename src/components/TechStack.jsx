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

export default function TechStack() {
    const techGroups = [
        {
            icons: [
                <FaReact />,
                <SiVite />,
                <SiJavascript />,
                <SiHtml5 />,
                <SiCss3 />,
                <FaBootstrap />,
            ],
        },
        {
            icons: [<FaPhp />, <SiMysql />, <SiLaravel />, <SiXampp />],
        },
        {
            icons: [<SiFlutter />, <SiDart />],
        },
        {
            icons: [<SiPostman />, <FaGithub />, <FaFigma />],
        },
        {
            icons: [<FaShopify />, <SiWebflow />, <SiStrapi />],
        },
    ];

    return (
        <ul
            className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
            style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 1rem" }}
        >
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icons={techGroups[0].icons}
                title="Frontend"
                description="Web interfaces & UI libraries"
            />
            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icons={techGroups[1].icons}
                title="Backend"
                description="Server-side programming & databases"
            />
            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"

                icon={<Lock className="h-4 w-4  text-neutral-400" />}
                icons={techGroups[2].icons}
                title="Mobile"
                description="Cross-platform mobile development"
            />
            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icons={techGroups[4].icons}
                title="No-Code & CMS"
                description="Webflow & Shopify for no-code sites, Strapi for headless CMS"
            />
            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icons={techGroups[3].icons}
                title="Tools & Workflow"
                description="Development & design tools"
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
                    inactiveZone={0.01}
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
                                        {icon}
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
