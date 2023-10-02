import { useContext, memo } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../App';

function Controls() {
  const { toggleAddToll, setToggleAddToll, setToggleAddVehicle } =
    useContext(AppContext);

  return (
    <div className="flex flex-row self-center md:self-end">
      <button
        className="bg-blue-500 m-1 px-4 py-2 rounded-lg text-white text-lg"
        onClick={() => setToggleAddVehicle((a) => !a)}
      >
        Add vehicle entry
      </button>
      <button
        className="bg-blue-500 m-1 px-4 py-2 rounded-lg text-white text-lg"
        onClick={() => setToggleAddToll((a) => !a)}
      >
        Add new toll
      </button>
      <nav>
        <Link to={window.location.pathname === '/' ? '/viewTolls' : '/'}>
          <button className="bg-blue-500 m-1 px-4 py-2 rounded-lg text-white text-lg">
            <p>
              {window.location.pathname === '/'
                ? 'View all tolls'
                : 'Back to vehicle logs'}
            </p>
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default memo(Controls);
