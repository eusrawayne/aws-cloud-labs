import Link from "next/link";
import { AppShell, CategoryTag, DifficultyIndicator } from "@/components/ui";
import { flashcards } from "@/data/flashcards";
export default function Dom(){const filters=["Todos","Conceito","Comparação","Pegadinha","Macete","Cenário","Serviço","fácil","médio","difícil"];return <AppShell title="Domínio do Exame"><div className="flex flex-wrap gap-2 mb-4">{filters.map(f=><CategoryTag key={f} label={f}/> )}</div><div className="grid gap-3">{flashcards.map(c=><Link href="/flashcard" key={c.id} className="card block"><p className="font-semibold">{c.question}</p><div className="flex justify-between mt-2"><CategoryTag label={c.type}/><DifficultyIndicator level={c.difficulty}/></div></Link>)}</div></AppShell>}
