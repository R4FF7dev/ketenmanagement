export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="text-navy/40">{number}</span>
      <span className="h-px w-6 bg-orange/60" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
