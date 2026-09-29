# Khabarwaani Website

> **News, Reimagined**: From humiliation and shouting to curiosity, conversation, and fun.

---

## 🎯 Core Goal & Editorial Guideline: Remove Unnecessary Text

> **Primary Directive:**  
> **Aggressively remove unnecessary, verbose, and redundant text across the entire Khabarwaani website.** Every line of copy must earn its place.

Khabarwaani's founding thesis asks:  
> *"Why can't news be interesting like reels—and funny? Why does news need to be verbose?"*

The website itself must embody this principle. Developers, designers, writers, and AI agents contributing to this project must treat **text reduction, conciseness, and ruthless pruning of fluff as a core goal**.

### ✂️ Content Pruning & Writing Guidelines
1. **Ruthless Brevity & Zero Filler**:
   - Cut throat-clearing intros, corporate buzzwords, dense jargon, and repetitive lede paragraphs.
   - If a sentence can be cut without losing core meaning, **remove it**.
   - If a multi-paragraph explanation can be simplified into a single punchy sentence or bullet point, compress it.
2. **Visual & Scannable over Dense Blocks**:
   - Modern audiences scan rather than read long essays. Favor clean cards, key metrics/pills, and scannable points over walls of text.
   - Keep paragraphs short (1–2 sentences maximum wherever possible).
3. **Punchy, Engaging Tone**:
   - Maintain a witty, curiosity-driven, and positive tone.
   - Avoid sounding academic, clinical, or overly self-important.
4. **Audit Before Adding**:
   - When modifying any page (`index.html`, `thesis.html`, `architecture.html`, `editorial.html`, `pipeline.html`, `studio.html`, `distribution.html`, `leadership.html`), actively audit existing sections to eliminate outdated, bloated, or non-essential text.

---

## 📌 Task Management & Reference Notice

**Important:** All project tasks, milestones, bug reports, and roadmap items are stored and tracked in **GitHub Tasks / Issues**.

- **GitHub Repository**: [Website](https://github.com/Khabarwaani/Website)
- **GitHub Tasks / Issues**: [https://github.com/Khabarwaani/Website/issues](https://github.com/Khabarwaani/Website/issues)

> **Guideline for Developers & Agents:**  
> 1. Always refer to the **GitHub Tasks / Issues** as the primary source of truth and reference for all tasks, feature implementations, and backlog priorities before making changes.
> 2. **Task Closure Protocol**: Git commits and direct pushes do not automatically close GitHub issues. Agents should **not** attempt to close or update GitHub tasks/issues directly. Instead, when a task is completed, the agent must provide the exact CLI command (e.g., `gh issue close <number>`) to the user so the user can execute it to update or close the task.

### 📐 Project Issue Hierarchy Rules: Epic → Feature → Sub-feature

All project work in Khabarwaani follows a strict 3-tier parent-child relationship system enforced via GitHub Sub-issues:

1. **Tier 1: Epic (`epic`, `epic:<name>`)**
   - High-level initiative or architectural refactoring (e.g., [#28](https://github.com/Khabarwaani/Website/issues/28)).
   - Represents the macro narrative or strategic objective.
   - Contains child **Features** and cross-cutting **Tasks**.

2. **Tier 2: Feature (`feature`, `epic:<name>`)**
   - Standalone, deliverable system capability or page group (e.g., [#21](https://github.com/Khabarwaani/Website/issues/21), [#23](https://github.com/Khabarwaani/Website/issues/23)).
   - Must be linked to its parent Epic using GitHub's native parent relationship:
     ```bash
     gh issue edit <feature-number> --parent <epic-number>
     ```
   - Features represent pages or major components and contain **Sub-features / Page Sub-issues**.

3. **Tier 3: Sub-feature / Page Sub-issue (`sub-issue`, `epic:<name>`)**
   - Individual page or atomic micro-component (e.g., [#30](https://github.com/Khabarwaani/Website/issues/30), [#31](https://github.com/Khabarwaani/Website/issues/31)).
   - Must be linked to its parent Feature using:
     ```bash
     gh issue edit <subfeature-number> --parent <feature-number>
     ```
   - Contains task checklists (`- [ ]`) for granular **tabs, sections, and micro-interactions**.

#### 🔗 Linkage & Relationship Rules:
- **Epic-Driven Work**: Every **Epic MUST have child Features / Tasks**, and every Feature under an Epic MUST have child Sub-features / Tasks.
- **Independent Features**: Standalone features not tied to an Epic are fully permitted, BUT an **Independent Feature MUST have child Sub-features / Subtasks** to ensure it is decomposed into executable units. A feature without subtasks is incomplete.
- **Independent Tasks**: Standalone chores, bug fixes, or maintenance items (e.g. Issue #19) can exist independently without requiring parent epics.
- **Action-Driven Relationships**: Linkages must not exist only as markdown comments or text lists; they must be executed via GitHub native sub-issue relationships (`--parent` / `--add-sub-issue`).
- **Consistent Labeling**: Epics, Features, and Sub-features belonging to an initiative must share the initiative label (e.g., `epic:golden-circle`).
- **Traceability**: PRs, commits, and agent execution steps should reference the specific Sub-feature / Task number to preserve audit trails.

### 📋 Active Roadmap & GitHub Tasks Hierarchy (Epic: `epic:golden-circle`)

| Level | Issue | Type & Label | Scope & Objectives |
| :--- | :--- | :--- | :--- |
| **Master Epic** | [#28](https://github.com/Khabarwaani/Website/issues/28) | `epic` | Epic: Golden Circle Storytelling, Modular Navigation & Content Reduction |
| ├── **Cleanup** | [#29](https://github.com/Khabarwaani/Website/issues/29) | `task` | Clean Old & Legacy Files, Assets and Deprecated Navigation |
| │   ├── Sub-feat | [#45](https://github.com/Khabarwaani/Website/issues/45) | `sub-issue` | Workspace File & Legacy Asset Cleanup |
| │   └── Sub-feat | [#46](https://github.com/Khabarwaani/Website/issues/46) | `sub-issue` | Deprecated Navigation & CSS Purge |
| ├── **Feature 1** | [#20](https://github.com/Khabarwaani/Website/issues/20) | `feature` | [Completed] Universal Navigation Dropdown & 4-Column Footer System (Issue #19) |
| │   ├── Sub-feat | [#40](https://github.com/Khabarwaani/Website/issues/40) | `sub-issue` | [Completed] Universal Header Navigation & Sub-Tabs Dropdown |
| │   └── Sub-feat | [#41](https://github.com/Khabarwaani/Website/issues/41) | `sub-issue` | [Completed] 4-Column Balanced Storytelling Footer (Issue #19) |
| ├── **Feature 2** | [#21](https://github.com/Khabarwaani/Website/issues/21) | `feature` | [Completed] Create "Why" Micro-Pages with Ruthless Content Reduction |
| │   ├── Page | [#30](https://github.com/Khabarwaani/Website/issues/30) | `sub-issue` | [Completed] `media.html` (Why 1: The Media Crisis & Avoidance Paradox) |
| │   ├── Page | [#31](https://github.com/Khabarwaani/Website/issues/31) | `sub-issue` | [Completed] `genz.html` (Why 2: The Gen Z Shift & Feed Migration) |
| │   ├── Page | [#32](https://github.com/Khabarwaani/Website/issues/32) | `sub-issue` | [Completed] `reels.html` (Why 3: Why Vertical Reels & Positive Emotion) |
| │   └── Page | [#33](https://github.com/Khabarwaani/Website/issues/33) | `sub-issue` | [Completed] `ai-newsroom.html` (Why 4: Why Agentic AI Newsrooms Now) |
| ├── **Feature 3** | [#22](https://github.com/Khabarwaani/Website/issues/22) | `feature` | Refactor `thesis.html` into Master "Why" Overview Hub |
| │   └── Sub-feat | [#42](https://github.com/Khabarwaani/Website/issues/42) | `sub-issue` | `thesis.html` Master Why Hub Page Layout |
| ├── **Feature 4** | [#23](https://github.com/Khabarwaani/Website/issues/23) | `feature` | Aggressive Content Pruning & Tab Navigation on "HOW" Pages |
| │   ├── Page | [#34](https://github.com/Khabarwaani/Website/issues/34) | `sub-issue` | `architecture.html` (Systems Architecture & Multi-Agent Mesh) |
| │   ├── Page | [#35](https://github.com/Khabarwaani/Website/issues/35) | `sub-issue` | `pipeline.html` (6-Stage Newsroom Operating Pipeline) |
| │   ├── Page | [#36](https://github.com/Khabarwaani/Website/issues/36) | `sub-issue` | `editorial.html` (Editorial Desk & Verification Standards) |
| │   └── Page | [#37](https://github.com/Khabarwaani/Website/issues/37) | `sub-issue` | `studio.html` (AI Reel Studio, 9:16 Motion & Voice Synthesis) |
| ├── **Feature 5** | [#24](https://github.com/Khabarwaani/Website/issues/24) | `feature` | Streamline Multilingual Distribution & Pilot Showcase |
| │   └── Page | [#38](https://github.com/Khabarwaani/Website/issues/38) | `sub-issue` | `distribution.html` (Multilingual Reach & Telemetry) |
| ├── **Feature 6** | [#25](https://github.com/Khabarwaani/Website/issues/25) | `feature` | Create `mission.html` — The Story Climax ("Why Work On This") |
| │   └── Page | [#39](https://github.com/Khabarwaani/Website/issues/39) | `sub-issue` | `mission.html` (The Story Climax: $10B Vacuum & 10x Economics) |
| ├── **Feature 7** | [#26](https://github.com/Khabarwaani/Website/issues/26) | `feature` | Update `index.html` Front Door, Golden Circle Navigation & Story Climax Link |
| │   ├── Sub-feat | [#43](https://github.com/Khabarwaani/Website/issues/43) | `sub-issue` | `index.html` Front Door & Navigation Integration |
| │   └── Sub-feat | [#44](https://github.com/Khabarwaani/Website/issues/44) | `sub-issue` | `index.html` Golden Circle Hub & Climax Transition |
| └── **Task 8** | [#27](https://github.com/Khabarwaani/Website/issues/27) | `documentation` | Update `README.md` Documentation & Information Architecture |
|     ├── Sub-feat | [#47](https://github.com/Khabarwaani/Website/issues/47) | `sub-issue` | Narrative Architecture & Pages Topology Docs |
|     └── Sub-feat | [#48](https://github.com/Khabarwaani/Website/issues/48) | `sub-issue` | Hierarchy Rules & Active Roadmap Table Docs |

---

## 🚀 About Khabarwaani

Khabarwaani is an agentic AI news-reels studio transforming daily current affairs into 15s–60s fact-checked vertical reels across Indian languages, focused on humor, wit, positive emotion, and verified reporting.

---

## 🏛️ Narrative Architecture: Simon Sinek's Golden Circle

The Khabarwaani website functions as an interactive pitch deck and story matrix structured into three core pillars and a climactic mission finale:

```
┌───────────────────────────────┬──────────────────────────────────┬───────────────────────────────┐
│ 1. WHY (Thesis) ▾             │ 2. HOW (Engine) ▾                │ 3. WHAT (Product) ▾           │
├───────────────────────────────┼──────────────────────────────────┼───────────────────────────────┤
│ • Media Crisis                │ • System Architecture            │ • Multilingual Reach          │
│ • Gen Z Shift                 │ • 6-Stage Pipeline               │ • 15s–60s Format Shift        │
│ • Reels Format                │ • Editorial Verification Desk    │ • Watch Live Pilot ↗          │
│ • Agentic AI                  │ • AI Reel Studio & Voice         │                               │
├───────────────────────────────┴──────────────────────────────────┴───────────────────────────────┤
│                                                │                                                 │
│                                                ▼                                                 │
│                         [ THE STORY CLIMAX: MISSION & REASON TO BUILD ]                          │
│                           "Why It Is Worth Working On Khabarwaani"                               │
│                         ──────────────────────────────────────────                               │
│                         • The $10B Attention Vacuum (700M+ mobile users)                         │
│                         • 10x Unit Economics of Agentic Journalism (90% cut)                     │
│                         • High-Status Democratic Mission: Truth without toxicity                 │
│                         • Open Invitation: Co-Founders, Team & Collaborators                     │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 🌐 Pages & Topology Overview

#### Chapter 1: WHY (The Thesis & Catalysts)
- `thesis.html` — Master Why Overview Hub (Media, Gen Z, Reels, AI)
- `media.html` — Why 1: The Media Crisis, cable shouting, and the 39% news avoidance paradox
- `genz.html` — Why 2: Gen Z mobile information habits and the collapse of TV news attention
- `reels.html` — Why 3: Why 15s–60s vertical reels, humor, curiosity, and positive emotion
- `ai-newsroom.html` — Why 4: Why autonomous agentic AI now (speed, scale, 90% cost reduction)

#### Chapter 2: HOW (The Multi-Agent Operating System)
- `architecture.html` — Multi-agent mesh orchestration and technical stack
- `pipeline.html` — 6-stage newsroom operational lifecycle from signal intake to telemetry
- `editorial.html` — Journalistic fact-auditing desk, primary records, and verification standards
- `studio.html` — AI Reel Studio, 9:16 programmatic visual motion, and regional voice synthesis

#### Chapter 3: WHAT (The Product, Distribution & Proof)
- `distribution.html` — Multilingual distribution channels, formats, and audience telemetry
- `index.html#shift` — Format comparison: Legacy TV News vs. Khabarwaani Reels
- Instagram Pilot ↗ (`https://www.instagram.com/khabarwaani`) — Live vertical reel pilot proof

#### Chapter 4: THE CLIMAX & TEAM
- `mission.html` — The Story Climax: Why solving the news crisis is worth your life's best work
- `leadership.html` — [LOCKED] Co-Founders and core leadership team (Abhiraj Kumar, Parthkumar Panchal)
- `index.html` — Executive summary, Golden Circle framework, and ending transition hook

