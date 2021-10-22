import React from "react";
import { SelectElement } from "./style";

interface ISelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  value: string | number | undefined;
}

export const SelectLocale: React.FC<ISelectProps> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <SelectElement onChange={onChange} value={value}>
      {options &&
        options.length > 0 &&
        options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
    </SelectElement>
  );
};
