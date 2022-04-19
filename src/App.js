import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useDebugValue} from 'react'
import city from './city'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [cityState,setCityState] = useState(undefined)
  const [cityIndex,setCityIndex] = useState(null)
  const [dist,setDist] = useState(undefined)

  const handleTargetSet = (e) => {
    setDist('default')
    setCityState(e.target.value)
    setCityIndex(e.target[e.target.selectedIndex].dataset.index)
  }
  useEffect(() => {
    console.log(cityState,dist)
  },[cityState,dist])

  return (
    <div className="App">
      <select onChange={e => handleTargetSet(e)} defaultValue="" value={cityState}>
        <option value="" disabled key='default'>選擇城市</option>
        {
          city.map((item,index) => (
            <option value={item.city} data-index={index} key={uuidv4()}>{item.city}</option>
          ))
        }
      </select>
      
      <select onChange={e => {setDist(e.target.value)}}  defaultValue="default" value={dist}>
        <option value="default" disabled key='default2' >選擇區</option>
        {
          cityState && city[cityIndex].dist.map(item => (
            <option value={item} key={uuidv4()}>{item}</option>
          ))
        }
      </select>
    </div>
  );
}

export default App;
