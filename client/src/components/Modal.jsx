import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      < button onClick={() => setShowModal(true)}>
        Expand for contact info
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}



