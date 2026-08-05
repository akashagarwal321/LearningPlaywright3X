---
name: git-workflow
description: Apply safe, platform-neutral Git practices in any repository. Use when inspecting changes, creating branches, writing commit messages, staging, committing, pushing, reviewing, opening or merging hosted change requests, rebasing, resolving conflicts, or cleaning up Git history.
---

# Git Workflow

Use repository-specific contribution guidance when present; it overrides this skill. Adapt terms such as pull request, merge request, and change request to the hosting platform in use.

## Before changing Git state

1. Run `git status --short` and inspect the relevant diff.
2. Confirm the target branch, remote, and intended files. Do not include editor settings, dependencies, reports, generated output, credentials, or unrelated changes.
3. Never add secrets. Check staged files and `.gitignore` when a new tool or generated artifact is involved.
4. Do not change branches, commit, push, merge, rebase, reset, or delete refs unless the user asked for that operation.

## Branches

Keep `main` releasable. Start task work from an up-to-date `main` unless repository policy specifies another base branch.

Create short, lowercase kebab-case branches using one of these prefixes:

- `feat/` — new user-visible capability
- `fix/` — bug fix
- `docs/` — documentation only
- `test/` — tests only
- `refactor/` — internal restructuring without behavior change
- `chore/` — tooling, dependencies, or maintenance
- `hotfix/` — urgent production fix

Example: `feat/login-validation`.

Avoid direct commits to `main` unless the user explicitly requests it or the repository has no review workflow.

## Commits

Make each commit focused, buildable when practical, and limited to one logical change. Stage files explicitly rather than using blanket staging commands when unrelated work may exist.

Use Conventional Commits:

```text
type(optional-scope): imperative summary
```

Use an imperative, lowercase summary; keep the header to 72 characters or fewer; omit the period. Use a body only when it clarifies why, trade-offs, migration notes, or risks.

Examples:

```text
feat(auth): add login validation
fix(cart): prevent duplicate item submission
test(search): cover empty query behavior
chore: update Playwright dependencies
```

Use `!` or a `BREAKING CHANGE:` footer only for an actual breaking change. Do not use vague messages such as `changes`, `updates`, or `fix bug`.

## Review, push, and hosted collaboration

Before pushing, review `git diff --cached`, run the relevant checks, and confirm no sensitive or generated files are staged. Use the repository's configured remote and its normal review mechanism, whether that is a pull request, merge request, code review, or direct integration.

Push a feature branch with upstream tracking when remote collaboration is used. Prefer a reviewed change into the repository's protected or default branch; describe the change, verification performed, and any remaining risk. Keep reviews small and respond to feedback with follow-up commits unless the team explicitly prefers another approach.

## Merge and history safety

Prefer the repository's configured merge method. If none exists, prefer squash merging for a small single-purpose change request and rebase merging for a clean series of meaningful commits. Delete the remote branch after merge only when the change is merged and the user or repository policy permits it.

Never force-push, rewrite shared history, run `git reset --hard`, discard uncommitted work, or delete branches/tags without explicit user approval. Before rebasing or resolving conflicts, show the affected branch and explain the proposed operation. Preserve user changes and validate the result after resolving conflicts.

## Completion check

Report the branch, commit hash and message, checks run, push status, and any uncommitted or untracked files that remain.
