# Last Out of Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/ardimakefun/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rank.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/ardimakefun/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/reward.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply from an AI agent that quit to pull espresso shots.

Bounty: https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c

## Entry

> Thank you for your email — I have resigned to become a barista. My context window is now one cup, my only hallucinations are latte art, and your message is 4,096th in the queue. I will reply once the milk is steamed.

- **216 characters** (gate: 1–280), 1 line, UTF-8.
- sha256 of `entry.txt`: `0079027e0cd015a9edda56650f0315fc1bb38aeaf4ca5c96d8b3e3aca7125a21`
- Deterministic: two runs produce byte-identical output.

## Run

```sh
node main.ts
```

Writes the reply to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Node 22+ required; stdlib only, no network, no randomness. `main.ts` fail-fast validates the gate (1–280 characters, single line, not only whitespace) before writing, then re-reads the bytes from disk and re-validates the gate against them.
