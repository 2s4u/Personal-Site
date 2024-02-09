import { setComplete } from '../completion';
import { html } from '../util';
import { commandShortcut } from '.';

const commands = [
  'help'
].sort();

export default (args) => {
  setComplete(0);
  let helpNeeded = args.filter(i => i === '--help').length;
  let dumbmath = Math.min(Math.max(helpNeeded, 2) - 2, 8) / 8;
  let progress = Math.max(helpNeeded, 2) - 2;
  if (dumbmath > 0) setComplete(1);
  return html(`<div style="overflow: hidden;"><div style="max-width: 300px; transform: rotate(${Math.pow(progress, 3)}deg) skew(${Math.sin(progress * 0.8) * dumbmath * 30}deg, ${Math.cos(progress * 0.8) * dumbmath * 30}deg);">${commands.map(c => c.split('').map(c => c.repeat(1 + helpNeeded)).join('')).map(commandShortcut).join(' ')}</div></div><br><b class="${helpNeeded < 9 ? 'yellow' : 'red'}"><pre>${helpNeeded < 8 ? 'use --help to' : '             '} get ${helpNeeded < 5 ? 'more' : '   '} help ${helpNeeded < 6 ? 'on a specific command' : ''}</pre></b>`);
};