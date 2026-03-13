/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Devin API Key - Personal API Key (apk_user_) or Service API Key (apk_) used to access Devin's v1 API. */
  "apiKey": string,
  /** Devin App URL - Base URL used when opening sessions in the Devin web app. */
  "appBaseUrl": string,
  /** Devin API URL - Base URL for the Devin API. Leave the default unless you're using a custom deployment. */
  "apiBaseUrl": string,
  /** My Devin Email - Used to separate your sessions from everyone else's in the main list. */
  "currentUserEmail"?: string,
  /** Demo Mode - Use local fake sessions and pull requests so you can capture screenshots without exposing real data. */
  "demoMode": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `sessions` command */
  export type Sessions = ExtensionPreferences & {}
  /** Preferences accessible in the `create-session` command */
  export type CreateSession = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `sessions` command */
  export type Sessions = {}
  /** Arguments passed to the `create-session` command */
  export type CreateSession = {}
}

