import { useField } from "formik";
import { Container } from "../ChatForm/style";
import { ErrorMessageStyled, InputMaskStyled } from "./style";
import { Props } from "./types";

export const TextField = ({
  label,
  minLength,
  disabled,
  mask,
  ...props
}: Props) => {
  const [field, meta] = useField(props);

  return (
    <Container
      display="flex"
      flexDirection="column"
      backgroundColor="transparent"
      width="100%"
    >
      <label htmlFor={field.name}>{label}</label>
      <InputMaskStyled
        mask={mask ? mask : ""}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        isOnError={meta.error !== undefined ? true : false}
        {...field}
        minLength={minLength}
        autoComplete="off"
        disabled={disabled}
      />
      <ErrorMessageStyled component="div" name={field.name} className="error" />
    </Container>
  );
};
