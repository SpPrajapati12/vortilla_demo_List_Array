import './App.css';
import Users from './components/Users';
import { useState } from 'react';
import SelectedUser from './components/SelectedUser';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [getSelectedData, setGetSelectedData] = useState([])
  const [selected, setSelected] = useState([])

  const getData = (data) => {
    setGetSelectedData(data)
  }
  const clearData = () => {
    setGetSelectedData([])
  }
  function uniqueById(items) {
    const set = new Set();
    return items.filter((item) => {
        const isDuplicate = set.has(item.id);
        set.add(item.id);
        return !isDuplicate;
    });
}
  const addDataList = (user) => {
    setSelected((current) => {
        return uniqueById([...current, user])
    })
}

  return (
    <div className="App vw-100 vh-100 bg-secondary text-white">
      <Routes>
        <Route exact path='/' element={<Users getData={getData} addDataList={addDataList} selected={selected} setSelected={setSelected} />} />
        <Route exact path='/select' element={<SelectedUser getSelectedData={getSelectedData} clearData={clearData}  />} ></Route>
      </Routes>


    </div>
  );
}

export default App;
