import { AppShell, CertificationCard } from "@/components/ui";
import { certifications } from "@/data/certifications";
export default function Explorar(){return <AppShell title="Explorar Certificações"><div className="grid gap-3">{certifications.map(c=><CertificationCard key={c} name={c}/>)}<section className="card opacity-80"><p className="text-sm text-slate-300">Certificações legadas</p><p>AWS Certified Machine Learning - Specialty — legado/histórico, último dia de prova 31/03/2026</p></section></div></AppShell>}
