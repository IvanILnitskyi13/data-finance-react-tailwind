import React from 'react'

const Card = () => {
  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
        <img
            className='w-20 mx-auto mt-[-3rem] bg-white'
            src={Single}
            alt='Single Image'
        />
        <h2 className='block text-2xl font-bold text-center py-8'>Single User</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
        </div>
        <button className='my-6 mx-auto'>Start Trial</button>
    </div>
  )
}

export default Card;