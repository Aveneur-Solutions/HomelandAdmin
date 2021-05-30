import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

interface IProps {
  trigger: React.ReactNode;
  action: Function;
}

const DeleteImageModal: React.FC<IProps> = ({ trigger, action }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>Are you sure you want to delete this photo?</Modal.Header>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>No</Button>
        <Button
          color="red"
          onClick={() => {
            action();
            setOpen(false);
          }}
        >
          Yes, Delete permanently
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteImageModal;
