import Name from "./Steps/Name";
import Email from "./Steps/Email";
import { useDataContext } from "../../context";
import ZipCode from "./Steps/Zip";
import BirthDate from "./Steps/BirthDate";
import Rate from "./Steps/Rate";
import { createHelper } from "../../service/helper";
import { Container } from "./style";
import Button from "../Button";
import ConfirmationModal from "../ConfirmationModal";
import { useState } from "react";

const ChatForm = () => {
  const { formAnswers, setFormAnswers } = useDataContext();
  const [isModalSaveOpen, setIsModalSaveOpen] = useState(false);
  const [isModalCleanOpen, setIsModalCleanOpen] = useState(false);

  console.log(isModalSaveOpen);

  const submitForm = () => {
    setIsModalSaveOpen(false);
    createHelper(formAnswers);
    setFormAnswers({
      name: "",
      birthDate: "",
      email: "",
      rate: "",
      zip: "",
    });
  };

  const resetForm = () => {
    setIsModalCleanOpen(false);
    setFormAnswers({
      name: "",
      birthDate: "",
      email: "",
      rate: "",
      zip: "",
    });
  };

  return (
    <>
      <Container
        justifyContent="end"
        flexDirection="column"
        margin="32px"
        overflow="auto"
        width="40%"
        tabletWidth="70%"
        mobileWidth="100%"
        gap="24px"
        padding="32px"
      >
        <Name />
        <ZipCode />
        <BirthDate />
        <Email />
        <Rate />

        {formAnswers.rate !== "" && (
          <>
            <Button
              color="success"
              fullWidth
              type="submit"
              onClick={() => setIsModalSaveOpen(true)}
            >
              Salvar
            </Button>
            <Button
              color="inherit"
              fullWidth
              type="reset"
              onClick={() => setIsModalCleanOpen(true)}
            >
              Limpar
            </Button>
          </>
        )}
      </Container>
      <ConfirmationModal
        title="Salvar"
        subtitle="Deseja salvar suas informações?"
        text="Ao salvar suas informações, elas irão ser enviadas ao nosso suporte."
        cancelText="Cancelar"
        confirmText="Confirmar"
        open={isModalSaveOpen}
        onClickCancel={() => setIsModalSaveOpen(false)}
        onClickConfirm={() => submitForm()}
        onClose={() => setIsModalSaveOpen(false)}
      />
      <ConfirmationModal
        title="Limpar"
        subtitle="Deseja limpar suas informações?"
        text="Ao limpar suas informações, elas irão ser apagadas para sempre."
        cancelText="Cancelar"
        confirmText="Confirmar"
        open={isModalCleanOpen}
        onClickCancel={() => setIsModalCleanOpen(false)}
        onClickConfirm={() => resetForm()}
        onClose={() => setIsModalCleanOpen(false)}
      />
    </>
  );
};

export default ChatForm;
