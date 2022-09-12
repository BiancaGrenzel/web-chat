import { useState, createContext, useContext } from "react";
import { FormAnswerValues } from "../types";

// Context
export const DataContext = createContext({});

// Provider
interface IContext {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: IContext) => {
  const [formAnswers, setFormAnswers] = useState<FormAnswerValues>({
    name: "",
    birthDate: "",
    email: "",
    rate: "",
    zip: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DataContext.Provider
      value={{
        formAnswers,
        setFormAnswers,
        isModalOpen,
        setIsModalOpen
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Context Hook
interface IDataContext {
  formAnswers: FormAnswerValues;
  setFormAnswers: (value: FormAnswerValues) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;

}

export const useDataContext = () => useContext(DataContext) as IDataContext;
