import React from 'react';
import './avatar.scss';

function Avatar() {
  return (
    <section className=''>
          <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
            <div className='stack'>
                <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Name</h1>
                <div className='cluster'>
                    <div data-avatar="sm" class="avatar sm"> <div className='avatar-title'>Avatar Name</div></div>
                    <div data-avatar="md" class="avatar md"> <div className='avatar-title'>Avatar Name</div> </div> 
                    <div data-avatar="lg" class="avatar lg"> <div className='avatar-title'>Avatar Name</div></div> 
                    <div data-avatar="xl" class="avatar xl"> <div className='avatar-title'>Avatar Name</div></div> 
                </div>                
            </div>
            <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar Round</h1>
            <div className='cluster'>
            <div data-avatar="xl" class="avatar xl round"> <div className='avatar-title'>Avatar Name</div></div>
            <div data-avatar="lg" class="avatar lg round"> <div className='avatar-title'>Avatar Name</div></div> 
            <div data-avatar="md" class="avatar md round"> <div className='avatar-title'>Avatar Name</div></div> 
            <div data-avatar="sm" class="avatar sm round"> <div className='avatar-title'>Avatar Name</div></div> 
            </div>
            
          </div>
          </section>
          
          <section className='grid grid-cols-2 border-b border-b-neutral-400 py-5'>
            <div className='stack'>
                <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic</h1>
                <div className='cluster'>
                    <div data-avatar="sm" class="avatar sm"> 
                    <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div>
                    </div> 
                    <div data-avatar="md" class="avatar md"> 
                    <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div> </div> 
                    <div data-avatar="lg" class="avatar lg"> 
                    <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div></div> 
                    <div data-avatar="xl" class="avatar xl"> 
                    <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div></div> 
                </div>
            </div>
            {/* stack */}
            <div className='stack'>
          <h1 className='text-2xl text-neutral-800 mb-3'>Avatar with Pic round</h1>
            <div className='cluster'>
            <div data-avatar="xl" class="avatar xl round"> 
                <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div> </div> 
                <div data-avatar="lg" class="avatar lg round"> 
                <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div> </div>
                <div data-avatar="md" class="avatar md round"> 
                <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div> </div> 
                <div data-avatar="sm" class="avatar sm round"> 
                <img src='https://i.pravatar.cc/300' alt='random profile' className='avatar-img' /> <div className='avatar-title'>Avatar Name</div>
                </div> 
            </div>
          </div>  
          </section>
            
    </section>
  )
}

export default Avatar