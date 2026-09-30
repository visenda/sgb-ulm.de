export default function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-brand-100 overflow-hidden rounded-3xl border border-brand-100 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-accent-950 transition hover:bg-sand-50 [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden="true"
              className="grid h-7 w-7 flex-none place-items-center rounded-full border border-brand-200 text-brand-700 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-6 pb-6 text-accent-900/75">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
