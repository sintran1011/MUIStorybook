import { Stack, SxProps, Theme, Typography } from "@mui/material";
import { theme } from "@styles/theme";
import {
  useId,
  Children,
  type CSSProperties,
  type JSXElementConstructor,
  type ReactElement,
  type ReactNode,
  cloneElement,
} from "react";
import { Controller, FormProvider } from "react-hook-form";
import type {
  Control,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChildProps = ReactElement<any, string | JSXElementConstructor<any>>;

interface IProps<T extends FieldValues> {
  className?: string;
  children: ReactNode;
  form: UseFormReturn<T, any, FieldValues>;
  onSubmit?: SubmitHandler<any>;
  onError?: (data: FieldErrors<T>) => void;
  formName?: string;
  style?: CSSProperties;
  // onValuesChange?: (val: Record<string, unknown>, allValues: Record<string, unknown>) => void;
}

interface FormItem {
  control?: Control<FieldValues, unknown>;
  children:
    | ChildProps
    | readonly ReactElement<unknown, string | JSXElementConstructor<unknown>>[];
  name: string;
  label?: string | ReactNode;
  className?: string;
  showError?: boolean;
  required?: boolean;
  sx?: SxProps<Theme>;
}

const BasicForm = <T extends FieldValues>(props: IProps<T>) => {
  const {
    className,
    children,
    form,
    onSubmit = () => {},
    formName = "formName",
    onError = () => {},
    style,
    // onValuesChange = () => {},
  } = props;
  const { handleSubmit } = form;

  const handleError = (err: FieldErrors<T>) => {
    onError(err);
  };

  return (
    <FormProvider {...form}>
      <form
        style={style}
        id={formName}
        onSubmit={handleSubmit(onSubmit, handleError)}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
};

const FormItem = (props: FormItem) => {
  const {
    children,
    name = "",
    label,
    className,
    showError = true,
    required = false,
    sx,
  } = props;
  const id = useId();
  return (
    <Controller
      name={name}
      control={props?.control}
      render={({ field: { onChange, value, ref }, fieldState }) => {
        let error: any;
        if (Array.isArray(fieldState?.error)) {
          error = fieldState?.error[0]?.message;
        } else error = fieldState?.error?.message;

        return (
          <Stack gap="4px" className={className} sx={sx}>
            {label ? (
              <label htmlFor={id}>
                <Typography
                  variant="body-medium"
                  color={error ? "text.negative.primary" : "text.primary"}
                  sx={
                    required
                      ? {
                          "&::after": {
                            content: "'*'",
                            marginLeft: "4px",
                            color: "text.negative.primary",
                          },
                        }
                      : {}
                  }
                >
                  {label}
                </Typography>
              </label>
            ) : null}
            {Children.map(children, (child: ChildProps) => {
              return cloneElement(child, {
                ...child?.props,
                id,
                onChange,
                value,
                ...(error
                  ? {
                      containersx: {
                        borderColor: `${theme.palette.interaction.border.alert}`,
                      },
                      style: {
                        borderColor: theme.palette.interaction.border.alert,
                      },
                    }
                  : null),
                ref,
              });
            })}
            {error && showError ? (
              <Typography
                sx={{
                  bottom: 0,
                  fontWeight: 500,
                  color: "text.negative.primary",
                }}
                variant="body-small"
              >
                {error}
              </Typography>
            ) : null}
          </Stack>
        );
      }}
    />
  );
};

const FormErrors = ({ message }: any) => (
  <Typography
    sx={{
      bottom: 0,
      fontWeight: 500,
      color: "text.negative.primary",
    }}
    variant="body-small"
  >
    {message}
  </Typography>
);

BasicForm.FormItem = FormItem;
BasicForm.FormErrors = FormErrors;

export default BasicForm;

BasicForm.displayName = "BasicForm";
