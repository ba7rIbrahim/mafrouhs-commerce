import { Label } from "@/components/ui/label";
import { useFilterProducts, type CategoryType } from "@/stores/filter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProductFilter = () => {
  const {
    category,
    setCategory,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
  } = useFilterProducts();

  return (
    <div className="flex flex-col gap-4 w-full md:flex-row md:w-fit">
      <div className="flex flex-col gap-y-2 w-full">
        <Label>Category</Label>
        <Select
          value={category ?? "All"}
          onValueChange={(value: string) => {
            if (value === "All") setCategory(undefined);
            else setCategory(value as CategoryType);
          }}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Living Room">Living Room</SelectItem>
            <SelectItem value="Bedroom">Bedroom</SelectItem>
            <SelectItem value="Kitchen">Kitchen</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <Label>Price</Label>
        <Select
          value={
            minPrice === undefined && maxPrice === undefined
              ? "All"
              : minPrice !== undefined && maxPrice !== undefined
                ? `${minPrice}-${maxPrice}`
                : minPrice !== undefined
                  ? `${minPrice}`
                  : ""
          }
          onValueChange={(value) => {
            if (value === "All") {
              setMinPrice(undefined);
              setMaxPrice(undefined);
            } else if (value.includes("-")) {
              const [min, max] = value.split("-").map((n) => +n);
              setMinPrice(min);
              setMaxPrice(max);
            } else {
              const min = parseFloat(value);
              setMinPrice(min);
              setMaxPrice(undefined);
            }
          }}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Price</SelectItem>
            <SelectItem value="0-99.199">$0.00 - 199.99</SelectItem>
            <SelectItem value="200-499.99">$200.00 - 499.99</SelectItem>
            <SelectItem value="500-799.99">$500.00 - 799.99</SelectItem>
            <SelectItem value="800">$800.00+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
