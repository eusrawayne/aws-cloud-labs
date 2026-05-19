import { AppShell, TimerCard } from "@/components/ui";
import { flashcards } from "@/data/flashcards";
export default function Revisao(){return <AppShell title="Revisão Rápida 15 minutos"><TimerCard/><section className="card mt-4"><p>Tópicos incluídos:</p><ul className="list-disc pl-5 text-sm mt-2"><li>Armazenamento</li><li>Segurança</li><li>Rede</li><li>Integração</li></ul></section><section className="grid gap-3 mt-4">{flashcards.slice(0,4).map(c=><div key={c.id} className="card">{c.question}</div>)}</section></AppShell>}
