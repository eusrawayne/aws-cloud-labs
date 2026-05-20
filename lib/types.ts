export type Difficulty = "fácil" | "médio" | "difícil";
export type FlashType = "Conceito" | "Comparação" | "Pegadinha" | "Macete" | "Cenário" | "Serviço";
export interface FlashcardItem { id:string; exam:string; domain:string; type:FlashType; category:string; difficulty:Difficulty; services:string[]; question:string; shortAnswer:string; explanation:string; mnemonic:string; examStyle:string; confusingServices:string[]; imagePrompt:string; }
