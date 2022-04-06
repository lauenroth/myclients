import { FC } from 'react';

export type TableData = {
  id: string;
  value: string | number | Date | boolean;
  type?: 'string' | 'number' | 'date' | 'boolean';
};

interface TableProps {
  fields: string[];
  data: TableData[][] | null;
}

const Table: FC<TableProps> = ({ fields, data }) => {
  return (
    <section className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {fields.map((title, index) => (
                    <th
                      key={`table-title-${index}`}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((row, index) => (
                  <tr key={`table-row-${index}`}>
                    {row.map((cell, index) => (
                      <td key={`table-cell-${index}`} className="px-6 py-4 whitespace-nowrap">
                        {cell.value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Table };
