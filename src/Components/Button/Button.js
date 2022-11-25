import React from 'react';
import IconSearch from '../../Icons/IconSearch';
import IconClose from '../../Icons/IconClose';

import './Button.scss';

const Button = () => {
  return (
    <section className='p-6'>
        <h1 className='mb-2'>Primary</h1>
        <section className='grid grid-cols-12'>
        <div className='stack'>
            <button className='button' data-btn-type="primary">Primary</button>
            <button className='button lg' data-btn-type="primary">Primary</button>
            <button className='button xl' data-btn-type="primary">Primary</button>
            <button className='button xxl' data-btn-type="primary">Primary</button>
            <button className='button xxl' data-btn-type="primary">
                <IconSearch></IconSearch>
            </button>
        </div>

        </section>
        
        <h1 className='mb-2'>Action Buttons</h1>
        <div className='flex'>
            <button className='button'  data-btn-type="action">Action Default</button>
            <button className='button' data-btn-type="action-success">Action Success </button>
            <button className='button' data-btn-type="action-attention">Action Attention</button>
            <button className='button' data-btn-type="action-danger">Action Danger</button>
        </div>
        <h1 className='mt-5  mb-2'>Default Buttons </h1>
        <div className='flex'>
            <button className='button'>Default Button</button>
            <button className='button' data-btn-type="danger">Default Danger</button>
            <button className='button' data-btn-type="success">Default Success</button>
            <button className='button' data-btn-type="attention">Default Attention</button>
        </div>
        <h1 className='mt-5 mb-2'>Links  </h1>
        <div className='flex'>
            <button className='button' data-btn-type="link">Link Default</button>
            <button className='button' data-btn-type="link-danger">Link Danger</button>
            <button className='button' data-btn-type="link-success">Link Success</button>
            <button className='button' data-btn-type="link-attention">Link Attention</button>
        </div>

        <h1 className='mt-5 mb-2'>Rounded  </h1>
        <div className='flex items-center'>
            <button className='button rounded' data-btn-type="outline">
                <IconSearch/>
            </button>
            <button className='rounded button' data-btn-type="outline-danger">
            <IconClose/>
            </button>
            <button className='button rounded' data-btn-type="success">Success</button>
            <button className='button rounded' data-btn-type="danger">Danger</button>
        </div>
    </section>
      )
    }
    
    export default Button;