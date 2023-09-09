'use client'
import React from 'react';
import Modal from './modalTerms';

interface NewsletterProps {
}

const Newsletter: React.FC<NewsletterProps> = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const closeModal = () => {
    setShowModal(false);
  };



  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <div className="flex flex-wrap justify-center bg-white py-6 px-4 border rounded-lg w-80 mb-4">
      <div className="grow-0 shrink-0 basis-auto w-full">

        <div className="grid lg:grid-cols-1 items-center">
          <div className="mb-5 lg:mb-0">
            <p className="text-lg font-semibold text-gray-900">Get more updates...</p>
          </div>
          <div className="md:mb-0 flex flex-col items-center">
            <div className="md:flex flex-row my-4">
              {!isEmailValid ? (
                <p>Please enter a valid email address</p>
              ) : null}
              <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email address here"
                  value={email}
                  onChange={handleInput}
                  className="p-2 text-base text-gray-700 border-2 border-gray-300 rounded-md"
                />

                <button
                  type="submit"
                  className="m-2 p-2 w-40 bg-teal-700 border-none text-white text-base rounded-md cursor-pointer"
                >
                  Subscribe
                </button>
              </form>

            </div>
            <div className="my-4 lg:mb-0">
              <p className="text-md text-blue-500 hover:text-blue-700 cursor-pointer">
                <span onClick={() => setShowModal(true)}> Terms of Service and Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <Modal showModal={showModal} closeModal={closeModal} />) : null}
    </div>
  );
};

export default Newsletter;