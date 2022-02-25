import { FC } from 'react';

const FloatingButton: FC = () => {
  return (
    <div>
      <button
        className="fixed bottom-0 right-0 mb-4 mr-4 p-4 bg-blue-500 text-white rounded-full shadow-lg"
        onClick={() => console.log('click')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="16" height="16" viewBox="0 0 24 24">
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
      </button>
    </div>
  );
};

export { FloatingButton };
