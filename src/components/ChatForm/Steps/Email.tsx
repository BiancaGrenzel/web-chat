import { Form, Formik } from "formik";
import { TextField } from "../../Textfield";
import * as Yup from "yup";
import { IoMdSend } from "react-icons/io";
import { useDataContext } from "../../../context";
import { Button, Container, InputContainer } from "../style";

const Email = () => {
  const { formAnswers, setFormAnswers } = useDataContext();

  const validate = Yup.object({
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  });

  return (
    <>
      {formAnswers.birthDate !== "" && (
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(value) => {
            setFormAnswers({ ...formAnswers, email: value.email });
          }}
          validationSchema={validate}
        >
          {() => (
            <>
              <Container padding="0px">
                <InputContainer>
                  <p>Agora me fale seu e-mail, por gentileza.</p>
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
                      name="email"
                      label="E-mail"
                      type="email"
                      disabled={formAnswers.email !== "" ? true : false}
                    />
                    <Button
                      type="submit"
                      disabled={formAnswers.email !== "" ? true : false}
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

export default Email;
