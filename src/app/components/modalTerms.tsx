'use client'
import React from 'react';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {
  return showModal ? (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold text-black">
                Terms of Service and Privacy Policy
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-md leading-relaxed">
                Website is a 100% independent news service and is not responsible for the offers published here. For each advertisement, we strive to obtain the clearest and most complete information possible. Whenever available, we include the official information of each promotion and establishment.

                <br /> If any of the offers are not honored by any of the institutions or if you need more information about this promotion, we kindly ask you to share by commenting on the specific offer so that other consumers have this valuable information. We are a true community of smart shoppers! We also suggest that you contact the customer service department of the company(ies) responsible and file a complaint.

                <br /> All logos and images displayed here are solely the property of the companies referenced and are presented for illustrative purposes.

                <br /> Editors and moderators can edit or delete content published on this site at any time. Some reasons for doing so may include creating offers or not adhering to the site&apos;s rules (please read the code of conduct).

                <br /> Copying our content to other sites without permission is prohibited.

                <br />  Only administrators have access to the email address on Pelando, and these will never be shared with third parties unless required by law.
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="bg-teal-700 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Accept Terms
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-25 fixed inset-0 z-40 bg-black"
        onClick={closeModal}
      ></div>
    </>
  ) : null;
};


export default Modal;