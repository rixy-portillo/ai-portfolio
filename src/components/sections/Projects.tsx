type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
};

const projects: Project[] = [
  {
    id: "project-one",
    title: "[Project title]",
    description: "[One or two sentences on the problem and your role in solving it.]",
    stack: ["Next.js", "TypeScript"],
  },
  {
    id: "project-two",
    title: "[Project title]",
    description: "[One or two sentences on the problem and your role in solving it.]",
    stack: ["React", "TypeScript"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight">
        Featured projects
      </h2>
      <ul className="flex flex-col gap-8">
        {projects.map((project) => (
          <li key={project.id} className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 text-sm text-zinc-500">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
