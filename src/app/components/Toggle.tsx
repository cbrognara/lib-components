interface ToggleProps {
  onChange: any;
  checked: boolean;
}

export function Toggle({ onChange, checked }: ToggleProps) {
  return (
    <label
      for="check"
      className="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full"
    >
      <input
        type="checkbox"
        id="check"
        checked={checked}
        className="sr-only peer"
        onChange={onChange}
      />
      <span className="w-2/5 h-4/5 bg-blue-300 absolute rounded-full left-1 top-1 peer-checked:bg-blue-600 peer-checked:left-11 transition-all duration-500"></span>
    </label>
  );
}
