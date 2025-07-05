import "./App.css";
import { useEffect, useState } from "react";

interface Skill {
  languages: string[];
  frameworks: string[];
  tools: string[];
  databases: string[];
  others: string[];
}

interface Project {
  name: string;
  description: string;
  demo: string | null;
}

interface Certificate {
  name: string;
  fileName: string;
  detail: string;
}

interface Experience {
  type: string;
  jobPosition: string;
  company: string;
  start: string;
  end: string;
}

interface Education {
  start: string;
  end: string;
  universityName: string;
  degree: string;
  faculty: string;
  major: string;
}

interface UserData {
  fullName: string;
  jobPosition: string;
  introduction: string;
  github: string;
  email: string;
  phone: string;
  skills: Skill;
  project: Project[];
  certificate: Certificate[];
  experience: Experience[];
  education: Education[];
}

function App() {
  const [lang, setLang] = useState("en");
  const [data, setData] = useState<UserData | null>(null);
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    fetch(`./lang/${lang}.json`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [lang]);

  if (!data) return <div>Loading...</div>;

  const sentences = data.introduction
    .split(/\.+/)
    .map((s) => s.trim())
    .filter((s): s is string => s.length > 0);

  const getSkillIcon = (skill: string) => {
    const icons: Record<string, string> = {
      HTML: "/img/html-icon.svg",
      CSS: "/img/css-icon.svg",
      JavaScript: "/img/javascript-icon.svg",
      TypeScript: "/img/typescript-icon.svg",
      PHP: "/img/php-icon.svg",
      React: "/img/react-js-icon.svg",
      Angular: "/img/angular-icon.svg",
      "Node.js": "/img/node-js-icon.svg",
      Express: "/img/express-js-icon.svg",
      Git: "/img/git-icon.svg",
      "VS Code": "/img/visual-studio-code-icon.svg",
      Postman: "/img/postman-icon.svg",
      Figma: "/img/figma-icon.svg",
      MySQL: "/img/mysql-icon.svg",
      MongoDB: "/img/mongodb-icon.svg",
      ChatGPT: "/img/openai-icon.svg",
      "GitHub Copilot": "/img/github-copilot-icon.svg",
      "Tailwind CSS": "/img/tailwind-css-icon.svg",
      Bootstrap: "/img/bootstrap-5-logo-icon.svg",
      "REST API": "/img/rest-api-icon.svg",
      "Responsive Design": "/img/cross-platform-icon.svg",
    };
    return icons[skill] || null;
  };

  return (
    <>
      <header className="w-full flex justify-end gap-2 mb-4">
        <button className="btn btn-primary " onClick={() => setLang("en")}>
          ENG
        </button>
        {/* <button className="btn btn-primary" onClick={() => setLang("th")}>
          TH
        </button> */}
      </header>
      <main className="flex flex-wrap ">
        <div className="w-full lg:w-1/3 slide-up">
          <h1 className="text-3xl ">{data.fullName}</h1>
          <p className="text-xl mb-5">{data.jobPosition}</p>
          {sentences.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>
        <div className="w-full mt-5 lg:h-[calc(100vh-15rem)] lg:w-2/3 scrollbar-glass overflow-y-scroll ">
          <div className="skills p-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(data.skills).map(([category, items]) => (
                <div key={category} className=" card">
                  <h3 className="text-lg  capitalize mb-3">{category}</h3>
                  <div className="flex flex-wrap m-1">
                    {items.map((skill: any) => (
                      <div
                        key={skill}
                        className="flex flex-col items-center w-20 mb-2"
                      >
                        {getSkillIcon(skill) ? (
                          <img
                            src={getSkillIcon(skill)!}
                            alt={skill}
                            className="w-10 h-10 mb-1 hover:scale-110 transition-transform"
                          />
                        ) : (
                          <div></div>
                        )}
                        <span className="text-xs text-center">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="projects p-6">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.project.map((project, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm mb-4 ">{project.description}</p>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-[var(--color-highlights)] hover:underline"
                    >
                      View Demo →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="experience p-6 slide-up">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="relative border-l border-gray-700 ml-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-8 ml-6 relative">
                  <div className="absolute -left-9 top-10 w-6 h-6 rounded-full bg-[var(--color-experience)] border-2 border-[var(--color-border)]"></div>

                  <div className="card">
                    <h3 className="text-lg font-semibold">
                      {exp.jobPosition}{" "}
                      <span className="text-xs font-medium">({exp.type})</span>
                    </h3>
                    <p className="text-sm mb-1">{exp.company}</p>
                    <p className="text-xs ">
                      {exp.start} - {exp.end}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education p-6">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="relative border-l border-gray-700 ml-6">
              {data.education.map((edu, index) => (
                <div key={index} className="mb-8 ml-6 relative">
                  <div className="absolute -left-9 top-10 w-6 h-6 rounded-full bg-[var(--color-education)] border-2 border-[var(--color-border)]"></div>

                  <div className="card">
                    <p className="text-xs  mb-1">
                      {edu.start} - {edu.end}
                    </p>

                    <h1 className="text-lg font-semibold mb-1">
                      {edu.degree} - {edu.major}
                    </h1>

                    <p className="text-sm ">{edu.universityName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certificate p-6 ">
            <h2 className="text-2xl font-bold mb-6 text-white">Certificates</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.certificate.map((cert, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden shadow-lg cursor-pointer group border p-2 border-[var(--color-border)]"
                  onClick={() => setSelectedCertIndex(index)}
                >
                  <img
                    src={`/certificates/${cert.fileName}`}
                    alt={cert.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs p-2 text-center text-white truncate">
                    {cert.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal ดูรูป Certificate */}
      {selectedCertIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedCertIndex(null)}
        >
          <div
            className="relative max-w-3xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/certificates/${data.certificate[selectedCertIndex].fileName}`}
              alt={data.certificate[selectedCertIndex].name}
              className="max-w-full max-h-[70vh] "
            />
            <p className="mt-2 text-center text-white text-lg font-semibold">
              {data.certificate[selectedCertIndex].name}
            </p>
            <p className="text-center text-gray-300 text-sm mt-1">
              {data.certificate[selectedCertIndex].detail}
            </p>
          </div>
        </div>
      )}

      <footer>
        <ul className="contact grid grid-cols-1 md:grid-cols-3 gap-2 ">
          <li>
            github{" "}
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              {data.github}
            </a>
          </li>
          <li>
            email <a href={`mailto:${data.email}`}>{data.email}</a>
          </li>
          <li>
            phone <a href={`tel:${data.phone}`}>{data.phone}</a>
          </li>
        </ul>

        <br />
        <p>
          Built with{" "}
          <span className="font-medium">
            <a href="https://vite.dev/" target="_blank" rel="Vite">
              Vite
            </a>
          </span>{" "}
          &{" "}
          <span className="font-medium ">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="Tailwind CSS"
            >
              Tailwind CSS
            </a>
          </span>
        </p>
        <p className="mb-5">© 2025 Padtanakran Saroj</p>
      </footer>
    </>
  );
}

export default App;
