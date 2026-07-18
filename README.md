# LearnPlaywright3x - JavaScript Fundamentals & Automation Learning Repo

A learning repository for JavaScript fundamentals, Playwright automation foundations, prompt engineering, and reusable coding-assistant skills.

---

## Table of Contents

- [Repository Structure](#repository-structure)
- [00 - Prompt Engineering](#00---prompt-engineering)
- [01 - JavaScript Concepts](#01---javascript-concepts)
- [Shared Skills](#shared-skills)

---

## Repository Structure

```text
LEARNPLAYWRIGHT3X/
|-- chapter_00_Prompt_Engineering/   Prompt engineering learning material
|-- chapter_01_Javascript Concepts/  JavaScript fundamentals and practice
|-- skills/                          Shared skills for coding assistants
|   |-- git-workflow/
|   |   `-- SKILL.md
|   `-- readme-generator/
|       |-- SKILL.md
|       `-- examples/
|           `-- README-reference.md
|-- .gitignore
`-- README.md
```

---

### 00 - Prompt Engineering

This chapter contains notes and exercises for writing structured prompts for development and test-automation tasks.

The material is intended to support clearer communication with coding assistants and more repeatable automation workflows.

### 01 - JavaScript Concepts

This chapter contains JavaScript fundamentals and practice material that support later Playwright automation work.

The focus is on building the core language confidence needed for browser automation, test scripting, debugging, and interview-style JavaScript problem solving.

---

## Shared Skills

Repository-wide skills live under `skills/` so they can be reused by different coding assistants and development tools.

Each skill uses a lowercase kebab-case directory and a `SKILL.md` entrypoint:

```text
skills/
`-- skill-name/
    `-- SKILL.md
```

Current skills:

| Skill | Purpose |
|-------|---------|
| [`git-workflow`](skills/git-workflow/SKILL.md) | Safe, platform-neutral Git collaboration practices |
| [`readme-generator`](skills/readme-generator/SKILL.md) | Create and maintain structured repository READMEs |

Detailed workflows and examples belong inside the relevant chapter folders or skill folders. This README stays as the main index and orientation guide for the repository.
