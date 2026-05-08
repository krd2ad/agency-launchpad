interface FocusCardProps {
  title: string;
  body: string;
}

export function FocusCard({ title, body }: FocusCardProps) {
  return (
    <article className="group rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/50">
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
