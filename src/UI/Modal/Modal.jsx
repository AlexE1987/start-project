import React from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

const ModalForm = ({ isModalOpened, setIsModalClosed, children }) => {
  if (!isModalOpened) return null;
  return createPortal(
    <div>
      <div className="modal-wrapper">
        <div className="modal-container">
          <button className="close-btn" onClick={setIsModalClosed}>
            X
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default ModalForm;
