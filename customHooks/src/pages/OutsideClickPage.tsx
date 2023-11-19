import { useRef, useState, useEffect } from "react";
// import useOutSideClick from "../hooks/useOutsideClick";
import styled from "styled-components";
import { useRouter } from "../hooks/useRouter";
const OutsideClickPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { currentPath, back } = useRouter();

  const getCurrentPath = () => {
    alert(currentPath);
  };

  //outSideClick useEffect

  return (
    <div>
      {!isOpen && (
        <>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <RouterBtn onClick={() => back()}>Back</RouterBtn>
          <RouterBtn onClick={getCurrentPath}>getCurrentPath</RouterBtn>
        </>
      )}
      {isOpen && (
        <Modal ref={ref}>
          This is a modal. Click anywhere outside of me to close.
          <ModalButton onClick={() => setIsOpen(false)}>Close</ModalButton>
        </Modal>
      )}{" "}
    </div>
  );
};

export default OutsideClickPage;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  border: 1px solid yellow;
  padding: 1rem;
`;
const RouterBtn = styled.button`
  border: 1px solid yellow;
  border-radius: 7px;
  color: yellow;ß
`;

const ModalButton = styled.button`
  width: 5rem;
  height: 3rem;
  border-radius: 7px;
  border: 1px solid yellow;
`;
