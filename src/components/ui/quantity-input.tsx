interface QuantityInputProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  min?: number;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({
  quantity,
  setQuantity,
  min = 1,
}: QuantityInputProps) => {
  return (
    <div className="flex items-center h-7 rounded-sm border border-gray-200 md:h-8 w-fit">
      <button
        type="button"
        className="w-6 leading-10 text-gray-600 transition md:w-8 hover:opacity-75"
        onClick={() => setQuantity(Math.max(min, quantity - 1))}
      >
        -
      </button>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min={min}
        value={quantity}
        className="w-4 md:w-5 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        onChange={(e) => setQuantity(Math.max(min, Number(e.target.value)))}
      />

      <button
        type="button"
        className="w-6 leading-10 text-gray-600 transition md:w-8 hover:opacity-75"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};
