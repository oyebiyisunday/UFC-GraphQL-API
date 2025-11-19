# UFC GraphQL API

This project is a simple GraphQL API that exposes information about 20 active UFC fighters.

- Data is stored **in memory** (no database).
- Implemented using **Apollo Server** and **GraphQL**.
- You can:
  - Query a UFC fighter by name.
  - Get a list of all fighters for a given weight class.
  - Optionally list all fighters.

---

## 1. Requirements

- Node.js (recommended: v16+)
- npm (comes with Node)

---

## 2. Installation

From the folder containing `ufc.js` (and optionally `test.js`):

```bash
npm install apollo-server graphql axios
