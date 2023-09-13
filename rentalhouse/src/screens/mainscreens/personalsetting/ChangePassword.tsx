import React from "react";
import { useDisclosure, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function ChangePassword() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <p  onClick={onOpen} className="text-blue-500 hover:cursor-pointer">Change Password</p>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Input fields with labels */}
            <FormControl>
              <FormLabel>New Password</FormLabel>
              <Input type="text" placeholder="Enter your new Password" />
            </FormControl>

            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChangePassword;
