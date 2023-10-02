import React from 'react';
import CloseLogo from '../assets/close.svg';

function Modal(props) {
  const {
    onHideModal,
    title,
    children,
    contStyle = 'w-4/5 h-4/5 max-w-full',
  } = props;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <section
      onClick={stopPropagation}
      className={`overflow-auto absolute z-50 transition ease-in-out duration-1000 delay-600`}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div
        onClick={onHideModal}
        className="left-0 top-0 bottom-0 right-0 w-full h-full fixed backdrop-blur-sm bg-black/30 dark:bg-white/30"
      />
      <div
        className={`${contStyle} top-0 right-0 bottom-0 left-0 m-auto fixed bg-white max-h-screen rounded`}
      >
        <div className="overflow-auto left-0 top-0 w-full h-full absolute">
          <div className="flex flex-row justify-between items-center border-b border-gray-400">
            {title && (
              <>
                <h2 className="px-6 py-3 text-xl border-b font-bold leading-normal text-gray-800">
                  {title}
                </h2>
                <button
                  onClick={onHideModal}
                  type="button"
                  className="px-3 py-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  aria-label="Close"
                >
                  <img
                    width="26"
                    height="26"
                    src={CloseLogo}
                    alt="Close"
                    draggable="false"
                  />
                </button>
              </>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

Modal.defaultProps = {
  onHideModal: null,
  title: '',
  children: null,
};

export default React.memo(Modal);
