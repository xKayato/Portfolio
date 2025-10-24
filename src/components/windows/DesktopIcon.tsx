import React from 'react';
import { cn } from '@/lib/utils';
import { WindowId, WINDOW_CONFIGS, useWindowManager } from './useWindowManager';

interface DesktopIconProps {
  windowId: WindowId;
}

export const DesktopIcon = ({ windowId }: DesktopIconProps) => {
  const { openWindow } = useWindowManager();
  const config = WINDOW_CONFIGS[windowId];
  const Icon = config.icon;

  const handleClick = () => {
    openWindow(windowId);
  };

  return (
    <button
      className={cn(
        "flex flex-col items-center w-20 p-1 m-2",
        "text-white text-xs text-center cursor-pointer select-none",
        "hover:bg-blue-500/50 rounded transition-colors duration-100"
      )}
      onDoubleClick={handleClick}
      onClick={(e) => {
        // Simple click selection logic could go here if needed
      }}
    >
      <Icon className="h-8 w-8 mb-1 text-white drop-shadow-md" />
      <span className="break-words leading-tight drop-shadow-lg">{config.title}</span>
    </button>
  );
};