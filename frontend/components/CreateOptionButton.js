const CreateOptionButton = ({children, imgSrc, onClick}) => {
  return (
    <>
      <div className="buttonCard d-flex flex-column align-items-center justify-content-center" onClick={onClick}>
        <p>
          {children}
        </p>
      </div>
    </>
  );
};

export default CreateOptionButton;
