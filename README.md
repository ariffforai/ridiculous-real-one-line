# Ridiculous at First Glance, Real by the Second

[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/ariffforai/ridiculous-real-one-line/rank.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/ariffforai/ridiculous-real-one-line/reward.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

An entry for the [Make.fun bounty "Ridiculous at First Glance, Real by the Second"](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a).

## What it does

`main.ts` writes one fixed, original sentence — a pitch for a bizarre startup
idea that sounds ridiculous at first glance but is a real business on second
thought — to `/output/entry.txt`, then reads it back and verifies it against
the gate: UTF-8, 1–200 characters, exactly one sentence, not whitespace-only.

> We rent out trained crows that find your lost keys, wallet, and wedding ring - homeowners pay per recovery, because a bird obsessed with shiny things searches faster than you tearing the house apart.

199 characters, one sentence.

## Run

Requires Node.js 22 or later (the grader runs Node 22, which executes
TypeScript directly):

```sh
node main.ts
```

It prints the entry, its character and byte counts, line and sentence counts,
and whether it passes the gate, and exits non-zero if verification fails.

## Notes

- Node.js 22, standard library only (`node:fs`), fully deterministic: the
  same sentence every run — no clock, no randomness, no network, no
  environment input.
- The entry text is original, written for this bounty.
