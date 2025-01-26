import { resolve } from 'node:path'
import {
  hyperLayer,
  importJson,
  layer,
  map,
  rule,
  toApp,
  toKey,
  withModifier,
  writeToProfile,
} from 'karabiner.ts'
import { raycastWin } from './utils'

writeToProfile('default', [
  // Map CAPS_LOCK ⇪ to Meh ⌥⌃⇧, and keep as ⇪ if alone (or map to another key if alone, e.g. toIfAlone('escape') for ⎋).
  // https://karabiner.ts.evanliu.dev/examples/modifier-keys/caps_lock-to-hyper
  rule('Caps Lock → Meh').manipulators([
    map('caps_lock').toMeh().toIfAlone('caps_lock'),
  ]),
  rule('Escape → Hyper').manipulators([
    map('escape').toHyper().toIfAlone('escape'),
  ]),

  // Raycast based window management
  rule('Window Management').manipulators([
    withModifier('Hyper')({
      '↑': raycastWin('previous-display'),
      '↓': raycastWin('next-display'),
      '←': raycastWin('previous-desktop'),
      '→': raycastWin('next-desktop'),
      '⏎': raycastWin('maximize'),
    }),
    withModifier('Hyper')({
      1: raycastWin('first-third'),
      2: raycastWin('center-third'),
      3: raycastWin('last-third'),
      4: raycastWin('first-two-thirds'),
      5: raycastWin('last-two-thirds'),
      9: raycastWin('left-half'),
      0: raycastWin('right-half'),
    }),
  ]),

  // rule('VS Code', ifApp('Visual Studio Code')).manipulators([
  //   map('caps_lock').toHyper().toIfAlone('caps_lock'),
  // ]),

  // rule('Ghostty', ifApp('Ghostty')).manipulators([
  // ]),


  // system leader + arrow keys (control volume and brightness)
  // maybe use hyperleader + s or fn + s
  // system lock screen, toggle mute
  hyperLayer('s', 'system').manipulators({
    l: toKey('q', '⌘⌃'), // Lock screens
  }),

  // launch apps via shortcut keys
  layer('l', 'launch-app').manipulators({
    // browser (l + b)
    b: toApp('Firefox'),
    // file explorer / finder (l + f)
    f: toApp('Finder'),
    // terminal (l + t)
    t: toApp('Ghostty'),
    // chat app (l + c)
    c: toApp('Microsoft Teams'),
    // mail app (l + m)
    m: toApp('Microsoft Outlook'),
    // System settings (l + ,)
    ',': toApp('System Settings'),
  }),

  // Local karabiner rules. TODO: rewrite them using karabiner.ts
  importJson(resolve(__dirname, './third-party-rules/auto-close-brackets-quotes.json')),
])
