import { createContext, useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import VehicleList from './features/VehicleList.jsx';
import './App.css';
import tollList from './assets/tollList.json';
import vehicleList from './assets/vehicleList.json';

import { useLocalStorage } from './hooks/useStorage';

const TollList = lazy(() =>
  import(/* webpackPreload: 2 */ './features/TollList.jsx')
);
const AddToll = lazy(() =>
  import(/* webpackPreload: 2 */ './features/AddToll.jsx')
);
const AddVehicle = lazy(() =>
  import(/* webpackPreload: 2 */ './features/AddVehicle.jsx')
);

export const AppContext = createContext();

export function displayTitle(title) {
  return (
    <h1 className="w-1/4 text-xl font-bold">
      {title}
      <sup className="text-red-500">*</sup>
    </h1>
  );
}

function App() {
  const [initVehicleList, setInitVehicleList, delInitVehicleList] =
    useLocalStorage('initVehicleList', vehicleList);
  const [initTollList, setInitTollList, delInitTollList] = useLocalStorage(
    'initTollList',
    tollList
  );

  useEffect(() => {
    // make an api call to get data instead of using json files from "asests" folder
  }, []);

  const [toggleAddToll, setToggleAddToll] = useState(false);
  const [toggleAddVehicle, setToggleAddVehicle] = useState(false);

  return (
    <Suspense fallback={'Loading...'}>
      <main>
        <h1 className="text-4xl font-bold m-1">
          Welcome to Toll Management App!
        </h1>
      </main>
      <AppContext.Provider
        value={{
          initVehicleList,
          setInitVehicleList,
          initTollList,
          setInitTollList,
          toggleAddToll,
          setToggleAddToll,
          toggleAddVehicle,
          setToggleAddVehicle,
        }}
      >
        <Routes>
          <Route path="/" element={<VehicleList />} />
          <Route path="/viewTolls" element={<TollList />} />
        </Routes>
        {toggleAddToll && <AddToll />}
        {toggleAddVehicle && <AddVehicle />}
      </AppContext.Provider>
    </Suspense>
  );
}

export default App;
