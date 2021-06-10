import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

interface IProps {
  trigger: React.ReactNode;
  action: Function;
  header: string;
}

const DeleteModal: React.FC<IProps> = ({ trigger, action, header }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>{header}</Modal.Header>
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

export default DeleteModal;
