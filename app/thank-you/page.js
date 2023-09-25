

const Page = () => {
  return (
    <>
      <div className="container cont">
        <div className="checkmark-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="checkmark-icon"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="green"
            />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <h1 className="heading1">Thank You!</h1>
        <p className="message">Your message has been received.</p>
      </div>
    </>
  );
};

export default Page;
