import React from 'react';
import IconSearch from '../../Icons/IconSearch';

import './button.scss';

const Button = () => {
  return (
    <section className='p-6'>
        
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Default</h1>
            <div className='cluster items-center'>
                <button className='btn'>Button</button>
                <button className='btn'><IconSearch /> Icon Before </button>
                <button className='btn'>Icon After <IconSearch /></button>
                <button className='btn active'>Active</button>
                <button className='btn' disabled >Disabled</button>
                
                <button className='btn icon'>
                    <IconSearch />
                </button>
                <button className='btn  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Sizes </h1>
            <div className='cluster items-center'>
               
                <button className='btn sm'>sm</button>
                <button className='btn md'>md</button>
                <button className='btn lg'>lg</button>
                <button className='btn xl'>lg</button>
                <button className='btn icon md'>
                    <IconSearch />
                </button>
                <button className='btn icon lg'>
                    <IconSearch />
                </button>
                <button className='btn icon xl'>
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
                <button className='btn success'>Button </button>
                <button className='btn success'><IconSearch /> Icon Before </button>
                <button className='btn success'>Icon After <IconSearch /></button>
                <button className='btn success active'>Active</button>
                <button className='btn success' disabled>Disabled</button>
                
                <button className='btn success icon'>
                    <IconSearch />
                </button>
                <button className='btn success  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Success Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn success sm'> sm</button>
                <button className='btn success md'> md</button>
                
                <button className='btn success lg'> lg</button>
                <button className='btn success xl'> xl</button>
                <button className='btn success icon md'>
                    <IconSearch />
                </button>
                <button className='btn success icon lg'>
                    <IconSearch />
                </button>
                <button className='btn success icon xl'>
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
                <button className='btn warning'>Button </button>
                <button className='btn warning'><IconSearch /> Icon Before </button>
                <button className='btn warning'>Icon After <IconSearch /></button>
                <button className='btn warning active'>Active</button>
                <button className='btn warning' disabled>Disabled</button>
                
                <button className='btn warning icon'>
                    <IconSearch />
                </button>
                <button className='btn warning  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button warning Sizes </h1>
            <div className='cluster items-center'>
            
                <button className='btn warning sm'>sm</button>
                <button className='btn warning md'> md</button>
                
                <button className='btn warning lg'> lg</button>
                <button className='btn warning xl'> xl</button>
                <button className='btn warning icon md'>
                    <IconSearch />
                </button>
                <button className='btn warning icon lg'>
                    <IconSearch />
                </button>
                <button className='btn warning icon xl'>
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
                <button className='btn danger'>Button </button>
                <button className='btn danger'><IconSearch /> Icon Before </button>
                <button className='btn danger'>Icon After <IconSearch /></button>
                <button className='btn danger active'>Active</button>
                <button className='btn danger' disabled>Disabled</button>
                
                <button className='btn danger icon'>
                    <IconSearch />
                </button>
                <button className='btn danger round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Danger Sizes </h1>
            <div className='cluster items-center'>
            
                <button className='btn danger sm'>sm</button>
                <button className='btn danger md'> md</button>
                
                <button className='btn danger lg'> lg</button>
                <button className='btn danger xl'> xl</button>
                <button className='btn danger icon md'>
                    <IconSearch />
                </button>
                <button className='btn danger icon lg'>
                    <IconSearch />
                </button>
                <button className='btn danger icon xl'>
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
                <button className='btn link'>Button </button>
                <button className='btn link'><IconSearch /> Icon Before </button>
                <button className='btn link'>Icon After <IconSearch /></button>
                <button className='btn link active'>Active</button>
                <button className='btn link' disabled>Disabled</button>
                
                <button className='btn link icon'>
                    <IconSearch />
                </button>
                <button className='btn link  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn link sm'>sm</button>
                <button className='btn link md'> md</button>
                
                <button className='btn link lg'> lg</button>
                <button className='btn link xl'> xl</button>
                <button className='btn link icon md'>
                    <IconSearch />
                </button>
                <button className='btn link icon lg'>
                    <IconSearch />
                </button>
                <button className='btn link icon xl'>
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
                <button className='btn link-success'>Button </button>
                <button className='btn link-success'><IconSearch /> Icon Before </button>
                <button className='btn link-success'>Icon After <IconSearch /></button>
                <button className='btn link-success active'>Active</button>
                <button className='btn link-success' disabled>Disabled</button>
                
                <button className='btn link-success icon'>
                    <IconSearch />
                </button>
                <button className='btn link-success  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Success Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn link-success sm'>sm</button>
                <button className='btn link-success md'> md</button>
                
                <button className='btn link-success lg'> lg</button>
                <button className='btn link-success xl'> xl</button>
                <button className='btn link-success icon md'>
                    <IconSearch />
                </button>
                <button className='btn link-success icon lg'>
                    <IconSearch />
                </button>
                <button className='btn link-success icon xl'>
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
                <button className='btn link-warning'>Button </button>
                <button className='btn link-warning'><IconSearch /> Icon Before </button>
                <button className='btn link-warning'>Icon After <IconSearch /></button>
                <button className='btn link-warning active'>Active</button>
                <button className='btn link-warning' disabled>Disabled</button>
                
                <button className='btn link-warning icon'>
                    <IconSearch />
                </button>
                <button className='btn link-warning  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Warning Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn link-warning sm'>sm</button>
                <button className='btn link-warning md'>md</button>
                <button className='btn link-warning lg'>lg</button>
                <button className='btn link-warning xl'>xl</button>
                <button className='btn link-warning icon md'>
                    <IconSearch />
                </button>
               
                <button className='btn link-warning icon lg'>
                    <IconSearch />
                </button>
                <button className='btn link-warning icon xl'>
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
                <button className='btn link-danger'>Button </button>
                <button className='btn link-danger'><IconSearch /> Icon Before </button>
                <button className='btn link-danger'>Icon After <IconSearch /></button>
                <button className='btn link-danger active'>Active</button>
                <button className='btn link-danger' disabled>Disabled</button>
                
                <button className='btn link-danger icon'>
                    <IconSearch />
                </button>
                <button className='btn link-danger  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Danger Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn link-danger sm'>sm</button>
                <button className='btn link-danger md'> md</button>
                
                <button className='btn link-danger lg'> lg</button>
                <button className='btn link-danger xl'> xl</button>
                <button className='btn link-danger icon md'>
                    <IconSearch />
                </button>
                <button className='btn link-danger icon lg'>
                    <IconSearch />
                </button>
                <button className='btn link-danger icon xl'>
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
                <button className='[ btn primary ] [ round ]'>Button</button>
                <button className='[ btn primary ] [ round ]'><IconSearch /> Icon Before </button>
                <button className='[ btn primary ] [ round ]'>Icon After <IconSearch /></button>
                <button className='[ btn primary ] [ round ] active'>Active</button>
                <button className='[ btn primary ] [ round ]' disabled>Disabled</button>
                
                <button className='[ btn primary ] [ round icon ]'>
                    <IconSearch />
                </button>
                <button className='[ btn primary ] [ round icon ]'>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Primary Button Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='[ btn primary ] [ round ] sm'>sm</button>
                <button className='[ btn primary ] [ round ] md'> md</button>
                
                <button className='[ btn primary ] [ round ] lg'> lg</button>
                <button className='[ btn primary ] [ round ] xl'> xl</button>
                <button className='[ btn primary ] [ round ] icon md'>
                    <IconSearch />
                </button>
                <button className='[ btn primary ] [ round ] icon lg'>
                    <IconSearch />
                </button>
                <button className='[ btn primary ] [ round ] icon xl'>
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
                <button className='[ btn primary ]'>Button</button>
                <button className='[ btn primary ]'><IconSearch /> Icon Before </button>
                <button className='[ btn primary ]'>Icon After <IconSearch /></button>
                <button className='[ btn primary ] active'>Active</button>
                <button className='[ btn primary ]' disabled>Disabled</button>
                
                <button className='[ btn primary ] icon'>
                    <IconSearch />
                </button>
                <button className='[ btn primary ] [ round ] icon'>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Primary Button Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='[ btn primary ] sm'>sm</button>
                <button className='[ btn primary ] md'> md</button>
                
                <button className='[ btn primary ] lg'> lg</button>
                <button className='[ btn primary ] xl'> xl</button>
                <button className='[ btn primary ] icon md'>
                    <IconSearch />
                </button>
                <button className='[ btn primary ] icon lg'>
                    <IconSearch />
                </button>
                <button className='[ btn primary ] icon xl'>
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
                <button className='btn action'>Button</button>
                <button className='btn action'><IconSearch /> Icon Before </button>
                <button className='btn action'>Icon After <IconSearch /></button>
                <button className='btn action active'>Active</button>
                <button className='btn action' disabled>Disabled</button>
                
                <button className='btn action icon'>
                    <IconSearch />
                </button>
                <button className='btn action  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Button Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn action sm'>sm</button>
                <button className='btn action md'> md</button>
                
                <button className='btn action lg'> lg</button>
                <button className='btn action xl'> xl</button>
                <button className='btn action icon md'>
                    <IconSearch />
                </button>
                
                <button className='btn action icon lg'>
                    <IconSearch />
                </button>
                <button className='btn action icon xl'>
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
                <button className='btn action-success'>Button</button>
                <button className='btn action-success'><IconSearch /> Icon Before </button>
                <button className='btn action-success'>Icon After <IconSearch /></button>
                <button className='btn action-success active'>Active</button>
                <button className='btn action-success' disabled>Disabled</button>
                
                <button className='btn action-success icon'>
                    <IconSearch />
                </button>
                <button className='btn action-success  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Success Button Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn action-success sm'>sm</button>
                <button className='btn action-success md'> md</button>
                <button className='btn action-success lg'> lg</button>
                <button className='btn action-success xl'> xl</button>
                <button className='btn action-success icon md'>
                    <IconSearch />
                </button>
                
                <button className='btn action-success icon lg'>
                    <IconSearch />
                </button>
                <button className='btn action-success icon xl'>
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
                <button className='btn action-warning'>Button</button>
                <button className='btn action-warning'><IconSearch /> Icon Before </button>
                <button className='btn action-warning'>Icon After <IconSearch /></button>
                <button className='btn action-warning active'>Active</button>
                <button className='btn action-warning' disabled>Disabled</button>
                
                <button className='btn action-warning icon'>
                    <IconSearch />
                </button>
                <button className='btn action-warning  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Warning Button Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn action-warning sm'>sm</button>
                <button className='btn action-warning md'> md</button>
                <button className='btn action-warning lg'> lg</button>
                <button className='btn action-warning xl'> xl</button>
                <button className='btn action-warning icon md'>
                    <IconSearch />
                </button>
                
                <button className='btn action-warning icon lg'>
                    <IconSearch />
                </button>
                <button className='btn action-warning icon xl'>
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
                <button className='btn action-danger'>Button</button>
                <button className='btn action-danger'><IconSearch /> Icon Before </button>
                <button className='btn action-danger'>Icon After <IconSearch /></button>
                <button className='btn action-danger active'>Active</button>
                <button className='btn action-danger' disabled>Disabled</button>
                
                <button className='btn action-danger icon'>
                    <IconSearch />
                </button>
                <button className='btn action-danger  round icon '>
                    <IconSearch />
                </button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Action Danger Button Sizes </h1>
            <div className='cluster items-center'>
                
                <button className='btn action-danger sm'>sm</button>
                <button className='btn action-danger md'> md</button>
                
                <button className='btn action-danger lg'> lg</button>
                <button className='btn action-danger xl'> xl</button>
                <button className='btn action-danger icon md'>
                    <IconSearch />
                </button>
                <button className='btn action-danger icon lg'>
                    <IconSearch />
                </button>
                <button className='btn action-danger icon xl'>
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