export type Replies = string[]

declare module 'claude-code' {
  interface PluginState {
    'lazy-reply': { replies: Replies }
  }
}
