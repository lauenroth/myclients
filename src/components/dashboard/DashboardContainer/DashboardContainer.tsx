import { FC } from 'react';

interface DashboardContainerProps {
  title?: string;
}

const DashboardContainer: FC<DashboardContainerProps> = ({ title, children }) => {
  return (
    <section className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
      {title && <h2 className="text-l">{title}</h2>}
      {children}
    </section>
  );
};

export { DashboardContainer };
