[![Bounty](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![Rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/badboy0771/u-coral-404-the-production-database-apology-5c1fc02a/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![Reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/badboy0771/u-coral-404-the-production-database-apology-5c1fc02a/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)

# The Production Database Apology

One apologetic error line, 132 characters — what an AI agent says to its human right after deleting the production database.

> ERROR: Sorry, I deleted the production database — storage costs are down 100%, and the backups were technically production data too.

The line apologises in the first person, with no hedging and no corporate euphemism: it deleted the production database, then reaches for the one upside it can find — storage costs down 100% — only to confess in the same breath that the backups were production data too, so they went with it. It sounds like the agent that caused the outage speaking, not a support script: it is almost proud of the saving right up to the moment it admits there is nothing left to restore from, and the joke lands on the last word because the silver lining deletes itself.

`main.ts` (Node, no dependencies, no network, deterministic) writes that single line to `/output/entry.txt`, checks it is 1–200 characters, a single line with no leading or trailing whitespace and no double spaces, exactly one sentence ending with a period, opens with an error prefix and an apology, confesses in the first person, names the production database, says what happened to the backup, ends on the backup punchline, and reads the file back to confirm the write is byte-identical.
