import logo from "../../images/logo.svg";
import { useState } from 'react';

const LaunchListHeader = ({onSearch}) => {

  const [search, setSearch] = useState(null)
  return (
    <header>
      <img src={logo} style={{width: '375.9px', height: '56.7px'}} />
      <div className="search-bar">
        <input
          type='text' placeholder="Search for flights"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="btn" onClick={() => {onSearch(search)}}>Search</button>
    </header>
  )
}

export default LaunchListHeader