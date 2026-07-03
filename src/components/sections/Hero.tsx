export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative isolate mx-auto flex w-full max-w-3xl flex-col items-center gap-6 overflow-hidden px-6 py-20 text-center"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Rixy Portillo Guzman
      </h1>
      <div className="flex flex-col gap-1 text-lg text-muted">
        <p>Building software that solves real problems.</p>
        <p>Thoughtful engineering. Intuitive experiences. Meaningful impact.</p>
      </div>
      <div className="flex gap-4 pt-2">
        <a
          href="#projects"
          className="text-accent underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="text-accent underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
