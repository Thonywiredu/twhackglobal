export function SectionTitle({ eyebrow, title, lead }: { eyebrow?: string; title: React.ReactNode; lead?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-slate-200 ring-1 ring-white/10">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          {eyebrow}
        </div>
      ) : null}
      <h1 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">{title}</h1>
      {lead ? <p className="mt-4 text-slate-200 text-lg">{lead}</p> : null}
    </div>
  );
}
