import {
  layer,
  map,
  rule,
  toApp,
  writeToProfile,
} from 'karabiner.ts'

writeToProfile('default', [
  // Map CAPS_LOCK ⇪ to Hyper ⌘⌥⌃⇧, and keep as ⇪ if alone (or map to another key if alone, e.g. toIfAlone('escape') for ⎋).
  // https://karabiner.ts.evanliu.dev/examples/modifier-keys/caps_lock-to-hyper
  rule('Caps Lock → Hyper').manipulators([
    map('caps_lock').toHyper().toIfAlone('caps_lock'),
  ]),

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
    m: toApp('Microsoft Outlook.'),
  }),

])
