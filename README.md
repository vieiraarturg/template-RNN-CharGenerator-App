# Professor Aurora — TF.js Offline Chatbot

## Live Demo
[Online Demo](https://curious-gaufre-a55ca6.netlify.app)

## Overview
This project is a local, TF.js-based text generation chatbot with:
- Offline text generation (Char-RNN)
- Retrieval-Augmented Generation (RAG) with Universal Sentence Encoder
- On-device training via `training.html`
- Android-themed responsive UI
- Fully client-side; no external APIs

## Files
- `index.html` — Chat interface + TF.js inference + retrieval
- `training.html` — On-device training page
- `model_utils.js` — Char-RNN generator utilities
- `online_professor_agent_profile.json` — Agent persona profile
- `netlify.toml` — Netlify hosting config
- `README.md` — Project overview

## How to Run
1. Open `index.html` in a browser (Chrome recommended)
2. Interact with the chatbot
3. Optionally, modify dataset and train using `training.html`
