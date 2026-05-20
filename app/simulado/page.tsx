import { AppShell } from "@/components/ui";
import { flashcards } from "@/data/flashcards";
export default function Sim(){return <AppShell title="Simulado Mental"><div className="grid grid-cols-3 gap-2">{[10,20,30].map(n=><button key={n} className="btn-secondary">{n} perguntas</button>)}</div><div className="grid gap-3 mt-4">{flashcards.slice(0,5).map(f=><details key={f.id} className="card"><summary>{f.question}</summary><p className="mt-2 text-sm">{f.shortAnswer}</p></details>)}</div></AppShell>}
