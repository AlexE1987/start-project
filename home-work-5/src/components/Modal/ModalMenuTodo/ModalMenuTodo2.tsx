import './ModalMenuTodo.css';
import React, { FC, useEffect }  from 'react';
import { createPortal } from 'react-dom';

interface IModalMenuTodoProps {
  hideModalMenu: boolean,
  toggleModalMenu:() => void,
  children: React.ReactNode
}

    
const modalRoot = document.getElementById('modal') as HTMLElement;

const ModalMenuTodo:FC<IModalMenuTodoProps> = ({ hideModalMenu, toggleModalMenu, children}) => {
  const modalElement = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement)
    }
  }, [modalElement])
  return createPortal(
     <div className={hideModalMenu ? 'hide' : ''} >
        <div className="modal__wrapper" onClick={toggleModalMenu}>
          <div className="modal__container" onClick={(e) => e.stopPropagation()}>
            <div className="modal__content">{children}</div>
          </div>
        </div>
      </div>,
      modalRoot
  );
}

export default ModalMenuTodo
