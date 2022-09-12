import { FormAnswerValues } from "../types";

export const createHelper = async (values: FormAnswerValues) => {
  const response = await fetch(`http://mockapi.io/${values}`);
  const data = await response.json();
  console.log(data);
  return data;
};
