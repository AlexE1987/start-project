import React from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

const ModalForm = ({ isModalClosed, modalToggle, isLogin, children }) => {
  return createPortal(
    <div className={isLogin || isModalClosed ? 'hide' : ''}>
      <div className="modal-wrapper">
        <div className="modal-container">
          <button className="close-btn" onClick={modalToggle}>
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
