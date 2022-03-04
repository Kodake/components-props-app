import ReactDOM from 'react-dom';

import './Modal.css';

interface Props {
    children: any;
    handleClose: () => void;
}

const Modal = ({ children, handleClose }: Props) => {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                {children}

                <button onClick={handleClose} >Close</button>
            </div>
        </div>
    ), document.body)
}

export default Modal;
