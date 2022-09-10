import { ErrorMessage, useField } from "formik";
import { Props } from "./types";

export const TextField = ({ label, ...props }: Props) => {
  console.log(props);
  const [field, meta] = useField(props);
  return (
    <div className="mb-2" data-testId="container-textfield">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
