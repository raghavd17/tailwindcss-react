import React from 'react';
import IconSearch from '../../Icons/IconSearch';

import './Button.scss';

const Button = () => {
  return (
    <section className='p-6'>
        
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Default</h1>
            <div className='cluster items-center'>
                <button className='button'>Button</button>
                <button className='button'><IconSearch /> Icon Before </button>
                <button className='button'>Icon After <IconSearch /></button>
                <button className='button active'>Active</button>
                <button className='button' disabled >Disabled</button>
                
                <button className='button icon'>
                    <IconSearch />
                </button>
                <button className='button round icon'>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs'>xs</button>
                <button className='button'>Regular</button>
                <button className='button lg'>lg</button>
                
                <button className='button xxl'>xxl</button>
                <button className='button icon lg'>
                    <IconSearch />
                </button>
                <button className='button icon xxl'>
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
{/* Button Default end  */}
        
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Success</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="success">Button </button>
                <button className='button' data-button="success"><IconSearch /> Icon Before </button>
                <button className='button' data-button="success">Icon After <IconSearch /></button>
                <button className='button active' data-button="success">Active</button>
                <button className='button' disabled data-button="success">Disabled</button>
                
                <button className='button icon' data-button="success">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="success">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Success Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="success">xs</button>
                <button className='button' data-button="success"> Regular</button>
                <button className='button lg' data-button="success"> lg</button>
                
                <button className='button xxl' data-button="success"> xxl</button>
                <button className='button icon lg' data-button="success">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="success">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
        {/* Button Success end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button warning</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="warning">Button </button>
                <button className='button' data-button="warning"><IconSearch /> Icon Before </button>
                <button className='button' data-button="warning">Icon After <IconSearch /></button>
                <button className='button active' data-button="warning">Active</button>
                <button className='button' disabled data-button="warning">Disabled</button>
                
                <button className='button icon' data-button="warning">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="warning">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button warning Sizes </h1>
            <div className='cluster items-center'>
            <button className='button xs' data-button="warning">xs</button>
                <button className='button' data-button="warning">Regular</button>
                <button className='button lg' data-button="warning"> lg</button>
                
                <button className='button xxl' data-button="warning"> xxl</button>
                <button className='button icon lg' data-button="warning">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="danger">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
        {/* Button Warning end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Danger</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="danger">Button </button>
                <button className='button' data-button="danger"><IconSearch /> Icon Before </button>
                <button className='button' data-button="danger">Icon After <IconSearch /></button>
                <button className='button active' data-button="danger">Active</button>
                <button className='button' disabled data-button="danger">Disabled</button>
                
                <button className='button icon' data-button="danger">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="danger">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Danger Sizes </h1>
            <div className='cluster items-center'>
            <button className='button xs' data-button="danger">xs</button>
                <button className='button' data-button="danger">Regular</button>
                <button className='button lg' data-button="danger"> lg</button>
                
                <button className='button xxl' data-button="danger"> xxl</button>
                <button className='button icon lg' data-button="danger">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="danger">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
        {/* Button Danger end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="link">Button </button>
                <button className='button' data-button="link"><IconSearch /> Icon Before </button>
                <button className='button' data-button="link">Icon After <IconSearch /></button>
                <button className='button active' data-button="link">Active</button>
                <button className='button' disabled data-button="link">Disabled</button>
                
                <button className='button icon' data-button="link">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="link">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="link">xs</button>
                <button className='button' data-button="link"></button>
                <button className='button lg' data-button="link"> lg</button>
                
                <button className='button xxl' data-button="link"> xxl</button>
                <button className='button icon lg' data-button="link">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="link">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
        {/* Button Link end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Success</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="link-success">Button </button>
                <button className='button' data-button="link-success"><IconSearch /> Icon Before </button>
                <button className='button' data-button="link-success">Icon After <IconSearch /></button>
                <button className='button active' data-button="link-success">Active</button>
                <button className='button' disabled data-button="link-success">Disabled</button>
                
                <button className='button icon' data-button="link-success">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="link-success">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Success Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="link-success">xs</button>
                <button className='button' data-button="link-success">Regular</button>
                <button className='button lg' data-button="link-success"> lg</button>
                
                <button className='button xxl' data-button="link-success"> xxl</button>
                <button className='button icon lg' data-button="link-success">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="link-success">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
        {/* Button Link Success end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Warning</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="link-warning">Button </button>
                <button className='button' data-button="link-warning"><IconSearch /> Icon Before </button>
                <button className='button' data-button="link-warning">Icon After <IconSearch /></button>
                <button className='button active' data-button="link-warning">Active</button>
                <button className='button' disabled data-button="link-warning">Disabled</button>
                
                <button className='button icon' data-button="link-warning">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="link-warning">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Warning Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="link-warning">xs</button>
                <button className='button' data-button="link-warning">Regular</button>
                <button className='button lg' data-button="link-warning"> lg</button>
               
                <button className='button xxl' data-button="link-warning"> xxl</button>
                <button className='button icon lg' data-button="link-warning">
                    <IconSearch />
                </button>
               
                <button className='button icon xxl' data-button="link-warning">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
        {/* Button Link Warning end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Danger</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="link-danger">Button </button>
                <button className='button' data-button="link-danger"><IconSearch /> Icon Before </button>
                <button className='button' data-button="link-danger">Icon After <IconSearch /></button>
                <button className='button active' data-button="link-danger">Active</button>
                <button className='button' disabled data-button="link-danger">Disabled</button>
                
                <button className='button icon' data-button="link-danger">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="link-danger">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Danger Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="link-danger">xs</button>
                <button className='button' data-button="link-danger">Regular</button>
                <button className='button lg' data-button="link-danger"> lg</button>
                
                <button className='button xxl' data-button="link-danger"> xxl</button>
                <button className='button icon lg' data-button="link-danger">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="link-danger">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        
        {/* Button Link Danger end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Round Primary</h1>
            <div className='cluster items-center'>
                <button className='button round' data-button="primary">Button</button>
                <button className='button round' data-button="primary"><IconSearch /> Icon Before </button>
                <button className='button round' data-button="primary">Icon After <IconSearch /></button>
                <button className='button round active' data-button="primary">Active</button>
                <button className='button round' disabled data-button="primary">Disabled</button>
                
                <button className='button round icon' data-button="primary">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="primary">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Primary Button Sizes </h1>
            <div className='cluster items-center'>
                <button className='button round xs' data-button="primary">xs</button>
                <button className='button round' data-button="primary">Regular</button>
                <button className='button round lg' data-button="primary"> lg</button>
                
                <button className='button round xxl' data-button="primary"> xxl</button>
                <button className='button round icon lg' data-button="primary">
                    <IconSearch />
                </button>
                <button className='button round icon xxl' data-button="primary">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        {/* Primary Buttons Round end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Primary</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="primary">Button</button>
                <button className='button' data-button="primary"><IconSearch /> Icon Before </button>
                <button className='button' data-button="primary">Icon After <IconSearch /></button>
                <button className='button active' data-button="primary">Active</button>
                <button className='button' disabled data-button="primary">Disabled</button>
                
                <button className='button icon' data-button="primary">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="primary">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Primary Button Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="primary">xs</button>
                <button className='button' data-button="primary">Regular</button>
                <button className='button lg' data-button="primary"> lg</button>
                
                <button className='button xxl' data-button="primary"> xxl</button>
                <button className='button icon lg' data-button="primary">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="primary">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        {/* Primary Buttons end  */}
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Action</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="action">Button</button>
                <button className='button' data-button="action"><IconSearch /> Icon Before </button>
                <button className='button' data-button="action">Icon After <IconSearch /></button>
                <button className='button active' data-button="action">Active</button>
                <button className='button' disabled data-button="action">Disabled</button>
                
                <button className='button icon' data-button="action">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="action">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Button Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="action">xs</button>
                <button className='button' data-button="action">Regular</button>
                <button className='button lg' data-button="action"> lg</button>
                
                <button className='button xxl' data-button="action"> xxl</button>
                <button className='button icon lg' data-button="action">
                    <IconSearch />
                </button>
                
                <button className='button icon xxl' data-button="action">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        {/* Action Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack  divide-slate-600'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Success Button</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="action-success">Button</button>
                <button className='button' data-button="action-success"><IconSearch /> Icon Before </button>
                <button className='button' data-button="action-success">Icon After <IconSearch /></button>
                <button className='button active' data-button="action-success">Active</button>
                <button className='button' disabled data-button="action-success">Disabled</button>
                
                <button className='button icon' data-button="action-success">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="action-success">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Success Button Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="action-success">xs</button>
                <button className='button' data-button="action-success">Regular</button>
                <button className='button lg' data-button="action-success"> lg</button>
                <button className='button xxl' data-button="action-success"> xxl</button>
                <button className='button icon lg' data-button="action-success">
                    <IconSearch />
                </button>
                
                <button className='button icon xxl' data-button="action-success">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        {/* Action Success Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Action Warning</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="action-warning">Button</button>
                <button className='button' data-button="action-warning"><IconSearch /> Icon Before </button>
                <button className='button' data-button="action-warning">Icon After <IconSearch /></button>
                <button className='button active' data-button="action-warning">Active</button>
                <button className='button' disabled data-button="action-warning">Disabled</button>
                
                <button className='button icon' data-button="action-warning">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="action-warning">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Warning Button Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="action-warning">xs</button>
                <button className='button' data-button="action-warning">Regular</button>
                <button className='button lg' data-button="action-warning"> lg</button>
                <button className='button xxl' data-button="action-warning"> xxl</button>
                <button className='button icon lg' data-button="action-warning">
                    <IconSearch />
                </button>
                
                <button className='button icon xxl' data-button="action-warning">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        {/* Action Warning Buttons end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Danger</h1>
            <div className='cluster items-center'>
                <button className='button' data-button="action-danger">Button</button>
                <button className='button' data-button="action-danger"><IconSearch /> Icon Before </button>
                <button className='button' data-button="action-danger">Icon After <IconSearch /></button>
                <button className='button active' data-button="action-danger">Active</button>
                <button className='button' disabled data-button="action-danger">Disabled</button>
                
                <button className='button icon' data-button="action-danger">
                    <IconSearch />
                </button>
                <button className='button round icon' data-button="action-danger">
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Danger Button Sizes </h1>
            <div className='cluster items-center'>
                <button className='button xs' data-button="action-danger">xs</button>
                <button className='button' data-button="action-danger">Regular</button>
                <button className='button lg' data-button="action-danger"> lg</button>
                
                <button className='button xxl' data-button="action-danger"> xxl</button>
                <button className='button icon lg' data-button="action-danger">
                    <IconSearch />
                </button>
                <button className='button icon xxl' data-button="action-danger">
                    <IconSearch />
                </button>
            </div>
          </div>
        </section>
        {/* Action Danger Buttons end  */}
        
        

    </section>
      )
    }
    
    export default Button;