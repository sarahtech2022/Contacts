const ModalContent = (props) => {
  return (
    <div>
      {!props.show ? (
        <p>I'm the regual page</p>
      ) : (
        <h1 className="modalcontent">{props.children}</h1>
      )}
    </div>
  );
};

export default ModalContent;
