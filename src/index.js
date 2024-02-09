export let keyDebug = false;
export function setKeyDebug(b) {
  keyDebug = b;
}
  setCommandHistory(JSON.parse(window.localStorage.getItem('commandHistory') || '[]') || []);
  //window.onmouseup = focus;

  const input = document.querySelector('#commandinput');