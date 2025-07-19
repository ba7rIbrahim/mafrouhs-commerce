import { create } from "zustand";

export type CategoryType = "Living Room" | "Bedroom" | "Kitchen" | undefined;

interface FilterProducts {
  category: CategoryType;
  minPrice: undefined | number;
  maxPrice: undefined | number;
  setCategory: (category: CategoryType) => void;
  setMinPrice: (minPrice: number | undefined) => void;
  setMaxPrice: (maxPrice: number | undefined) => void;
  resetFilters: () => void;
}

export const useFilterProducts = create<FilterProducts>()((set) => ({
  category: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  setCategory: (category) => set({ category }),
  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  resetFilters: () =>
    set({ category: undefined, minPrice: undefined, maxPrice: undefined }),
}));
