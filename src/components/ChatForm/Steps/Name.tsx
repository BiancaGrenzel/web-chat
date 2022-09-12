import { Form, Formik } from "formik";
import { TextField } from "../../Textfield";
import * as Yup from "yup";
import { IoMdSend } from "react-icons/io";
import { useDataContext } from "../../../context";
import { Button, Container, InputContainer } from "../style";

const Name = () => {
  const { formAnswers, setFormAnswers } = useDataContext();

  const validate = Yup.object({
    name: Yup.string()
      .min(10, `Deve conter 10 caracteres ou mais.`)
      .max(40, "Deve conter 40 caracteres ou menos.")
      .required("Campo Obrigatório."),
  });

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(value) => {
        setFormAnswers({ ...formAnswers, name: value.name });
      }}
      validationSchema={validate}
    >
      {() => (
        <>
          <Container padding="0px">
            <InputContainer>
              <p>
                Olá, eu sou o chat de ajuda, tudo bem? <br />
                Para começarmos, preciso saber seu nome.
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
                  name="name"
                  label="Nome Completo"
                  type="string"
                  disabled={formAnswers.name !== "" ? true : false}
                />
                <Button
                  type="submit"
                  disabled={formAnswers.name !== "" ? true : false}
                >
                  <IoMdSend />
                </Button>
              </InputContainer>
            </Container>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default Name;
