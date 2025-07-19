import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ViewMode = "grid" | "list" | "compact";

interface ViewModeStore {
  viewMode: ViewMode;
  setViewMode: (view: ViewMode) => void;
}

export const useViewModeStore = create<ViewModeStore>()(
  persist(
    (set) => ({
      viewMode: "grid",
      setViewMode: (view) => set(() => ({ viewMode: view })),
    }),
    { name: "view-mode" }
  )
);
