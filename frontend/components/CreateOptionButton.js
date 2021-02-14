const CreateOptionButton = ({children, imgSrc, onClick}) => {
  return (
    <>
      <div className="buttonCard d-flex flex-column align-items-center justify-content-center" onClick={onClick}>
        <img src={imgSrc} alt="test" width="80%" style={{padding: "20px"}}/>
        <p style={{paddingTop: "40px"}}>
          {children}
        </p>
      </div>
    </>
  );
};

export default CreateOptionButton;

