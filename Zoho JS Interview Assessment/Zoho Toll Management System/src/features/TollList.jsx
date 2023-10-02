import { useEffect, useState, useContext } from 'react';

import { AppContext } from '../App';
import Controls from '../components/Controls';
import TollTable from '../components/TollTable';

import { useLocalStorage } from '../hooks/useStorage';

function TollList() {
  const { initTollList, setInitTollList } = useContext(AppContext);
  const [tollList, setTollList] = useState(initTollList);

  const [tollNameFilter, setTollNameFilter, delTollNameFilter] =
    useLocalStorage('filterTollList', '');

  // To filter by tollName
  useEffect(() => {
    const filterBy = tollNameFilter.toLowerCase();
    if (filterBy != '') {
      const newTollList = initTollList.filter(({ tollName }) => {
        return tollName.toLowerCase().includes(filterBy);
      });
      // console.log('Filtering-->', filterBy);
      setTollList(newTollList);
    } else {
      setTollList(initTollList);
    }
  }, [tollNameFilter, initTollList]);

  const onInputChange = (e) => {
    setTollNameFilter(e.target.value);
  };
  const deleteToll = (tollName) => {
    const newTollList = tollList.filter((item) => {
      return tollName !== item.tollName;
    });
    setTollList(newTollList);
    //Change initial Toll List(Using Context API)
    setInitTollList(newTollList);
  };

  return (
    <section className="h-full">
      <h3 className="text-2xl text-left font-medium underline m-3">
        Tollgate List
      </h3>
      <div className="flex flex-col md:flex-row justify-between mt-6">
        <input
          placeholder="Search by toll name"
          type="text"
          value={tollNameFilter}
          onChange={onInputChange}
          className="p-1 m-2 border border-2 rounded-md border-[#64ff98]"
        />
        <Controls />
      </div>

      <TollTable deleteToll={deleteToll} tollList={tollList} />
    </section>
  );
}

export default TollList;
