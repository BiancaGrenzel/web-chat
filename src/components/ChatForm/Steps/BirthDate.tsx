import { Form, Formik } from "formik";
import { TextField } from "../../Textfield";
import * as Yup from "yup";
import { IoMdSend } from "react-icons/io";
import { useDataContext } from "../../../context";
import { useEffect, useState } from "react";
import { getAddressByCep } from "../../../service/address";
import { Address } from "../../../types";
import { Button, Container, InputContainer } from "../style";

const BirthDate = () => {
  const { formAnswers, setFormAnswers } = useDataContext();
  const [addressByCep, setAddressByCep] = useState<Address>();

  useEffect(() => {
    if (formAnswers.zip !== "") {
      getAddressByCep(formAnswers.zip).then((data) => {
        setAddressByCep(data);
      });
    }
  }, [formAnswers.zip]);

  const validate = Yup.object({
    birthDate: Yup.date()
      .required("Campo obrigatório.")
      .nullable()
      .typeError('Campo deve ser uma data válida.'),
  });

  return (
    <>
      {formAnswers.zip !== "" && (
        <Formik
          initialValues={{
            birthDate: "",
          }}
          onSubmit={(value) => {
            setFormAnswers({ ...formAnswers, birthDate: value.birthDate });
          }}
          validationSchema={validate}
        >
          {() => (
            <>
              <Container padding="0px">
                <InputContainer>
                  <p>
                    Legal, então você mora em {addressByCep?.localidade}, em{" "}
                    {addressByCep?.uf}. <br />E quando foi que você nasceu?
                  </p>
                </InputContainer>
              </Container>
              <Form>
                <Container
                  padding="0px"
                  width="100%"
                  display="flex"
                  justifyContent="flex-end"
                >
                  <InputContainer isClient>
                    <TextField
                      mask="99/99/99"
                      name="birthDate"
                      label="Data de Nascimento"
                      type="date"
                      disabled={formAnswers.birthDate !== "" ? true : false}
                    />
                    <Button
                      type="submit"
                      disabled={formAnswers.birthDate !== "" ? true : false}
                    >
                      <IoMdSend />
                    </Button>
                  </InputContainer>
                </Container>
              </Form>
            </>
          )}
        </Formik>
      )}
    </>
  );
};

export default BirthDate;
