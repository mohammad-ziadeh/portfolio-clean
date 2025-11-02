"use client"
import React, { useState } from "react";
import ProjectLMC from "../components/projects/projectLMC";
import ProjectFiba from "../components/projects/projectFiba";
import BubbleMenu from "@/components/ui/BubbleMenu";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("projects");

    const items = [
        {
            label: "LMC",
            ariaLabel: "LMC",
            rotation: -8,
            hoverStyles: { bgColor: "#3D0000", textColor: "#ffffff" },
            selectedStyles: activeTab === "LMC" ? { bgColor: "#3D0000", textColor: "#ffffff" } : { bgColor: "#fff", textColor: "#000" },
            onClick: () => setActiveTab("LMC"),
        },
        {
            label: "3X3",
            ariaLabel: "3X3",
            rotation: 0,
            hoverStyles: { bgColor: "#3D0000", textColor: "#ffffff" },
            selectedStyles: activeTab === "3X3" ? { bgColor: "#3D0000", textColor: "#ffffff" } : { bgColor: "#fff", textColor: "#000" },

            onClick: () => setActiveTab("3X3"),
        },
        {
            label: "soon1",
            ariaLabel: "Soon1",
            rotation: 8,
            hoverStyles: { bgColor: "#3D0000", textColor: "#ffffff" },
            selectedStyles: activeTab === "soon1" ? { bgColor: "#3D0000", textColor: "#ffffff" } : { bgColor: "#fff", textColor: "#000" },

            onClick: () => setActiveTab("soon1"),
        },
        {
            label: "soon2",
            ariaLabel: "Soon2",
            rotation: 0,
            hoverStyles: { bgColor: "#3D0000", textColor: "#ffffff" },
            selectedStyles: activeTab === "soon2" ? { bgColor: "#3D0000", textColor: "#ffffff" } : { bgColor: "#fff", textColor: "#000" },
            onClick: () => setActiveTab("soon2"),
        },
        {
            label: "soon3",
            ariaLabel: "Soon3",
            rotation: 0,
            hoverStyles: { bgColor: "#3D0000", textColor: "#ffffff" },
            selectedStyles: activeTab === "soon3" ? { bgColor: "#3D0000", textColor: "#ffffff" } : { bgColor: "#fff", textColor: "#000" },
            onClick: () => setActiveTab("soon3"),
        },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "LMC":
                return <ProjectLMC />;
            case "3X3":
                return <ProjectFiba />;
            case "soon1":
                return <ProjectLMC />;
            case "soon2":
                return <ProjectLMC />; 
            case "soon3":
                return <ProjectLMC />;
            default :
                return <ProjectLMC />;
        }
    };

    return (
        <div>
            <BubbleMenu
                items={items}
                menuBg="#ffffff"
                menuContentColor="#111111"
                useFixedPosition={false}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.3}
            />

            <div className="mt-10 z-9">{renderContent()}</div>
            <div style={{ height: "50vh" }} />
        </div>
    );
};

export default Projects;
