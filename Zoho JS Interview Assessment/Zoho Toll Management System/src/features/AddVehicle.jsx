import { useEffect, useState, useContext, memo } from 'react';

import { AppContext, displayTitle } from '../App';
import vehicleTypes from '../assets/vehicleTypes.json';

import Modal from '../components/Modal';
import SelectComponent from '../components/SelectComponent';

function AddVehicle() {
  const {
    initVehicleList,
    setInitVehicleList,
    initTollList,
    setToggleAddVehicle,
  } = useContext(AppContext);
  const tollList = initTollList.map((item) => item['tollName']);

  const [vehicleType, setVehicleType] = useState(vehicleTypes[0]);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [tollName, setTollName] = useState(tollList[0]);
  const [tarrif, setTarrif] = useState(0);

  const onInputChange1 = (e) => {
    setVehicleType(e.target.value);
  };
  const onInputChange2 = (e) => {
    setVehicleNumber(e.target.value);
  };
  const onInputChange3 = (e) => {
    setTollName(e.target.value);
  };

  // To set the tarrif, when other fields are filled
  useEffect(() => {
    let val = [0, 0];
    let isVehicleSeenAtToll = false;
    let vehicleLastSeenTime = new Date();
    initTollList.map((item) => {
      if (tollName == item['tollName']) {
        val = item[vehicleType];
      }
    });

    for (let item of initVehicleList) {
      if (
        vehicleNumber == item['vehicleNumber'] &&
        vehicleType == item['vehicleType']
      ) {
        isVehicleSeenAtToll = true;
        vehicleLastSeenTime = item['dateTime'];
        break;
      }
    }
    if (!isVehicleSeenAtToll) {
      setTarrif(Number(val[0]));
      return;
    }
    const diff =
      (new Date().getTime() / 1000 -
        new Date(vehicleLastSeenTime).getTime() / 1000) /
      (60 * 60);
    if (diff <= 1) {
      setTarrif(Number(val[1]));
    } else {
      setTarrif(Number(val[0]));
    }
  }, [vehicleType, tollName, vehicleNumber]);

  const onCloseModal = () => setToggleAddVehicle((a) => !a);
  const addEntry = () => {
    if (vehicleNumber && vehicleType && tollName) {
      setInitVehicleList([
        {
          vehicleType,
          vehicleNumber,
          dateTime: new Date(),
          tollName,
          tarrif,
        },
        ...initVehicleList,
      ]);
      onCloseModal();
    }
  };

  return (
    <Modal title="Add new Entry" onHideModal={onCloseModal}>
      <div className="flex flex-col justify-between text-left m-6">
        <SelectComponent
          title={'Vehicle type'}
          list={vehicleTypes}
          value={vehicleType}
          onChange={onInputChange1}
        />

        <label className="m-1 flex flex-row">
          {displayTitle('Vehicle Number')}
          <input
            placeholder="Enter vehicle number"
            type="text"
            required
            pattern="[a-zA-Z0-9\s]+"
            onChange={onInputChange2}
            className="p-1 m-1 border border-2 rounded-md border-[#64ff98]"
          />
        </label>

        <SelectComponent
          title={'Toll Name'}
          list={tollList}
          value={tollName}
          onChange={onInputChange3}
        />

        <label className="m-1 flex flex-row">
          {displayTitle('Tariff')}
          <input
            placeholder="Enter tariff amount"
            type="number"
            value={tarrif}
            disabled
            className="p-1 m-1 border border-2 rounded-md border-[#64ff98] bg-gray-200"
          />
        </label>
      </div>

      <button
        className="bg-blue-500 m-1 px-4 py-2 rounded-lg text-white text-lg"
        onClick={addEntry}
      >
        Add Entry
      </button>
    </Modal>
  );
}

export default memo(AddVehicle);
