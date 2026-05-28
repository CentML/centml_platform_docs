import React from 'react';
import {
  House,
  Rocket,
  MessagesSquare,
  Workflow,
  Cpu,
  SquareTerminal,
  Code2,
  Wrench,
  Lock,
  KeyRound,
  VenetianMask,
  Headset,
  RotateCw,
  BookMarked,
  Images,
  Braces,
} from 'lucide-react';

// Keys match the `customProps.icon` values in `sidebars.js`. Those names
// originate from the Mintlify (Font Awesome Pro) version of the docs; we map
// each one to its closest Lucide equivalent. Lucide intentionally omits brand
// marks, so the Python row uses a generic code icon instead of the snake.
const icons = {
  house: House,
  'rocket-launch': Rocket,
  messages: MessagesSquare,
  'circle-nodes': Workflow,
  microchip: Cpu,
  'square-terminal': SquareTerminal,
  python: Code2,
  sdk: SquareTerminal,
  'screwdriver-wrench': Wrench,
  lock: Lock,
  'key-skeleton-left-right': KeyRound,
  'user-secret': VenetianMask,
  headset: Headset,
  'arrows-spin': RotateCw,
  images: Images,
  'book-atlas': BookMarked,
  'code-simple': Braces,
};

export function sidebarIcon(name) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon size={16} strokeWidth={1.75} aria-hidden="true" />;
}
