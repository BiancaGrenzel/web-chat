import { Form, Formik } from "formik";
import { TextField } from "../../Textfield";
import * as Yup from "yup";
import { IoMdSend } from "react-icons/io";
import { useDataContext } from "../../../context";
import { Button, Container, InputContainer } from "../style";

const Rate = () => {
  const { formAnswers, setFormAnswers } = useDataContext();

  const validate = Yup.object({
    rate: Yup.string()
      .matches(/^[0-5]+$/, "Avaliação deve ser até 5")
      .min(1, "Deve conter 1 número")
      .typeError("Campo deve ser um valor válido")
      .required("Campo obrigatório"),
  });

  return (
    <>
      {formAnswers.email !== "" && (
        <Formik
          initialValues={{
            rate: "",
          }}
          onSubmit={(value) => {
            setFormAnswers({ ...formAnswers, rate: value.rate });
          }}
          validationSchema={validate}
        >
          {() => (
            <>
              <Container padding="0px">
                <InputContainer>
                  <p>
                    Você finalizou o teste. Faça uma avaliação (de 0 a 5
                    estrelas) sobre o processo que realizou até chegar aqui. Nós
                    agradecemos!
                  </p>
                </InputContainer>
              </Container>
              <>
                <Form>
                  <Container
                    padding="0px"
                    width="100%"
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <InputContainer isClient>
                      <TextField
                        mask="9"
                        name="rate"
                        label="Avaliação"
                        type="string"
                        disabled={formAnswers.rate !== "" ? true : false}
                      />
                      <Button
                        type="submit"
                        disabled={formAnswers.rate !== "" ? true : false}
                      >
                        <IoMdSend />
                      </Button>
                    </InputContainer>
                  </Container>
                </Form>
              </>
            </>
          )}
        </Formik>
      )}
    </>
  );
};

export default Rate;
