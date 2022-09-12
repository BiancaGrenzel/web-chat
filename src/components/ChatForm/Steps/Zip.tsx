import { Form, Formik } from "formik";
import { TextField } from "../../Textfield";
import * as Yup from "yup";
import { IoMdSend } from "react-icons/io";
import { useDataContext } from "../../../context";
import { Button, Container, InputContainer } from "../style";

const ZipCode = () => {
  const { formAnswers, setFormAnswers } = useDataContext();

  const validate = Yup.object({
    zip: Yup.string()
      .transform((value) => value.replace(/[^\d]/g, ""))
      .min(8, "Deve conter 8 caracteres")
      .max(8, "Deve conter 8 caracteres")
      .required("Required"),
  });

  return (
    <>
      {formAnswers.name !== "" && (
        <Formik
          initialValues={{
            zip: "",
          }}
          onSubmit={(value) => {
            setFormAnswers({ ...formAnswers, zip: value.zip });
          }}
          validationSchema={validate}
        >
          {() => (
            <>
              <Container padding="0px">
                <InputContainer>
                  <p>
                    Que satisfação {formAnswers.name}. <br />
                    Agora que sei seu nome, qual o seu CEP?
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
                        mask="99999-999"
                        name="zip"
                        label="CEP"
                        type="text"
                        disabled={formAnswers.zip !== "" ? true : false}
                      />
                      <Button
                        type="submit"
                        disabled={formAnswers.zip !== "" ? true : false}
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

export default ZipCode;
