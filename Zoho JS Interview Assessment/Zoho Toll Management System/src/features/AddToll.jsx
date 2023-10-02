import { useEffect, useState, useContext, memo, useRef } from 'react';

import Modal from '../components/Modal';
import { AppContext, displayTitle } from '../App';

import vehicleTypes from '../assets/vehicleTypes.json';

function AddToll() {
  const { initTollList, setInitTollList, toggleAddToll, setToggleAddToll } =
    useContext(AppContext);
  // used ref for perormance optimisation
  const tollName = useRef('');
  const [vehicleFareList, setVehicleFareList] = useState({});

  const onFareChange = (e, item, param = '1') => {
    if (e.target.value == '') {
      let res = { ...vehicleFareList };
      delete res[item + param];
      setVehicleFareList(res);
      return;
    }
    setVehicleFareList((a) => {
      return { ...a, [item + param]: e.target.value };
    });
  };

  const onCloseModal = () => setToggleAddToll((a) => !a);
  const addEntry = () => {
    if (Object.keys(vehicleFareList).length == 8 && tollName.current.value) {
      let res = {};
      for (let i of vehicleTypes) {
        res[i] = [vehicleFareList[i + '1'], vehicleFareList[i + '2']];
      }
      setInitTollList((a) => {
        return [
          ...a,
          {
            tollName: tollName.current.value,
            ...res,
          },
        ];
      });
      onCloseModal();
    }
  };
  return (
    <Modal title="Add new Toll" onHideModal={onCloseModal}>
      <div className="flex flex-col justify-between text-left m-6">
        <label className="flex flex-row">
          {displayTitle('Toll Name')}
          <input
            placeholder="Enter toll name"
            type="text"
            required
            pattern="[a-zA-Z0-9\s]+"
            ref={tollName}
            className="p-1 m-1 border border-2 rounded-md border-[#64ff98]"
          />
        </label>

        <div className="mt-4">
          {displayTitle('Vehicle fare details')}
          {vehicleTypes.map((item, i) => (
            <label key={item} className="flex flex-row">
              <h2 className="w-1/4 font-medium text-md mt-4">{item}</h2>
              <input
                placeholder="Single Journey"
                type="number"
                required
                min={0}
                onChange={(e) => onFareChange(e, item, '1')}
                className="p-2 m-1 border border-2 rounded-md border-[#64ff98]"
              />
              <input
                placeholder="Return Journey"
                type="number"
                required
                min={0}
                onChange={(e) => onFareChange(e, item, '2')}
                className="p-2 m-1 border border-2 rounded-md border-[#64ff98]"
              />
            </label>
          ))}
        </div>
      </div>

      <button
        className="bg-blue-500 m-1 px-4 py-2 rounded-lg text-white text-lg"
        onClick={addEntry}
      >
        Add details
      </button>
    </Modal>
  );
}

export default memo(AddToll);
