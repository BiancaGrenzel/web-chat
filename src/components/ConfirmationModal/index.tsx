import {
  Container,
  CloseContainer,
  Modal,
  Title,
  Subtitle,
  Text,
  SpaceBetween,
} from "./style";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { ConfirmProps } from "./types";
import Button from "../Button";
import { useDataContext } from "../../context";

const ConfirmationModal = ({
  cancelText,
  confirmText,
  onClickCancel,
  onClickConfirm,
  onClose,
  subtitle,
  text,
  title,
  open,
}: ConfirmProps) => {
  // const { isModalOpen, setIsModalOpen } = useDataContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(open);
    console.log(open)
  }, [open]);

  if (isModalOpen === true) {
    return (
      <Container>
        <Modal>
          <CloseContainer onClick={onClose}>
            <IoMdClose />
          </CloseContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Text>{text}</Text>
          <SpaceBetween>
            <Button color="success" onClick={onClickConfirm} fullWidth>
              {confirmText}
            </Button>
            <Button color="inherit" onClick={onClickCancel} fullWidth>
              {cancelText}
            </Button>
          </SpaceBetween>
        </Modal>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default ConfirmationModal;
