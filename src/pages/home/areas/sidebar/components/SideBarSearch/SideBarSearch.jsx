import React from 'react';

const SideBarSearch = () => {
  return (
    <div className='sidebar__search p-10'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for a chat room'
          style={{ borderRadius: '18px', padding: '12px' }}
        />
      </div>
    </div>
  );
};

export default SideBarSearch;
