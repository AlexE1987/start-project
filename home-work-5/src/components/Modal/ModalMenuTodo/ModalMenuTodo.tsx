import './ModalMenuTodo.css';
import React, { FC }  from 'react';
import { createPortal } from 'react-dom';

interface IModalMenuTodoProps {
  hideModalMenu: boolean,
  toggleModalMenu:() => void,
  children: React.ReactNode
}

const ModalMenuTodo:FC<IModalMenuTodoProps> = ({ hideModalMenu, toggleModalMenu, children}) => {
  return createPortal(
     <div className={hideModalMenu ? 'hide' : ''} >
        <div className="modal__wrapper" onClick={toggleModalMenu}>
          <div className="modal__container" onClick={(e) => e.stopPropagation()}>
            <div className="modal__content">{children}</div>
          </div>
        </div>
      </div>,
    document.getElementById('modal') as HTMLElement,
  );
}

export default ModalMenuTodo
