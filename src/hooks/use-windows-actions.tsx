import { useIsWindowsMode } from "./use-windows-mode";
import { useWindowManager, ProjectData } from "@/components/windows/useWindowManager";
import { useCallback } from "react";

export function useWindowsActions() {
  const isWindowsMode = useIsWindowsMode();
  
  // Utilisation conditionnelle du hook useWindowManager
  const manager = isWindowsMode ? useWindowManager() : null;

  const openWindow = useCallback((id: string, data?: ProjectData) => {
    if (manager) {
      manager.openWindow(id, data);
    } else {
      // Fallback ou log si appelé en mode classique sans gestionnaire
      console.warn("Attempted to open window outside of Windows Mode.");
    }
  }, [manager]);

  return {
    isWindowsMode,
    openWindow,
  };
}