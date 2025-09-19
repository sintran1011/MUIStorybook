import { forwardRef, type Key } from "react";
import BaseInput, { type InputProps } from ".";
import numeral from "numeral";

interface InputNumberProps extends Omit<InputProps, "onChange" | "ref"> {
  readOnly?: boolean;
  isReturnZeroWhenInputInvalid?: boolean;
  value?: Key;
  onChange?: (val?: Key | null) => void;
  decimals?: number;
  min?: number;
  max?: number;
  onValuesChange?: (val?: string | number) => void;
  decimal?: number;
  bordered?: boolean;
}

const regexNumber = /^[-\d.,]+$/;

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      readOnly,
      isReturnZeroWhenInputInvalid = false,
      min = 0,
      max,
      value,
      onChange = () => {},
      placeholder = "0",
      onBlur = () => {},
      onValuesChange = () => {},
      decimal = 0,
      onKeyDown = () => {},
      bordered = true,
      ...rest
    } = props;

    return (
      <BaseInput
        readOnly={readOnly}
        value={value}
        placeholder={placeholder}
        bordered={bordered}
        {...rest}
        type="number"
        onWheel={(e) => (e.target as HTMLInputElement).blur()}
        onKeyDown={(e) => {
          // Block "e", "E", "+", "-" when typing
          if (["e", "E", "+", "-"].includes(e.key)) {
            e.preventDefault();
          }
          onKeyDown(e);
        }}
        onPaste={(e) => {
          // Prevent pasting scientific notation
          const paste = e.clipboardData.getData("text");
          if (/[eE\\+\\-]/.test(paste)) {
            e.preventDefault();
          }
        }}
        onChange={(val) => {
          if (!val) {
            if (isReturnZeroWhenInputInvalid) {
              onChange(0);
              onValuesChange(0);
              return;
            }

            return onChange(null);
          }
          if (typeof val !== "string") return onChange(0);
          if (!regexNumber.test(val)) return onChange(0);
          const formatNum = val.replace(/(\..*)\./g, "$1"); // Prevent multiple dots
          const parseNumber = numeral(formatNum).value() || 0;
          onValuesChange(parseNumber);
          if (parseNumber < 0) return onChange(0);
          if (min && parseNumber < min) return onChange(min);
          if (max && parseNumber > max) return onChange(max);
          onChange(parseNumber);
        }}
        onBlur={(e) => {
          const num = Number(e.target.value);
          const fixedNum = num.toFixed(decimal);
          onChange(Number(fixedNum));
          onBlur(e);
        }}
        ref={ref}
      />
    );
  },
);

export default InputNumber;

InputNumber.displayName = "InputNumber";
