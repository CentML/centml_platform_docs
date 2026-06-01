import React from 'react';
import {
  House,
  Rocket,
  MessagesSquare,
  Workflow,
  Cpu,
  SquareTerminal,
  Terminal,
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
  PackageOpen,
} from 'lucide-react';

// Single source of truth for icon names → Lucide components, shared by the
// sidebar (src/theme/DocSidebarItem/Link) and the <Card> MDX component.
// Names originate from the Mintlify (Font Awesome Pro) version of the docs and
// are mapped to their closest Lucide equivalent. Lucide omits brand marks, so
// `python` uses a generic code icon. Both sidebar keys (`square-terminal`) and
// card keys (`terminal`, `box-open-full`) are included so either source works.
const icons = {
  house: House,
  'rocket-launch': Rocket,
  messages: MessagesSquare,
  'circle-nodes': Workflow,
  microchip: Cpu,
  'square-terminal': SquareTerminal,
  terminal: Terminal,
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
  'box-open-full': PackageOpen,
};

export function renderIcon(name, {size = 16, strokeWidth = 1.75} = {}) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export default icons;
