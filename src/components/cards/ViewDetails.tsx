import React from "react"
import './modal.css';

const Modal = ({ handleClose, show, value }: { handleClose: () => void, show: boolean, value: any }) => {
  const showHideClassName = show ? "block" : "none";
  return (
    <div className="container modal" style={{ display: showHideClassName }}>
      <div className={showHideClassName}>
        <div className="modal-main">
          <div onClick={handleClose} className="text-right close-modal mb-5">x</div>
          <div className="d-flex justify-content-between">
            <div>
              <p className="card-title text-bold">{value[0].value1}</p>
              <p>{value[1].value2}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div className="pt-3 card-details-modal">
              <p className="pt-1 text-center">
                {value[2].value3}
              </p>
            </div>
            <div className="pt-3 card-details-modal">
              <p className="pt-1 text-center">
                {value[3].value4}
              </p>
            </div>
            <div className="pt-3 card-details-modal">
              <p className="pt-1 text-center">
                {value[4].value5}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="pt-3 card-details-modal">
              <p className="pt-1 text-center">
                {value[5].value6}
              </p>
            </div>
            <div className="pt-3">
              <p className="pt-1 text-center">
                {value[6].value7}
              </p>
            </div>
            <div className="pt-3 card-details-modal">
              <p className="pt-1 text-center">
                {value[7].value8}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal;
