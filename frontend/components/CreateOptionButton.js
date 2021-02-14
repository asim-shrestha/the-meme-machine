const CreateOptionButton = ({children, onClick}) => {
  return (
    <>
      <div className="buttonCard " onClick={onClick}>
        <p>
          {children}
        </p>
      </div>
    </>
  );
};

export default CreateOptionButton;


