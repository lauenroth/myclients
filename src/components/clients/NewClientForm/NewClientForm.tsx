import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface NewClientFormProps {
  show: boolean;
  onClose: () => void;
}

const NewClientForm: FC<NewClientFormProps> = ({ show, onClose }) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="form" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
        <h2>NewClientForm</h2>
        <p>
          <button onClick={onClose}>Close</button>
        </p>
      </Dialog>
    </Transition.Root>
  );
};

export { NewClientForm };
