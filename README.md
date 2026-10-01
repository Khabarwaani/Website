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
   - When modifying any page (`index.html`, `thesis.html`, `architecture.html`, `editorial.html`, `pipeline.html`, `studio.html`, `what.html`, `mission.html`, `leadership.html`), actively audit existing sections to eliminate outdated, bloated, or non-essential text.

---

## 📌 Task Management & Reference Notice

**Important:** All project tasks, milestones, bug reports, and roadmap items are stored and tracked in **GitHub Tasks / Issues**.

- **GitHub Repository**: [Website](https://github.com/Khabarwaani/Website)
- **GitHub Tasks / Issues**: [https://github.com/Khabarwaani/Website/issues](https://github.com/Khabarwaani/Website/issues)

> **Guideline for Developers & Agents:**  
> 1. Always refer to the **GitHub Tasks / Issues** as the primary source of truth and reference for all tasks, feature implementations, and backlog priorities before making changes.
> 2. **Task Querying Protocol**: Query active tasks using `gh issue list --state open` directly in the shell to keep tracking centralized.
> 3. **Task Closure Protocol**: Git commits and direct pushes do not automatically close GitHub issues. Agents should **not** attempt to close or update GitHub tasks/issues directly. Instead, when a task is completed, provide the exact CLI command (e.g., `gh issue close <number>`) so it can be verified and executed.

### 🔒 Issue #19 Closure Protocol (`gh issue close 19`)

- **Historical Context**: [Issue #19](https://github.com/Khabarwaani/Website/issues/19) reported inconsistent item spacing, broken responsiveness, and alignment issues across page footers.
- **Resolution**: Resolved via Feature [#20](https://github.com/Khabarwaani/Website/issues/20) and Sub-feature [#41](https://github.com/Khabarwaani/Website/issues/41) by deploying a standardized, single-source-of-truth 4-column balanced storytelling footer in `js/layout.js`.
- **Closure Command**:
  ```bash
  gh issue close 19 --comment "Completed via Feature #20 / Sub-issue #41: Unified 4-column balanced storytelling footer deployed in js/layout.js across all 18 pages."
  ```

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
| ├── **Cleanup** | [#29](https://github.com/Khabarwaani/Website/issues/29) | `task` | [Completed] Clean Old & Legacy Files, Assets and Deprecated Navigation |
| │   ├── Sub-feat | [#45](https://github.com/Khabarwaani/Website/issues/45) | `sub-issue` | [Completed] Workspace File & Legacy Asset Cleanup |
| │   └── Sub-feat | [#46](https://github.com/Khabarwaani/Website/issues/46) | `sub-issue` | [Completed] Deprecated Navigation & CSS Purge |
| ├── **Feature 1** | [#20](https://github.com/Khabarwaani/Website/issues/20) | `feature` | [Completed] Universal Navigation Dropdown & 4-Column Footer System (Issue #19) |
| │   ├── Sub-feat | [#40](https://github.com/Khabarwaani/Website/issues/40) | `sub-issue` | [Completed] Universal Header Navigation & Sub-Tabs Dropdown |
| │   └── Sub-feat | [#41](https://github.com/Khabarwaani/Website/issues/41) | `sub-issue` | [Completed] 4-Column Balanced Storytelling Footer (Issue #19) |
| ├── **Feature 2** | [#21](https://github.com/Khabarwaani/Website/issues/21) | `feature` | [Completed] Create "Why" Micro-Pages with Ruthless Content Reduction |
| │   ├── Page | [#30](https://github.com/Khabarwaani/Website/issues/30) | `sub-issue` | [Completed] `media.html` (Why 1: The Media Crisis & Avoidance Paradox) |
| │   ├── Page | [#31](https://github.com/Khabarwaani/Website/issues/31) | `sub-issue` | [Completed] `genz.html` (Why 2: The Gen Z Shift & Feed Migration) |
| │   ├── Page | [#32](https://github.com/Khabarwaani/Website/issues/32) | `sub-issue` | [Completed] `reels.html` (Why 3: Why Vertical Reels & Positive Emotion) |
| │   └── Page | [#33](https://github.com/Khabarwaani/Website/issues/33) | `sub-issue` | [Completed] `ai-newsroom.html` (Why 4: Why Agentic AI Newsrooms Now) |
| ├── **Feature 3** | [#22](https://github.com/Khabarwaani/Website/issues/22) | `feature` | [Completed] Refactor `thesis.html` into Master "Why" Overview Hub |
| │   └── Sub-feat | [#42](https://github.com/Khabarwaani/Website/issues/42) | `sub-issue` | [Completed] `thesis.html` Master Why Hub Page Layout |
| ├── **Feature 4** | [#23](https://github.com/Khabarwaani/Website/issues/23) | `feature` | [Completed] Aggressive Content Pruning & Tab Navigation on "HOW" Pages |
| │   ├── Page | [#34](https://github.com/Khabarwaani/Website/issues/34) | `sub-issue` | [Completed] `architecture.html` (Systems Architecture & Multi-Agent Mesh) |
| │   ├── Page | [#35](https://github.com/Khabarwaani/Website/issues/35) | `sub-issue` | [Completed] `pipeline.html` (6-Stage Newsroom Operating Pipeline) |
| │   ├── Page | [#36](https://github.com/Khabarwaani/Website/issues/36) | `sub-issue` | [Completed] `editorial.html` (Editorial Desk & Verification Standards) |
| │   └── Page | [#37](https://github.com/Khabarwaani/Website/issues/37) | `sub-issue` | [Completed] `studio.html` (AI Reel Studio, 9:16 Motion & Voice Synthesis) |
| ├── **Feature 5** | [#24](https://github.com/Khabarwaani/Website/issues/24) | `feature` | [Completed] The Product Solution: AI Scripting Agent & Hindi Video Builder |
| │   └── Page | [#38](https://github.com/Khabarwaani/Website/issues/38) | `sub-issue` | [Completed] `what.html` (Product Solution Deep Dive & Live Pilot) |
| ├── **Feature 6** | [#25](https://github.com/Khabarwaani/Website/issues/25) | `feature` | [Completed] Create `mission.html` — The Story Climax ("Why Work On This") |
| │   └── Page | [#39](https://github.com/Khabarwaani/Website/issues/39) | `sub-issue` | [Completed] `mission.html` (The Story Climax: $10B Vacuum & 10x Economics) |
| ├── **Feature 7** | [#26](https://github.com/Khabarwaani/Website/issues/26) | `feature` | [Completed] Update `index.html` Front Door, Golden Circle Navigation & Story Climax Link |
| │   ├── Sub-feat | [#43](https://github.com/Khabarwaani/Website/issues/43) | `sub-issue` | [Completed] `index.html` Front Door & Navigation Integration |
| │   └── Sub-feat | [#44](https://github.com/Khabarwaani/Website/issues/44) | `sub-issue` | [Completed] `index.html` Golden Circle Hub & Climax Transition |
| └── **Task 8** | [#27](https://github.com/Khabarwaani/Website/issues/27) | `documentation` | [Completed] Update `README.md` Documentation & Information Architecture |
|     ├── Sub-feat | [#47](https://github.com/Khabarwaani/Website/issues/47) | `sub-issue` | [Completed] Narrative Architecture & Pages Topology Docs |
|     └── Sub-feat | [#48](https://github.com/Khabarwaani/Website/issues/48) | `sub-issue` | [Completed] Hierarchy Rules & Active Roadmap Table Docs |

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
│ • Gen Z Shift                 │ • 6-Stage Pipeline               │ • Continuous QA Loop          │
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

The site implements a **Modular Hub & Spoke Topology** across all chapters to enforce narrative boundaries and eliminate redundant copy loops:

#### Entry & Context
- `index.html` — **Homepage & Interactive Simulator**: Front door featuring the Golden Circle interactive simulator, live mobile reel preview, format shift matrix, and direct climax transition bridge.
- `vision.html` — **The Vision**: High-level Golden Circle strategic framework comparing legacy TV news shouting with witty, fact-checked reels.

#### Chapter 1: WHY (The Thesis & 4 Catalysts)
- `thesis.html` — **Master Why Overview Hub**: Consolidates the four foundational catalysts; routes readers to deep-dive micro-pages.
- `media.html` — **Spoke 01 (Media Crisis)**: Canonical breakdown of cable news shouting, toxicity, and the 39% Reuters Institute news avoidance paradox.
- `genz.html` — **Spoke 02 (Gen Z Shift)**: Youth mobile information consumption habits, feed-first migration, and collapse of legacy linear appointment TV.
- `reels.html` — **Spoke 03 (Reels Format)**: Mechanics of 15s–60s vertical video, visual scripting hooks, retention dynamics, and positive emotion.
- `ai-newsroom.html` — **Spoke 04 (Agentic AI)**: Technological timing, multi-agent editorial pipelines, and 10x economic efficiency (90% cost reduction).

#### Chapter 2: HOW (The Multi-Agent Operating System)
- `how.html` — **Master How Overview Hub**: Architectural overview of the autonomous operating engine and end-to-end newsroom flow.
- `architecture.html` — **Spoke 01 (Systems Architecture)**: Multi-agent mesh orchestration, technology stack, and decoupled micro-services.
- `pipeline.html` — **Spoke 02 (6-Stage Pipeline)**: Lifecycle from signal intake, script generation, and fact-checking to visual assembly, render, and distribution telemetry.
- `editorial.html` — **Spoke 03 (Editorial Desk)**: Fact-auditing protocols, primary source verification standards, and zero-hallucination guardrails.
- `studio.html` — **Spoke 04 (AI Reel Studio)**: 9:16 vertical motion engine, asset compositing, kinetic typography, and regional voice synthesis.

#### Chapter 3: WHAT (The Product Solution)
- `what.html` — **Master What Overview Hub**: Solution overview and live capability matrix.
- `scripting-agent.html` — **Engine 01**: AI Agent Scripting App converting verified news signals into witty, hook-driven Hindi scripts.
- `video-builder.html` — **Engine 02**: End-to-End Hindi Video Builder automating asset generation, timeline compositing, and final reel rendering.
- **Instagram Pilot ↗** ([`@khabarwaani`](https://www.instagram.com/khabarwaani)) — Real-world proof of concept and audience engagement live pilot.

#### Chapter 4: ROADMAP, MISSION & LEADERSHIP
- `roadmap.html` — **Master Roadmap Overview Hub**: 2-track hub routing to dedicated Execution and Funding deep dives.
- `execution.html` — **Execution Roadmap**: Feature status table (active in-progress checkboxes vs remaining deliverables) and milestone checklists.
- `funding.html` — **Funding Horizon**: Capital milestones table, 50/25/25% capital deployment breakdown, and infrastructure horizons.
- `mission.html` — **The Story Climax ("Why Work On Khabarwaani")**: The grand finale pitch detailing the $10B attention vacuum, 10x unit economics, high-status democratic purpose, and co-founder/partner invitation.
- `leadership.html` — **Team & Founders [STRICTLY LOCKED]**: Co-founder biographies and leadership credentials (Abhiraj Kumar, Parthkumar Panchal).  
  *Lock Status Policy:* This file is strictly frozen across automated refactors and maintenance tasks. Alterations to founder profiles, bios, or contact links require direct founder authorization.

---

## 🧭 Navigation Taxonomy & Simplified Header-Aligned Footer

The website utilizes a unified, component-based layout managed through `js/layout.js`, ensuring consistent navigation and footer hierarchy across all 18 pages.

### 1. Two-Tier Universal Header Navigation
Mounts into `<div id="site-header"></div>`:

- **Tier 1 (Global Brand Header & Primary Track)**:
  - **Brand Cluster**: Khabarwaani logo, wordmark, and tagline (*News, Reimagined — From Humiliation, Shouting to Curiosity, Conversation & Fun*).
  - **7 Global Navigation Anchors**:
    1. `Home` (`index.html`)
    2. `Vision` (`vision.html`)
    3. `Why` (`thesis.html`)
    4. `How` (`how.html`)
    5. `What` (`what.html`)
    6. `Roadmap` (`roadmap.html`)
    7. `Team` (`leadership.html`)
  - **Active State Detection**: Automatically highlights the active page link based on `window.location.pathname`.

- **Tier 2 (Contextual Sticky Sub-Navigation Track)**:
  Appears dynamically on chapter pages to allow seamless navigation between hubs and micro-pages:
  - **Why Chapter** (Active on `thesis.html`, `media.html`, `genz.html`, `reels.html`, `ai-newsroom.html`):
    `Overview` · `Media Crisis` · `Gen Z Shift` · `Reels Format` · `Agentic AI`
  - **How Chapter** (Active on `how.html`, `architecture.html`, `pipeline.html`, `editorial.html`, `studio.html`):
    `Overview` · `Architecture` · `Pipeline` · `Editorial Desk` · `AI Studio`
  - **What Chapter** (Active on `what.html`, `scripting-agent.html`, `video-builder.html`):
    `Overview` · `Scripting Agent` · `Video Builder`
  - **Roadmap Chapter** (Active on `roadmap.html`, `execution.html`, `funding.html`):
    `Overview` · `Execution` · `Funding`

### 2. Standardized Compact Footer
Mounts into `<div id="site-footer"></div>` with an ultra-clean, minimal 2-row layout:

- **Row 1 (Brand & Tagline)**:
  - Khabarwaani brand mark and wordmark.
  - Core tagline: *News, Reimagined — From Humiliation, Shouting to Curiosity, Conversation & Fun*.

- **Row 2 (Copyright & Connect Links)**:
  - Copyright notice (`© 2026 Khabarwaani. All rights reserved.`).
  - Essential external & utility links: `Instagram ↗` (live pilot) and `Back to top ↑` anchor (`#top`).

### 3. Reusable Layout System (`js/layout.js`)
- **Single Source of Truth**: All navigation items, sub-navigation tracks, and footer components are maintained in `js/layout.js`.
- **Zero Drift**: Eliminates hardcoded header/footer copy discrepancies across individual HTML templates.
- **Progressive Fallback**: Layout mounts immediately on `DOMContentLoaded` or on document ready, with fallback execution hooks for browser scripts.
