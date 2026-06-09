type Founder = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "Ellis Deakin",
    role: "Chief of Operations",
    bio: "Left the Royal Australian Navy after six years to build marketing systems that move money. Runs the strategy, ops, and back-end at Markit.",
    initials: "ED",
    photo: "/founders/ellis.jpg",
  },
  {
    name: "Shema Kamau",
    role: "Chief of Production",
    bio: "Operator behind 21M views for Pocket Dispo, the Curmel Moton campaign, and brand work with Jordan, Adidas, Nike, and Puma via Wish ATL. Owns video and paid creative at Markit.",
    initials: "SK",
    photo: "/founders/shema.jpg",
  },
];

export default function Founders() {
  return (
    <section id="founders">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">Founders / 04</p>
            <p className="font-serif uppercase text-3xl md:text-5xl mt-3 leading-tight tracking-[-0.02em]">
              Two operators.{" "}
              <span className="text-muted">No middlemen.</span>
            </p>
            <p className="mt-6 text-base text-foreground/75 max-w-sm leading-relaxed">
              You talk to the people doing the work. Every project is
              founder-owned from kick-off to ship.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
            {FOUNDERS.map((f) => (
              <article key={f.name} className="bg-background p-8 lg:p-10">
                <div className="aspect-square bg-foreground rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  {f.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <span className="font-serif text-6xl md:text-7xl text-background/90 tracking-[-0.04em]">
                        {f.initials}
                      </span>
                      <span className="absolute top-4 left-4 font-mono text-[10px] text-background/60 uppercase tracking-[0.08em]">
                        Portrait pending
                      </span>
                    </>
                  )}
                </div>
                <p className="font-serif text-2xl md:text-3xl tracking-[-0.02em]">
                  {f.name}
                </p>
                <p className="eyebrow mt-1">{f.role}</p>
                <p className="mt-4 text-base text-foreground/80 leading-relaxed">
                  {f.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
