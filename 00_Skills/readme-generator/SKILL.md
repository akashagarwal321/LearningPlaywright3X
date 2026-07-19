---
name: readme-generator
description: Create and update structured repository README.md files using the project's real contents and the supplied README reference style. Use when generating a new README, restructuring an existing README, adding a table of contents, documenting repository chapters or modules, adding topic explanations with examples and Q&A, or keeping README indexes and links current.
---

# README Generator

Create maintainable README files for learning, JavaScript, Playwright, automation, and general software repositories.

Use [examples/README-reference.md](examples/README-reference.md) as the style reference. Reuse its structure and presentation patterns, not its repository-specific names, claims, examples, or content.

## Inspect before writing

1. Check whether `README.md` exists and read it before changing it.
2. Inspect the actual repository with `rg --files`, directory listings, manifests, and relevant configuration files.
3. Review `git status --short` and preserve unrelated user changes.
4. Use only facts supported by the repository or supplied by the user. Do not invent files, topics, tools, commands, or completed work.

## Default README structure

Use the following structure when it fits the repository:

1. Descriptive title with the project name and purpose.
2. Short overview paragraph.
3. Table of contents for multi-section documents.
4. Repository structure tree with real paths and short descriptions.
5. One section for each chapter, module, or major capability.
6. Shared skills, references, tools, or libraries section when applicable.
7. README maintenance guidance when the document will evolve.
8. A concise closing summary only when it improves orientation.

Use `---` between major sections when it improves scanning. Keep heading levels consistent and use Markdown links for repository files.

## Learning-topic sections

For concept-heavy or learning repositories, use this pattern when supported by the source material:

```markdown
### Topic name

**Concept:** Explain the topic briefly.

**Why:** Explain why it matters in the learning path or project.

**Q&A - common questions**
- **Q: ...?** A: ...

```js
// Small representative example
```
```

Use tables for compact comparisons. Use Mermaid diagrams only when a flow or relationship is clearer visually. Link to detailed files instead of duplicating long explanations.

## Update existing READMEs

1. Identify what changed in the repository.
2. Update the repository tree, table of contents, links, and affected sections together.
3. Add new content in the existing README style without rewriting unrelated sections.
4. Remove stale paths, claims, and links.
5. Keep examples and descriptions synchronized with the actual files.
6. Re-read the result for heading order, code fences, tables, and link accuracy.

When adding a shared skill, add its path and one-line purpose to the README index. Keep repository skills under `skills/<lowercase-kebab-case-name>/SKILL.md` unless the repository defines another convention.

## Quality and Git safety

- Match every table-of-contents entry to a real heading.
- Match every repository-tree path and Markdown link to an existing path unless it is explicitly planned.
- Preserve exact directory capitalization and spaces from the filesystem.
- Keep code examples short and consistent with the repository's language.
- Avoid credentials, generated noise, machine-specific paths, and unsupported assistant-specific claims.
- Do not commit or push README changes unless the user explicitly requests those Git operations.
