import ReactDOM from 'react-dom';
import './Modal.css';

interface Props {
    children: any;
    handleClose: () => void;
    isSalesModal: boolean;
}

const Modal = ({ children, handleClose, isSalesModal }: Props) => {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: '4px solid',
                borderColor: isSalesModal ? '#ff4500' : '#555',
                textAlign: 'center'
            }}>
                {children}

                <button
                    onClick={handleClose}
                    className={isSalesModal ? 'sales-btn' : ''}
                >Close</button>
            </div>
        </div>
    ), document.body)
}

export default Modal;
