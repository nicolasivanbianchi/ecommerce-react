import React, { useState } from 'react';

const Item = (props) => {
    const [description, setDescription] = useState(false);
  return (
        <div>
          <div
            className='border shadow-lg rounded-lg'
          >
            <div className='relative'>
            <img
              src={props.data.image}
              alt={props.data.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            {description
                ?<div className='w-full h-full z-20 absolute top-0 text-center justify-center items-center flex text-2xl bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 text-white'>
                    {props.data.name}
                </div>
                :<div />
            }
            </div>
            <div className='items-center flex justify-between px-2 py-4'>
              <p className='font-bold'>{props.data.name}</p>
              <div className='flex items-center gap-2'>
              <button onClick={() => setDescription(!description)} className='hover:bg-orange-200 transition'>
                {description
                ?<div>
                    Close info
                </div>
                :<div>
                    More info
                </div>
                }
              </button>
              <p>
                <span className='text-black p-1 rounded-full font-bold'>
                  {props.data.price}
                </span>
              </p>
              </div>
            </div>
          </div>
      </div>
  );
};

export default Item;