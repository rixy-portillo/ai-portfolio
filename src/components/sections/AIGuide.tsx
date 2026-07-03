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
      <p className="text-zinc-600 dark:text-zinc-400">
        Hi! I&apos;m Rixy AI — your guide to my work. Ask me anything about
        Rixy&apos;s projects, engineering decisions, or experience.
      </p>
      <ul className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
        {suggestedPrompts.map((prompt) => (
          <li key={prompt}>{prompt}</li>
        ))}
      </ul>
    </section>
  );
}
