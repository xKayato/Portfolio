import { useDisplayMode } from "@/context/DisplayModeContext";

export function useIsWindowsMode() {
  const { mode } = useDisplayMode();
  return mode === 'windows';
}