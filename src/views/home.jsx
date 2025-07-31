import PartAbout from "../components/partAbout";
import PartProjects from "../components/partProjects";
import About from "../components/about";
import Contact from "../components/partContact";

export default function Home() {
  return (
    <div>
      <style>
        {`
    @media (max-width: 840px) {
      .project-title {
        margin-top: 80vh !important;
      }
    }
  `}
      </style>
      <PartAbout />
      <div>
        <About />
      </div>
      <h1 className="project-title" style={{ textAlign: "center", marginTop: "300px" }}>
        My Latest Projects
      </h1>

      <div style={{ marginTop: "150px" }}>
        <PartProjects />
      </div>

      <Contact />
    </div>
  );
}
