"use client"

import Image from "next/image"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src="/Promise/chisiamo.jpg"
              alt="Accademia di Danza Promise"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">FORMIAMO DANZATORI, ISPIRIAMO PERSONE</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Chi Siamo
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-pretty text-foreground">
              <p>
                Una scuola di danza dove ogni percorso inizia con una promessa: aiutare ogni allievo a esprimere il proprio potenziale.
              </p>
              <p>
                Accademia di Danza Promise nasce dalla passione per larte del movimento e dallimpegno quotidiano nella formazione di bambini, ragazzi e adulti. Crediamo che la danza sia molto più di una disciplina: è uno strumento di crescita personale, espressione e consapevolezza.
              </p>
              <p>
                Allinterno della nostra accademia ogni allievo trova un ambiente accogliente, professionale e stimolante, dove sviluppare tecnica, musicalità, creatività e fiducia in sé stesso. Le lezioni sono pensate per accompagnare ogni percorso formativo con attenzione, valorizzando il talento individuale e il piacere di imparare.
              </p>
              <p>
                Attraverso corsi, spettacoli, stage ed esperienze artistiche, offriamo opportunità concrete per vivere la danza in tutte le sue forme, favorendo la crescita artistica e umana di ogni studente.
              </p>
              <p>
                Che si tratti dei primi passi nel mondo della danza o di un percorso più avanzato, il nostro obiettivo è lo stesso: trasformare la passione in esperienza, emozione e crescita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
