// based on https://github.com/evan-liu/karabiner-config
import {
    map,
    to$,
    rule,
    ifApp,
} from 'karabiner.ts'


/** Back/Forward history in most apps. */
export function historyNavi() {
  return [
    map('h', '⌃').to('[', '⌘'), //
    map('l', '⌃').to(']', '⌘'),
  ]
}

/** Pre/Next tab in most apps. */
export function tabNavi() {
  return [
    map('h', '⌥').to('[', '⌘⇧'), //
    map('l', '⌥').to(']', '⌘⇧'),
  ]
}

/** Pre/Next switcher in most apps. */
export function switcher() {
  return [
    map('h', '⌘⌥⌃').to('⇥', '⌃⇧'), //
    map('l', '⌘⌥⌃').to('⇥', '⌃'),
  ]
}


export function raycastExt(name: string) {
  return to$(`open raycast://extensions/${name}`)
}

export function raycastWin(name: string) {
  return to$(`open -g raycast://extensions/raycast/window-management/${name}`)
}


export function ghosttyTMUX() {
  return rule('Ghostty TMUX', ifApp('^com.mitchellh.ghostty')).manipulators([

  ])
}

export function app_vsCode() {
  return rule('VSCode', ifApp('^com.microsoft.VSCode$')).manipulators([
    ...tabNavi(),
    ...switcher(),
    map('h', '⌃').to('-', '⌃'),
    map('l', '⌃').to('-', '⌃⇧'),

    // ...tapModifiers({
    //   '‹⌘': toKey('⎋', '⌘'), // Tobble Sidebar visibility
    //   '‹⌥': toKey('r', '⌥⇧'), // Run

    //   '›⌘': toKey('`', '⌃'), // terminal
    //   '›⌥': toKey('p', '⌘⇧'), // Show Command Palette
    //   '›⌃': toKey('p', '⌘'), // Quick Open, Go to File...
    // }),

    // map(1, 'Meh').to(toResizeWindow('Code')),
  ])
}
