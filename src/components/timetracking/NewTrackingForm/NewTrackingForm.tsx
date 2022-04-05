import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SideOver } from '../../basics/SideOver/SideOver';

interface NewTrackingFormProps {
  open: boolean;
  onClose: () => void;
}

const NewTrackingForm: FC<NewTrackingFormProps> = ({ open, onClose }) => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(8.0);

  // reset to 8h when opening
  useEffect(() => {
    if (open) {
      setHours(8.0);
    }
  }, [open]);

  return (
    <SideOver open={open} onClose={onClose} title="Add time tracking">
      <TrackingForm
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ date, hours });
          onClose();
        }}
      >
        <div className="flex items-center justify-center">
          <div className="datepicker relative form-floating mb-3 xl:w-96">
            <input
              type="date"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={date.toISOString().split('T')[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </div>
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="12"
            value={hours}
            id="hours"
            step={0.25}
            onInput={(event) => setHours(parseFloat((event.target as HTMLInputElement).value))}
          />
          <p className="text-center">
            {Math.floor(hours)}:{hours % 1 !== 0 ? (hours % 1) * 60 : '00'}h
          </p>
        </div>
        <footer>
          <button type="submit" className="button btn btn-primary w-full bg-">
            Save time tracking
          </button>
        </footer>
      </TrackingForm>
    </SideOver>
  );
};

const TrackingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  #hours {
    width: 100%;
  }
  footer {
    margin-top: auto;
  }
`;

export { NewTrackingForm };
