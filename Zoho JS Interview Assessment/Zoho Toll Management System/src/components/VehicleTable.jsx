import { memo } from 'react';

function VehicleTable({ vehicleList }) {
  return (
    <>
      <table className="p-3 mt-6 w-full">
        <thead className="bg-gray-400 p-1">
          <tr>
            <th>VEHICLE TYPE</th>
            <th>VEHICLE NUMBER</th>
            <th>DATE/TIME</th>
            <th>TOLL NAME</th>
            <th>TARIFF</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList.map((item, i) => {
            return (
              <tr key={new Date(item['dateTime']).toLocaleString()}>
                <td>{item['vehicleType']}</td>
                <td>{item['vehicleNumber']}</td>
                <td>{new Date(item['dateTime']).toLocaleString()}</td>
                <td>{item['tollName']}</td>
                <td>{item['tarrif']}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {vehicleList.length == 0 && (
        <h3 className="m-2 text-center font-bold text-gray-500">
          {'Entries Not Found!'}
        </h3>
      )}
    </>
  );
}

export default memo(VehicleTable);
