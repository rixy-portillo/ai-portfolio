type Principle = {
  id: string;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    id: "real-problems",
    title: "Solve real problems.",
    description:
      "Technology is a means to an end. I want the software I build to make someone's work easier, remove friction, or create a genuinely better experience.",
  },
  {
    id: "maintainable",
    title: "Maintainability before cleverness.",
    description:
      "I value code that's easy to understand, test, and extend. The best solutions are often the ones the next developer can confidently work with.",
  },
  {
    id: "ai-as-accelerant",
    title: "AI accelerates engineering, it doesn't replace judgment",
    description:
      "I use AI to accelerate development, explore ideas, and reduce repetitive work, but every architectural decision, tradeoff, and implementation remains my responsibility.",
  },
  {
    id: "leave-it-better",
    title: "Leave every codebase better than I found it.",
    description:
      "Whether modernizing legacy applications or building something new, I believe every change is an opportunity to improve clarity, reduce technical debt, and make future development easier.",
  },
  {
    id: "build-with-intention",
    title: "Build with intention.",
    description:
      "Every engineering decision involves tradeoffs. I strive to understand those tradeoffs and make choices I can confidently explain and not just follow trends or defaults.",
  },
];

export function EngineeringPhilosophy() {
  return (
    <section
      id="engineering-philosophy"
      aria-label="How I build software"
      className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight">
        How I Build Software
      </h2>
      <ul className="flex flex-col gap-6">
        {principles.map((principle) => (
          <li
            key={principle.id}
            className="flex flex-col gap-1 border-l-2 border-accent/40 pl-4"
          >
            <h3 className="text-lg font-medium">{principle.title}</h3>
            <p className="text-muted">
              {principle.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
