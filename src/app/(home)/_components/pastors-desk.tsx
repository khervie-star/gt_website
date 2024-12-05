/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

const MessageOfTheWeek = ({
  pastorName,
  pastorImage,
  shortDescription,
  fullMessage,
  title,
}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card className="max-w-4xl mx-auto flex flex-row items-center p-4 shadow-lg">
        <CardHeader className="flex-col items-start w-full">
          <div className="flex items-center w-full">
            <Image
              src={pastorImage}
              alt={pastorName}
              className="w-24 h-24 rounded-full object-cover mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="text-md text-gray-600">{pastorName}</p>
            </div>
          </div>

          <CardBody>
            <p className="mt-4 text-gray-700 line-clamp-3">
              {shortDescription}
            </p>

            <button
              onClick={onOpen}
              className="mt-2 text-blue-600 hover:underline">
              Read More
            </button>
          </CardBody>
        </CardHeader>
      </Card>

      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside">
        <ModalContent>
          <ModalHeader className="flex flex-col">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-md text-gray-600">{pastorName}</p>
          </ModalHeader>
          <ModalBody>
            <div className="prose max-w-none">{fullMessage}</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MessageOfTheWeek;
