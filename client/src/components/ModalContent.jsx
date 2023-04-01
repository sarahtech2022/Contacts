const ModalContent = (props) => {
  return (
    <div>
      {!props.show ? (
        <p></p>
      ) : (
        <h5 className="modalcontent">{props.children}</h5>
      )}
    </div>
  );
};

export default ModalContent;
