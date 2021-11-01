
import './ModalRemove.css';
import React, { FC } from 'react'
import { createPortal } from 'react-dom';

interface IModalRemoveProps {
  id: number,
  description: string,
  creationDate: string,
  hideModalRemove: boolean,
  toggleModalRemove: () => void,
  removeItem: (id: number) =>void,
}

const ModalRemove:FC<IModalRemoveProps> = ({id, hideModalRemove, description, creationDate, toggleModalRemove, removeItem  }) => {
  return createPortal (
    <div className={hideModalRemove ? 'hide': 'modal-remove__wrapper'}>
      <div className="modal-remove__container">
        <button className="modal-remove-btn__close" onClick={toggleModalRemove}>X</button>
        <div className="modal-remove__content">
          <h3>Are you sure you want to delete the task?</h3>
          <p className="modal-remove__description">{description}</p>
          <p>Date of creation : {creationDate}</p>
        </div>
        <div className="modal-remove-btn__container">
          <button className="modal-remove-btn modal-remove-btn_cancel" onClick={toggleModalRemove}>Cancel</button>
          <button  className="modal-remove-btn modal-remove-btn_ok" onClick={() =>removeItem(id)}>OK</button>
        </div>
      </div>
    </div>,
    document.getElementById('remove') as HTMLElement
  )
}

export default ModalRemove
