import React from 'react';
import IconSearch from "./../Icons/IconSearch"
import Button from '../Components/Button/Button';

// import './Button.scss';

const ButtonPage = () => {
  return (
    <section className='p-6'>
        
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Default</h1>
            <div className='cluster items-center'>
                <Button>Button</Button>
                <Button><IconSearch /> Icon Before</Button>
                <Button>Icon After <IconSearch /></Button>
                <Button active>Active</Button>
                <Button disabled>Disabled</Button>
                <Button icon><IconSearch /></Button>
                <Button icon round><IconSearch /></Button>

            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Sizes </h1>
            <div className='cluster items-center'>
               
                <Button>Regular</Button>
                <Button size="md">md</Button>
                <Button size="lg">lg</Button>
                <Button size="xl">xl</Button>
                <Button icon size="md"><IconSearch /></Button>
                <Button icon size="lg"><IconSearch /></Button>
                <Button icon size="xl"><IconSearch /></Button>
                
            </div>
          </div>
        </section>
        
{/* Button Default end  */}
        
        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Success</h1>
            <div className='cluster items-center'>
                <Button type="success">Button</Button>
                <Button type="success"><IconSearch /> Icon Before </Button>
                <Button type="success">Icon After <IconSearch /></Button>
                <Button type="success" active>Active</Button>
                <Button type="success" disabled>Disabled</Button>
                <Button type="success" icon><IconSearch /></Button>
                <Button type="success" icon round><IconSearch /></Button>
    
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Success Sizes </h1>
            <div className='cluster items-center'>
                <Button type="success">Regular</Button>
                <Button type="success" size="md">md</Button>
                <Button type="success" size="lg">lg</Button>
                <Button type="success" size="xl">xl</Button>
                <Button type="success" size="md" icon><IconSearch /></Button>
                <Button type="success" size="lg" icon><IconSearch /></Button>
                <Button type="success" size="xl" icon><IconSearch /></Button>
            </div>
          </div>
        </section>
        
        {/* Button Success end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button warning</h1>
            <div className='cluster items-center'>
                <Button type="warning">Button</Button>
                <Button type="warning"><IconSearch /> Icon Before </Button>
                <Button type="warning">Icon After <IconSearch /></Button>
                <Button type="warning" active>Active</Button>
                <Button type="warning" disabled>Disabled</Button>
                <Button type="warning" icon><IconSearch /></Button>
                <Button type="warning" icon round><IconSearch /></Button>
            
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button warning Sizes </h1>
            <div className='cluster items-center'>
                <Button type="warning">Regular</Button>
                <Button type="warning" size="md">md</Button>
                <Button type="warning" size="lg">lg</Button>
                <Button type="warning" size="xl">xl</Button>
                <Button type="warning" size="md" icon><IconSearch /></Button>
                <Button type="warning" size="lg" icon><IconSearch /></Button>
                <Button type="warning" size="xl" icon><IconSearch /></Button>
             
            </div>
          </div>
        </section>
        
        {/* Button Warning end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Danger</h1>
            <div className='cluster items-center'>
                 <Button type="danger">Button</Button>
                <Button type="danger"><IconSearch /> Icon Before </Button>
                <Button type="danger">Icon After <IconSearch /></Button>
                <Button type="danger" active>Active</Button>
                <Button type="danger" disabled>Disabled</Button>
                <Button type="danger" icon><IconSearch /></Button>
                <Button type="danger" icon round><IconSearch /></Button>
              
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Danger Sizes </h1>
            <div className='cluster items-center'>
                <Button type="danger">Regular</Button>
                <Button type="danger" size="md">md</Button>
                <Button type="danger" size="lg">lg</Button>
                <Button type="danger" size="xl">xl</Button>
                <Button type="danger" size="md" icon><IconSearch /></Button>
                <Button type="danger" size="lg" icon><IconSearch /></Button>
                <Button type="danger" size="xl" icon><IconSearch /></Button>
                
            </div>
          </div>
        </section>
        
        {/* Button Danger end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link</h1>
            <div className='cluster items-center'>
                <Button type="link">Button</Button>
                <Button type="link"><IconSearch /> Icon Before </Button>
                <Button type="link">Icon After <IconSearch /></Button>
                <Button type="link" active>Active</Button>
                <Button type="link" disabled>Disabled</Button>
                <Button type="link" icon><IconSearch /></Button>
                <Button type="link" icon round><IconSearch /></Button>
                
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Sizes </h1>
            <div className='cluster items-center'>
                <Button type="link">Regular</Button>
                <Button type="link" size="md">md</Button>
                <Button type="link" size="lg">lg</Button>
                <Button type="link" size="xl">xl</Button>
                <Button type="link" size="md" icon><IconSearch /></Button>
                <Button type="link" size="lg" icon><IconSearch /></Button>
                <Button type="link" size="xl" icon><IconSearch /></Button>
                
            </div>
          </div>
        </section>
        
        {/* Button Link end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Success</h1>
            <div className='cluster items-center'>
                <Button type="link-success">Button</Button>
                <Button type="link-success"><IconSearch /> Icon Before </Button>
                <Button type="link-success">Icon After <IconSearch /></Button>
                <Button type="link-success" active>Active</Button>
                <Button type="link-success" disabled>Disabled</Button>
                <Button type="link-success" icon><IconSearch /></Button>
                <Button type="link-success" icon round><IconSearch /></Button>
               
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Success Sizes </h1>
            <div className='cluster items-center'>
                <Button type="link-success" size="xs">xs</Button>
                <Button type="link-success">Regular</Button>
                <Button type="link-success" size="md">md</Button>
                <Button type="link-success" size="lg">lg</Button>
                <Button type="link-success" size="xl">xl</Button>
                <Button type="link-success" size="md" icon><IconSearch /></Button>
                <Button type="link-success" size="lg" icon><IconSearch /></Button>
                <Button type="link-success" size="xl" icon><IconSearch /></Button>
                
            </div>
          </div>
        </section>
        
        {/* Button Link Success end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Warning</h1>
            <div className='cluster items-center'>
                <Button type="link-warning">Button</Button>
                <Button type="link-warning"><IconSearch /> Icon Before </Button>
                <Button type="link-warning">Icon After <IconSearch /></Button>
                <Button type="link-warning" active>Active</Button>
                <Button type="link-warning" disabled>Disabled</Button>
                <Button type="link-warning" icon><IconSearch /></Button>
                <Button type="link-warning" icon round><IconSearch /></Button>
            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Warning Sizes </h1>
            <div className='cluster items-center'>
                <Button type="link-warning">Regular</Button>
                <Button type="link-warning" size="md">md</Button>
                <Button type="link-warning" size="lg">lg</Button>
                <Button type="link-warning" size="xl">xl</Button>
                <Button type="link-warning" size="md" icon><IconSearch /></Button>
                <Button type="link-warning" size="lg" icon><IconSearch /></Button>
                <Button type="link-warning" size="xl" icon><IconSearch /></Button>
            </div>
          </div>
        </section>
        
        {/* Button Link Warning end  */}

        <section className='grid grid-cols-2 border-b-2 border-b-neutral-400 py-5'>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Danger</h1>
            <div className='cluster items-center'>
                <Button type="link-danger">Button</Button>
                <Button type="link-danger"><IconSearch /> Icon Before </Button>
                <Button type="link-danger">Icon After <IconSearch /></Button>
                <Button type="link-danger" active>Active</Button>
                <Button type="link-danger" disabled>Disabled</Button>
                <Button type="link-danger" icon><IconSearch /></Button>
                <Button type="link-danger" icon round><IconSearch /></Button>

            </div>
          </div>
          <div className='stack'>
            <h1 className='text-2xl text-neutral-800 mb-3'>Button Link Danger Sizes </h1>
            <div className='cluster items-center'>

                <Button type="link-danger">Regular</Button>
                <Button type="link-danger" size="md">md</Button>
                <Button type="link-danger" size="lg">lg</Button>
                <Button type="link-danger" size="xl">xl</Button>
                <Button type="link-danger" size="md" icon><IconSearch /></Button>
                <Button type="link-danger" size="lg" icon><IconSearch /></Button>
                <Button type="link-danger" size="xl" icon><IconSearch /></Button>
                
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
                
                <button className='[ btn primary ] [ round ]'>Regular</button>
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
                
                <button className='[ btn primary ]'>Regular</button>
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
                
                <button className='btn action'>Regular</button>
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
                
                <button className='btn action-success'>Regular</button>
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
                
                <button className='btn action-warning'>Regular</button>
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
                
                <button className='btn action-danger'>Regular</button>
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
    
    export default ButtonPage;