import {renderIcon} from '@site/src/icons';

// Thin wrapper around the shared icon map (see src/icons.js). Kept so the
// swizzled DocSidebarItem/Link component can import a sidebar-specific helper.
export function sidebarIcon(name) {
  return renderIcon(name);
}
