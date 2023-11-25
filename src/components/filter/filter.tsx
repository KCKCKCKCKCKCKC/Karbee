import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineOpacity } from 'react-icons/md';

function Filter() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal 
        opened={opened} 
        onClose={close} 
        title="Filter" centered 
        styles={{root: { 
            border: 0,
            }
        }}>
        ADD MODAL CONTENT HERE
      </Modal>

      <Button variant="default" rightSection={<FaChevronDown size={14} />} onClick={open}>Filter</Button>
    </>
  );
}

export default Filter;