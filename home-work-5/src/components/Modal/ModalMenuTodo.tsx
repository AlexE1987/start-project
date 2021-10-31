import './ModalMenuTodo.css';
import React, { FC }  from 'react';
import { createPortal } from 'react-dom';

interface IModalMenuTodoProps {
  hideModal: boolean,
  toggleModal:() => void,
  children: React.ReactNode
}

const ModalMenuTodo:FC<IModalMenuTodoProps> = ({ hideModal, toggleModal, children}) => {
  return createPortal(

     <div className={hideModal ? 'hide' : ''} >
        <div className="modal-wrapper" onClick={toggleModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </div>,
    document.getElementById('modal') as HTMLElement,
  );
}

export default ModalMenuTodo
