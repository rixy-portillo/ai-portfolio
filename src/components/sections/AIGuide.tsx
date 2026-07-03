const suggestedPrompts = [
  "Tell me about RescueNet",
  "Walk me through your engineering process",
  "How do you use AI?",
  "Why should I hire you?",
];

export function AIGuide() {
  return (
    <section
      id="ai-guide"
      aria-label="AI guide"
      className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Meet Rixy AI</h2>
      <p className="text-muted">
        Hi! I&apos;m Rixy AI — your guide to my work. Ask me anything about
        Rixy&apos;s projects, engineering decisions, or experience.
      </p>
      <ul className="flex flex-col gap-2 text-muted">
        {suggestedPrompts.map((prompt) => (
          <li key={prompt} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            {prompt}
          </li>
        ))}
      </ul>
    </section>
  );
}
