import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function StudyTimeline() {
  const data = [
    {
      month: "",
      title: "2022",
      content: (
        <div className="text-neutral-200">
          <p className="mb-4 text-xl font-normal">
            Completed the two-year English Access Microscholarship from the U.S.
            Embassy, strengthening communication skills and academic
            proficiency.
          </p>
        </div>
      ),
    },
    {
      month: "",
      title: "2023",
      content: (
        <div className="text-neutral-200">
          <p className="mb-4 text-xl font-normal">
            Participated in various certifications and programs:
          </p>
          <ul className="list-disc ml-5 text-lg">
            <li>National Geographic LIFE Level 5B – March 2023</li>
            <li>English Language Olympics (ELO 2022) – May 2022</li>
          </ul>
        </div>
      ),
    },
    {
      month: "MAY",
      title: "2025",
      content: (
        <div className="text-neutral-200">
          <p className="mb-4 text-xl font-normal">
            Completed a full-stack, 6-month cross-platform development training
            at Orange Coding Academy (OCA), focusing on React.js, Laravel,
            Flutter, Dart, and MySQL. Built real-world projects with clean UI/UX
            and agile practices.
          </p>
        </div>
      ),
    },
    {
      month: "JUNE",
      title: "2025",
      content: (
        <div className="text-neutral-200">
          <p className="mb-4 text-xl font-normal">
            Built and launched my first major projects:{" "}
            <strong>3x3 Basketball App</strong> and{" "}
            <strong>LMC – Learning Management Center</strong>, demonstrating
            skills in Flutter, Laravel, React.js, and MySQL.
          </p>
        </div>
      ),
    },


  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
