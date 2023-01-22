import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';

import './Modal.css';

interface ModalProps {
    open: boolean;
    children: ReactNode;
    onClose: () => void;
}

export default function Modal({ open, children, onClose }: ModalProps) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="ModalOverlay" onClick={onClose} />
            <div className="Modal__OutsideWrapper">
                <div className="Modal__InsideWrapper">
                    <div className="Modal__InsideWrapper__Top">
                        <div className="Modal__Close" onClick={onClose}>
                            <GrClose />
                        </div>
                    </div>

                    <div>{children}</div>
                </div>
            </div>
        </>,
        document.getElementById('portal')!
    );
}
