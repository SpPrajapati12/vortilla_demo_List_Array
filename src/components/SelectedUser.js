import React from 'react'
import { useNavigate } from 'react-router-dom'


const SelectedUser = ({ getSelectedData }) => {
  const navigate = useNavigate()


  return (
    <div className='container d-flex justify-content-center align-items-center w-100 h-100 bg-secondary text-white"'>
      <div className="usercontainer w-75 bg-light p-4 ">
        <p className="text-uppercase text-primary text-start fw-bold">select users</p>
        <ul className="list-group overflow-scroll userData_list">
          {getSelectedData.length > 0 ? getSelectedData.map((item, key) => (
            <li key={key} className="list-group-item d-flex flex-row justify-content-start align-items-center ">
              <img src={item.avatar} alt="Avatar" className="avatar " />
              <span className='ms-2'> {item.full_name}</span>
            </li>
          )
          ) :
            <li className="list-group-item d-flex flex-row justify-content-start align-items-center ">
              No Data
            </li>}
        </ul>
        <div className="modal-footer">
          <button type="button" className="btn btn-warning" onClick={() => navigate("/")}>back</button>
        </div>
      </div>


    </div>
  )
}

export default SelectedUser
