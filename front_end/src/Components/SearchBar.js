import React,{useState} from 'react'
import './SearchBar.css'
import Select from 'react-select';

const options = [
  { value: 'React', label: 'React' },
  { value: 'Data Structures', label: 'Data Structures' },
  { value: 'C++', label: 'C++' },
];


function SearchBar() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className='searchbar'>
        <Select
        placeholder='Select a Topic'
        className='searchbar-input'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  )
}

export default SearchBar