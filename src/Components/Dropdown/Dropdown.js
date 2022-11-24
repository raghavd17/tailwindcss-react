import React from 'react'
import Checkmark from './../Icons/Checkmark';
import './Dropdown.scss';

const Dropdown = () => {
  return (
    
<main className='p-4'>
    
    <h2 className='text-red-500 mb-4 text-5xl'>Dropdowns</h2>
    <div className='dropdown'>
      <p>Dropdown here</p>
      <div className='dropdown-menu' data-state="open">
        <ul className="list">
      <li className="list-item" data-item="group">
          <div className="list-title"> Inactive Data Group item </div>
        <div>
          <span> 
          <div className="item-checkbox" data-state="">
            <div>
              <Checkmark />
              </div>
              </div>
              </span>
        </div>
      </li>

      <li className="list-item" data-item="group" data-state="active">
        <div className="list-title">Active data-item
        </div>
        <div>
          <div className="item-checkbox" data-state="active">
            <div>
            <Checkmark />
            </div>
          </div>
        </div>
      </li>
    
      <li className="list-item" data-item="group" data-state="active"> 
        <div className="list-title">Title here
          </div>
        <div className="item-checkbox" data-item="group" data-state="active">
          <div className="flex ">
          <span>A</span>  -- <span>Z</span>
          </div>
        </div>
      </li>
      <li className="list-item" data-item="group" data-state="active"> 
        <div  className="list-title">Title here
          </div>
        <div className="item-checkbox" data-state="">
          <div className="flex">
          <span>A</span>  -- <span>Z</span>
          </div>
        </div>
      </li>
      
        </ul>
      </div>
    </div>
    <div>Some other text </div>
  </main>
  )
}

export default Dropdown;