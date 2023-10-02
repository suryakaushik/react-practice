import { useEffect, useState, useContext } from 'react';

import { AppContext } from '../App';
import Controls from '../components/Controls';
import VehicleTable from '../components/VehicleTable';
import DropdownFilter from '../components/DropdownFilter';

import { useLocalStorage } from '../hooks/useStorage';

function VehicleList() {
  const { initVehicleList, initTollList } = useContext(AppContext);
  const [vehicleList, setVehicleList] = useState(initVehicleList);
  const [tollList, setTollList] = useState(initTollList);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [tollNameFilter, setTollNameFilter, delTollNameFilter] =
    useLocalStorage('tollNameFilter', 'All');
  const [vehicleNumberFilter, setVehicleNumberFilter, delVehicleNumberFilter] =
    useLocalStorage('vehicleNumberFilter', '');

  // To re-render the HomePage, when new entries are added
  useEffect(() => {
    setVehicleList(initVehicleList);
  }, [initVehicleList, initTollList]);

  // To filter by tollName and VehicleNumber
  useEffect(() => {
    const filterByVehicle = vehicleNumberFilter.toLowerCase();
    const filterByToll = tollNameFilter.toLowerCase();
    if (filterByToll != 'all' || filterByVehicle) {
      let newVehicleList = initVehicleList;
      if (filterByVehicle) {
        newVehicleList = newVehicleList.filter((item) => {
          return item['vehicleNumber'].toLowerCase().includes(filterByVehicle);
        });
      }
      if (filterByToll != 'all') {
        newVehicleList = newVehicleList.filter((item) => {
          return filterByToll === item['tollName'].toLowerCase();
        });
      }
      // console.log('Filtering-->', filterByVehicle, filterByToll);
      setVehicleList(newVehicleList);
    } else {
      setVehicleList(initVehicleList);
    }
  }, [tollNameFilter, vehicleNumberFilter]);

  const onInputChange = (e) => {
    setVehicleNumberFilter(e.target.value);
  };

  return (
    <section className="h-full flex flex-col z-10 bg-white">
      <h3 className="text-2xl text-left font-medium underline m-3">
        Vehicle/Toll Entries
      </h3>
      <div className="flex flex-col md:flex-row justify-between mt-6">
        <DropdownFilter
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          setTollNameFilter={setTollNameFilter}
          tollNameFilter={tollNameFilter}
          tollList={tollList}
        >
          <input
            placeholder="Search by Vehicle Number"
            type="text"
            value={vehicleNumberFilter}
            onChange={onInputChange}
            className="p-1 m-2 border border-2 rounded-md border-[#64ff98]"
          />
        </DropdownFilter>
        <Controls />
      </div>
      <VehicleTable vehicleList={vehicleList} />
    </section>
  );
}

export default VehicleList;
