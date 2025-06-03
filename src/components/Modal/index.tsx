import React from "react";
import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.Header>
          {title && <S.Title>{title}</S.Title>}
          <S.CloseButton onClick={onClose} aria-label="Fechar modal">
            &times;
          </S.CloseButton>
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default Modal;