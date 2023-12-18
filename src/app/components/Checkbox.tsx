interface CheckboxProps {
  label: string;
  value: any;
  onChange: any;
}

export function Checkbox({ label, value, onChange }: CheckboxProps) {
  return (
    <div className="mx-auto max-w-md">
      <ul>
        <li className="relative flex w-80 items-center justify-center gap-2.5 border-b-2 bg-white px-3 py-3.5 cursor-pointer hover:border-blue-400">
          <input
            type="checkbox"
            id={value}
            name={value}
            value={value}
            className="peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full
            checked:bg-[url('/check.svg')] checked:bg-[length:16px] checked:bg-center checked:bg-no-repeat checked:content-['']
             checked:bg-blue-500 hover:ring hover:ring-blue-300 focus:outline-none"
            onChange={onChange}
          />
          <label
            for={value}
            className="w-full cursor-pointer font-medium text-blue-700 peer-checked:text-blue-400 peer-checked:underline"
          >
            {label}
          </label>
        </li>
      </ul>
    </div>
  );
}
