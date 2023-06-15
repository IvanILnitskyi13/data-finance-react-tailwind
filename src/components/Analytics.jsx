import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img
                    className='w-[500px] mx-auto my-4'
                    src={Laptop}
                    alt='Laptop'
                />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>
                        DATA ANALITICS DASHBOARD
                    </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Manage Data Analytics Centrally
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo, eligendi rerum. Similique exercitationem
                        perferendis sint vel saepe iure esse, facilis nesciunt,
                        enim vero nulla deserunt autem. Aut, praesentium.
                        Impedit, quaerat.
                    </p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] active:scale-90 transition-transform'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
