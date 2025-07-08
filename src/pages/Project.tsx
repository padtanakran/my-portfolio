import { useParams, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

// ใช้ glob preload ทุกไฟล์ใน projects
const pages = import.meta.glob("../components/projects/*.tsx");

function Project() {
  const { name } = useParams();

  if (!name) {
    return (
      <div>
        <header className="text-right">
          <Link to={`/`}>Home</Link>
        </header>
        {/* แสดงโปรเจคที่มีให้เลือก */}
        <main className="max-w-2xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Select a Project
          </h1>

          <div className="space-y-3">
            {Object.keys(pages).map((path) => {
              const projectName = path.split("/").pop()?.replace(".tsx", "");

              return (
                <Link key={path} to={`${projectName}`} className="block card">
                  <h2 className="text-lg font-medium">{projectName}</h2>
                  <p className="text-sm text-[var(--color-subtext)]">
                    View details of {projectName}
                  </p>
                </Link>
              );
            })}
          </div>

          <p className="text-sm text-[var(--color-subtext)] mt-6 text-center">
            Select a project from the list above to view its details.
          </p>
        </main>
      </div>
    );
  }

  // สร้าง path ที่ match กับ glob
  const path = `../components/projects/${name}.tsx`;
  const loadComponent = pages[path];

  if (!loadComponent) {
    return (
      <div>
        <header className="text-right">
          <Link to={`/projects`}>Projects</Link>
          <Link to={`/`}>Home</Link>
        </header>
        <main>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Project Not Found
          </h1>
          <p className="text-sm text-[var(--color-subtext)] text-center">
            The project "{name}" does not exist. Please select a valid project.
          </p>
          <p className="text-sm text-[var(--color-subtext)] text-center">
            You can view available projects{" "}
            <Link
              to={`/projects`}
              className="text-[var(--color-highlights)] hover:underline"
            >
              here
            </Link>
            .
          </p>
        </main>
      </div>
    );
  }

  const ProjectComponent = lazy(loadComponent as any);

  return (
    <Suspense fallback={<div className="text-center">Loading project...</div>}>
      <header className="text-right">
        <Link to={`/projects`}>Projects</Link>
        <Link to={`/`}>Home</Link>
      </header>
      <ProjectComponent />
    </Suspense>
  );
}

export default Project;
