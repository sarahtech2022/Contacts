import ModalContent from "./ModalContent";
import { useState } from "react";


export default function Modal(props) {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}> Expand for contact info </button>
      <ModalContent show={show} > {props.children} </ModalContent>
    </div>
  );
}
