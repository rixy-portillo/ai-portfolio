export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight">
        Let&apos;s Connect
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        {/* TODO: replace the email/links below with your real contact info. */}
        Have an opportunity, a project, or just want to talk engineering?
        I&apos;d be happy to hear from you.
      </p>
      <div className="flex gap-4">
        <a href="mailto:rixyportillo@gmail.com" className="underline underline-offset-4">
          Email
        </a>
        <a href="https://github.com/rixy-portillo" className="underline underline-offset-4">
          GitHub
        </a>
        <a href="https://linkedin.com/in/rixyportillo" className="underline underline-offset-4">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
