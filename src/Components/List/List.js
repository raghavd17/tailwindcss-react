import React from 'react';
import Checkmark from './../Icons/Checkmark';
import './List.scss'

const List = () => {
  return (
    
<main className='p-4'>
    
    <h2 className='text-red-500 mb-4 text-5xl'>List Items </h2>
    <ul className="list">
      <li className="list-item" data-item="group">
          <div className="list-title"> Inactive Data Group item </div>
        <div>
         
          <div className="item-checkbox" data-state="">
              <Checkmark />
              </div>
              
        </div>
      </li>

      <li className="list-item" data-item="group" data-state="active">
        <div className="list-title">Active data-item
        </div>
        <div>
          <div className="item-checkbox" data-state="active">
          
            <Checkmark />
          
          </div>
        </div>
      </li>
    
      <li className="list-item" data-item="group" data-state="active"> 
        <div className="list-title">Title here
          </div>
        <div className="item-checkbox" data-item="group" data-state="active">
          <div className="list-label" data-item="group">
          <span>A</span> -- <span>Z</span>
          </div>
        </div>
      </li>
      <li className='list-divider'></li>
      <li className="list-item" data-item="group" data-state="active"> 
        <div  className="list-title">Title here
          </div>
        <div className="item-checkbox" data-state="">
          <div className="list-label" data-item="group">
          <span>A</span> --<span>Z</span>
          </div>
        </div>
      </li>
      <li className="list-item" data-item="group" data-state="active"> 
        <div  className="list-title">Title here
          </div>
        <div> <input type="checkbox"  className='h-5 aspect-square' /></div>
      </li>
      
    </ul>
    <h2>Checkbox </h2>
    <div className="item-checkbox" data-state="active">            
        <Checkmark />
    </div>
    <hr/>
    <div className="item-checkbox" data-state="">
          <div className="list-label" data-item="group">
          <span>A</span> --<span>Z</span>
          </div>
    </div>

    <hr/>
    <ul className='list'>
    <li className="list-item" data-item="group">
    <div className="list-title">Title here
          </div>
        <div className="item-checkbox" data-state="">
          <div className="list-label" data-item="group">
          <span>A</span> --<span>Z</span>
          </div>
        </div>
    </li>
      <li className="list-item"> Group Item</li>
      
    </ul>
  </main>
  )
}

export default List