import React from 'react';
import { Modal } from '../../index';
import { ScreenLine } from '../../../screens/HomeDetailScreen/styles';

import { LocationsModalContainer } from './styles';

type LocationsModalProps = {
  visible: boolean;
  onClose: () => void;
  inputModal: JSX.Element;
};

export function LocationsModal({
  visible,
  onClose,
  inputModal,
}: LocationsModalProps) {
  return (
    <Modal visible={visible} onClose={onClose} title="Search" background>
      <ScreenLine />
      <LocationsModalContainer>{inputModal}</LocationsModalContainer>
    </Modal>
  );
}
