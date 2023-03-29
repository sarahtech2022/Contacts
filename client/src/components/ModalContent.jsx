const ModalContent = (props) => {
  return (
    <div>
      {!props.show ? (
        <p>I'm the regual page</p>
      ) : (
        <h5 className="modalcontent">{props.children}</h5>
      )}
    </div>
  );
};

export default ModalContent;
