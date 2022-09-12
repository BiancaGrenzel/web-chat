import { FieldHookConfig } from "formik";

export type Props = FieldHookConfig<string> & {
  label?: string;
  minLength?: number;
  disabled?: boolean;
  mask?: string;
};
