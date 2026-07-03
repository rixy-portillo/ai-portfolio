export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center"
    >
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Rixy Portillo Guzman
      </h1>
      <div className="flex flex-col gap-1 text-lg text-zinc-600 dark:text-zinc-400">
        <p>Building software that solves real problems.</p>
        <p>Thoughtful engineering. Intuitive experiences. Meaningful impact.</p>
      </div>
      <div className="flex gap-4 pt-2">
        <a href="#projects" className="underline underline-offset-4">
          View projects
        </a>
        <a href="#contact" className="underline underline-offset-4">
          Contact
        </a>
      </div>
    </section>
  );
}
