import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from "../user-list.json"

const Users = ({ getData, addDataList, selected, setSelected  }) => {
    const uData = JSON.parse(localStorage.getItem("dataArray"))

    const [DataList, setDataList] = useState(uData ? uData : data)
    const [search, setSearch] = useState("")
    const navigate = useNavigate()


    const secondClickHandle = () => {
       const dpData =  DataList.filter((val) => val.selected !== false)
       return dpData
    }
   

    const handleChange = (e) => {
        const { value } = e.target
        setSearch(value)
    }
    const handleOnpress = (item) => {
        const newItem = DataList.map(val => {
            if (val.id === item.id) {
                return { ...val, selected: !val.selected }
            } else {
                return val
            }
        })
        setDataList(newItem)
        localStorage.setItem("dataArray", JSON.stringify(newItem))
    }



    return (
        <div className='container d-flex justify-content-center align-items-center w-100 h-100 bg-secondary text-white"'>
            <div className="usercontainer w-75 bg-light p-4 ">
                <p className="text-uppercase text-primary text-start fw-bold">select users</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder='search...' aria-label="Amount (to the nearest dollar)" onChange={handleChange} value={search} />
                    <span className="input-group-text bg-primary text-white"><i className="fa-solid fa-magnifying-glass "></i></span>
                </div>
                <ul className="list-group overflow-scroll userData_list">
                    {DataList ? DataList.filter(user => user.full_name.toLowerCase().includes(search)).map((item, key) => (
                        <li key={key} className={` ${item.selected ? "bac-color" : ""} list-group-item d-flex flex-row justify-content-start align-items-center `} onClick={() => {
                            addDataList(item)
                            handleOnpress(item)
                        }
                        }>
                            <img src={item.avatar} alt="Avatar" className="avatar " />
                            <span className='ms-2'> {item.full_name}</span>
                        </li>
                    )
                    ) :
                        <li className="list-group-item d-flex flex-row justify-content-start align-items-center ">
                            No UserData
                        </li>}
                </ul>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => {
                        navigate("select")
                    }}>selected Data</button>
                    <button type="button" className="btn btn-warning" onClick={() => {
                        setSearch("")
                        setSelected([])
                        localStorage.clear()
                        setDataList(data)
                        getData([])

                    }}>Cancel</button>
                    <button type="button" className="btn btn-success" onClick={() => {
                        getData(secondClickHandle)
                    }}>Select</button>
                </div>
            </div>


        </div>
    )
}

export default Users
