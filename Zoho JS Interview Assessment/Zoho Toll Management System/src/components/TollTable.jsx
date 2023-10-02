import { memo } from 'react';

const fareFormatter = (arr) => {
  return arr[0] + '/' + arr[1];
};

function TollTable({ tollList, deleteToll }) {
  return (
    <>
      <table className="p-3 mt-6 w-full">
        <thead className="bg-gray-400 p-1">
          <tr>
            <th>TOLL NAME</th>
            <th>CAR/JEEP/VAN</th>
            <th>LCV</th>
            <th>TRUCK/BUS</th>
            <th>HEAVY VEHICLE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {tollList.map((item, i) => {
            return (
              <tr key={item['tollName']}>
                <td>{item['tollName']}</td>
                <td>{fareFormatter(item['Car/Jeep/Van'])}</td>
                <td>{fareFormatter(item['LCV'])}</td>
                <td>{fareFormatter(item['Truck/Bus'])}</td>
                <td>{fareFormatter(item['Heavy vehicle'])}</td>
                <td>
                  <button onClick={() => deleteToll(item['tollName'])}>
                    {'Delete Toll'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {tollList.length == 0 && (
        <h3 className="m-2 text-center font-bold text-gray-500">
          {'Toll Not Found!'}
        </h3>
      )}
    </>
  );
}

export default memo(TollTable);
