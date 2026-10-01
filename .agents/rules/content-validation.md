# Khabarwaani Website Validation & Architecture Rules

## Content Architecture & Narrative Boundaries

### 1. Page-to-Page Narrative Hierarchy
To prevent repetitive narrative loops, every page in the website has a designated canonical scope:
- **`thesis.html` (The Hub / The Why):** Master overview of the four catalysts. High-level thesis only; does not exhaustively duplicate spoke details.
- **`media.html` (Spoke 01 - Media Crisis):** Deep dive into news avoidance statistics (39%), psychological drivers (outrage, verbosity, negativity), and emotional shift.
- **`genz.html` (Spoke 02 - Gen Z Shift):** Youth consumption habits, attention dynamics, mobile-first information diets, and trust shifts away from legacy TV.
- **`reels.html` (Spoke 03 - Reels Format):** Mechanical breakdown of 15s–60s vertical video, visual scripting, pacing, hooks, retention, and viral distribution.
- **`ai-newsroom.html` (Spoke 04 - Agentic AI Newsroom):** Technological engine, multi-agent editorial pipeline, verification layers, and automation.

---

## Brand Tone & Voice Preservation (Strict Non-Negotiable)

Any content optimization, deduplication, or refactoring **MUST STRICTLY PRESERVE** the Khabarwaani brand voice:
- **Core Voice:** Witty, punchy, curiosity-driven, fast-paced, and unapologetically engaging.
- **Strict Prohibition:** Do **NOT** sanitize, sterilize, or rewrite copy into academic, dry, corporate, clinical, or bland text.
- **Editing Rule (Delete > Rewrite):** Fix redundancy primarily by **deleting unnecessary duplicated lines and pruning fluff** to reduce overall content size. Do not invent new text that risks changing the original tone. When content already says what is needed, keep the canonical instance and delete the duplicates.


---

## Content Deduplication & Validation Protocol

When reviewing or writing copy across the site, ensure strict adherence to non-redundancy:

### 1. Intra-Page Repetition Guard
- Avoid repeating identical phrases, statistics, or punchlines across adjacent sections on the same page.
- **Hero:** Provide high-level framing, headline statistics, and entry points. Do not prematurely list entire body arguments in KPI pills.
- **Body / Driver Sections:** Primary canonical location for detailed explanations, root causes, or workflows.
- **Comparison / Shift Cards:** Focus purely on structural, mechanical, or format contrasts (e.g. mobile vs TV broadcast constraints) rather than re-listing the emotional and psychological problems already detailed in the problem section.

### 2. Issue Structure for Content Modification & Redundancy
Whenever identifying or filing content issues or bugs, the issue must state **strictly what to do and how to do it, nothing more** (zero filler, no conversational padding).

Every change in **How to Do It** must specify:
1. Exact file path and line numbers
2. Exact **From:** text
3. Exact **To:** text
4. Strict tone preservation: The replacement copy must maintain the exact same witty, punchy, curiosity-driven brand voice—never sanitize into dry, corporate, or academic language.

```markdown
## Problem
[Exact repeated or problematic content, file names, and sections]

## What to Do
[Concise bulleted summary of changes]

## How to Do It
### [file.html]
- **Lines [StartLine–EndLine]:**
  - **From:** `[Exact existing text]`
  - **To:** `[Exact replacement text]`
```



### 3. Rules of Canonical Ownership
- If a concept is foundational to **Media Crisis**, its canonical explanation belongs in [`media.html`](media.html). Other pages may link or briefly cite it with 1 sentence max.
- If a concept is about **Video Architecture / Formats**, its canonical explanation belongs in [`reels.html`](reels.html).
- If a concept is about **AI / Agents**, its canonical explanation belongs in [`ai-newsroom.html`](ai-newsroom.html) and [`pipeline.html`](pipeline.html).
