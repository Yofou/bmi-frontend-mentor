import { clamp } from "../utils/clamp";

export type InputProps = {
  label?: string;
  unit: string;

  className?: string; 
  value: number;
  setValue?: (value: number) => void;

  max?: number;
};

export const Input: React.FC<InputProps> = (props) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (props.setValue) {
      const value = props.max ? clamp(event.target.valueAsNumber ?? 0, 0, props.max) : event.target.valueAsNumber ?? 0
      props.setValue(value);
    }
  };

  return (
    <label className={`flex flex-col gap-2 ${props.className}`}>
     {props.label && <span className="text-dark-electric-blue body-s">{props.label}</span>}

      <span className="flex px-6 py-5 gap-6 w-full rounded-xl border-borders border focus-within:border-blue transition-colors">
        <input
          className="bg-[transparent] focus:outline-none w-full text-gunmetal heading-m [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          max={props.max}
          min={0}
          value={props.value}
          onChange={onChange}
        />
        <span className="text-blue heading-m select-none">{props.unit}</span>
      </span>
    </label>
  );
};
