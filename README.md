# Devin for Raycast

Manage Devin sessions from Raycast without leaving your keyboard.

## Features

- Browse and search recent Devin sessions
- Inspect session status, pull request links, tags, and recent messages
- Open sessions directly in the Devin web app
- Create a new Devin session
- Send a message to an existing session
- Pin favorite sessions and prioritize recently touched sessions locally in Raycast

## Setup

1. Generate a Devin API key in your Devin account.
2. Open the extension preferences in Raycast.
3. Set:
   - `Devin API Key`
   - `Devin App URL` if you use a non-default app host
   - `Devin API URL` if you use a non-default API host
   - `My Devin Email` if you want the list split into your sessions vs everyone else's

The extension targets the Devin **v1 API**:

- `GET /v1/sessions`
- `GET /v1/sessions/{session_id}`
- `POST /v1/sessions`
- `POST /v1/sessions/{session_id}/message`

## Local Development

```bash
npm install
npm run dev
```
