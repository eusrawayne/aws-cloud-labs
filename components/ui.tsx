"use client";
import Link from "next/link";
import { Home, Search, RefreshCcw, BrainCircuit, User, Timer, BookOpen, BadgeHelp } from "lucide-react";
import { ReactNode, useMemo, useState } from "react";
import { flashcards } from "@/data/flashcards";

export function AppShell({ title, children }: { title: string; children: ReactNode }) { return <main className="max-w-5xl mx-auto pb-24 px-4"><header className="py-4"><h1 className="text-xl font-bold">{title}</h1></header>{children}<BottomNavigation /></main>; }
export function BottomNavigation() { const i="w-5 h-5"; const items=[['/','Início',<Home className={i}/>],['/explorar','Explorar',<Search className={i}/>],['/revisao','Revisão',<RefreshCcw className={i}/>],['/simulado','Simulado',<BrainCircuit className={i}/>],['/perfil','Perfil',<User className={i}/>]]; return <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-blue-500/30"><div className="max-w-5xl mx-auto grid grid-cols-5">{items.map(([href,l,icon])=><Link key={href} href={href as string} className="text-xs py-2 flex flex-col items-center gap-1 text-slate-200">{icon}{l}</Link>)}</div></nav>; }
export const ProgressBar=({value}:{value:number})=><div className="w-full h-2 bg-slate-800 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{width:`${value}%`}} /></div>;
export const SearchInput=()=> <input placeholder="Buscar serviço AWS..." className="w-full rounded-xl bg-slate-900 border border-blue-500/30 p-3"/>;
export const ExamLevelCard=({name,count}:{name:string;count:number})=><div className="card"><p className="text-sm text-slate-300">{name}</p><p className="text-2xl font-bold">{count} trilhas</p></div>;
export const CertificationCard=({name}:{name:string})=><div className="card"><p className="font-semibold">{name}</p><Link href="/exame/saa-c03" className="text-blue-300 text-sm">Ver detalhes</Link></div>;
export const CategoryTag=({label}:{label:string})=><span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 border border-blue-400/30">{label}</span>;
export const DifficultyIndicator=({level}:{level:string})=><span className="text-xs uppercase text-slate-300">{level}</span>;
export const TimerCard=()=> <div className="card"><div className="flex items-center gap-2"><Timer className="w-5"/><p className="text-3xl font-bold">15:00</p></div><button className="btn-primary mt-3">Iniciar</button></div>;
export const StudyModeCard=({title,icon}:{title:string;icon:ReactNode})=><div className="card flex items-center justify-between"><p>{title}</p>{icon}</div>;
export const ComparisonCard=({title}:{title:string})=><div className="card"><p>{title}</p></div>;
export const MnemonicImageCard=({title,description}:{title:string;description:string})=><div className="card"><div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/30 to-slate-700 mb-3"/><h3 className="font-semibold">{title}</h3><p className="text-sm text-slate-300">{description}</p></div>;

export function FlashcardFront({c,onFlip}:{c:(typeof flashcards)[number];onFlip:()=>void}){return <div className="card"><CategoryTag label={c.type}/><h3 className="text-xl mt-2 font-bold">{c.question}</h3><div className="h-36 my-4 rounded-xl bg-slate-800 border border-blue-500/30 flex items-center justify-center text-slate-300">Ilustração placeholder</div><p className="text-sm">Serviços: {c.services.join(", ")}</p><button className="btn-primary mt-4" onClick={onFlip}>Virar card</button></div>}
export function FlashcardBack({c,onFlip}:{c:(typeof flashcards)[number];onFlip:()=>void}){return <div className="card"><h3 className="font-bold text-lg">{c.shortAnswer}</h3><p className="text-sm mt-2">{c.explanation}</p><p className="text-sm mt-2"><b>Macete:</b> {c.mnemonic}</p><p className="text-sm mt-2"><b>Banca:</b> {c.examStyle}</p><p className="text-sm mt-2"><b>Confunde:</b> {c.confusingServices.join(", ")}</p><div className="mt-3 flex items-center justify-between"><CategoryTag label={c.category}/><DifficultyIndicator level={c.difficulty}/></div><div className="grid grid-cols-3 gap-2 mt-4"><button className="btn-secondary">Errei</button><button className="btn-secondary">Quase</button><button className="btn-primary">Acertei</button></div><button className="btn-secondary mt-3 w-full" onClick={onFlip}>Voltar</button></div>}
export function Flashcard(){const [flipped,set]=useState(false); const card=useMemo(()=>flashcards[0],[]); return flipped ? <FlashcardBack c={card} onFlip={()=>set(false)}/> : <FlashcardFront c={card} onFlip={()=>set(true)}/>}

export const DicasIcon = { BookOpen, BadgeHelp };
