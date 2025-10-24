import { useIsWindowsMode } from "./use-windows-mode";
import { useWindowManager, ProjectData } from "@/components/windows/useWindowManager";
import { useCallback } from "react";

export function useWindowsActions() {
  const isWindowsMode = useIsWindowsMode();
  
  // Utilisation conditionnelle du hook useWindowManager
  // Ceci est la clé: useWindowManager n'est appelé que si isWindowsMode est vrai.
  const manager = isWindowsMode ? useWindowManager() : null;

  const openWindow = useCallback((id: string, data?: ProjectData) => {
    if (manager) {
      manager.openWindow(id, data);
    } else {
      // Fallback ou log si appelé en mode classique sans gestionnaire
      console.warn("Attempted to open window outside of Windows Mode.");
    }
  }, [manager]);
  
  const resetWindowPosition = useCallback((id: string) => {
    if (manager) {
      manager.resetWindowPosition(id);
    }
  }, [manager]);

  return {
    isWindowsMode,
    openWindow,
    resetWindowPosition,
  };
}