import { CompactView, GridView, ListView } from "@/assets/svgs";
import { Label } from "@/components/ui/label";
import { useViewModeStore } from "@/stores/view-mode";

export const ViewLayouts = () => {
  const { viewMode, setViewMode } = useViewModeStore();

  return (
    <div className="flex flex-row justify-between md:flex-col gap-2 w-full border-t border-b py-2 md:py-0 border-[#E8ECEF] md:border-none md:w-fit">
      <Label>Sort by</Label>
      <div className="flex items-center border shadow-sm max-h-[35.99px] divide-x">
        <button
          onClick={() => setViewMode("grid")}
          className={`cursor-pointer w-8 p-1 rounded", ${viewMode === "grid" && "bg-section"}`}
        >
          <GridView />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`cursor-pointer w-8 p-1 rounded", ${viewMode === "list" && "bg-section"}`}
        >
          <ListView />
        </button>
        <button
          onClick={() => setViewMode("compact")}
          className={`cursor-pointer w-8 h-fit p-1 rounded", ${viewMode === "compact" && "bg-section"}`}
        >
          <CompactView />
        </button>
      </div>
    </div>
  );
};
