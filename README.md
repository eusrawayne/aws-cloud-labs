# Rota da Certificação — MVP Frontend

MVP mobile-first em **Next.js + TypeScript + Tailwind CSS** para estudo de certificações AWS com flashcards.

## Requisitos
- Node.js 20+
- npm 10+

## Onde visualizar o projeto
### Local (recomendado)
```bash
npm install
npm run dev
```
Depois, abra no navegador: **http://localhost:3000**.

### Rede local (celular/tablet na mesma Wi‑Fi)
```bash
npm run dev -- --hostname 0.0.0.0 --port 3000
```
Depois, acesse `http://SEU_IP_LOCAL:3000`.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- lucide-react
- dados mockados em `data/*.ts`

## Telas implementadas
- `/` Dashboard
- `/explorar` Certificações
- `/exame/saa-c03` Detalhe do exame
- `/exame/saa-c03/dominio` Domínio e filtros
- `/flashcard` Frente/verso do flashcard
- `/revisao` Revisão rápida 15 min
- `/simulado` Simulado mental
- `/dicas` Dicas de prova
- `/confusoes` Confusões comuns
- `/biblioteca` Biblioteca visual

## Componentes reutilizáveis
`AppShell`, `BottomNavigation`, `CertificationCard`, `ExamLevelCard`, `ProgressBar`, `Flashcard`, `FlashcardFront`, `FlashcardBack`, `CategoryTag`, `DifficultyIndicator`, `MnemonicImageCard`, `ComparisonCard`, `SearchInput`, `TimerCard`, `StudyModeCard`.

## Observações
- Sem backend real (somente mock).
- Conteúdo educacional, sem uso de branding oficial da AWS.
