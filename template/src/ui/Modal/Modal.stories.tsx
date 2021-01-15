import React from 'react';
import { Modal } from './Modal';

export default {
  title: 'UI/Modal',
};

export const Default = () => (
  <Modal isOpen>
    {[...Array(20)].map((i, index) => (
      <div key={index}>Custom modal</div>
    ))}
  </Modal>
);
