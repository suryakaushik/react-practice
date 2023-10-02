import { memo } from 'react';
import { displayTitle } from '../App';

function SelectComponent({ value, list, onChange, title }) {
  return (
    <label className="m-1 flex flex-row">
      {displayTitle(title)}
      <select
        className="p-1 m-1 border border-2 rounded-md border-[#64ff98]"
        value={value}
        required
        onChange={onChange}
      >
        {list.map((item) => (
          <option key={item} className="p-1" value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

export default memo(SelectComponent);
