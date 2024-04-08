import React from 'react';
import { FaChartArea, FaDollarSign } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom';

const LuxuryStateDetails = () => {
    const { id } = useParams();

    const allState = useLoaderData()
    const state = allState.find(s => s.id === +id);

    const { estate_title, segment_name, image, description, price, status, area, location, facilities, logo } = state;

    return (
        <div className='max-w-5xl pb-20 mx-auto  mt-20'>
            <div className="  p-6 bg-[#75d5cd46] rounded-lg space-y-12">
                <article className="space-y-8  text-white flex-1">
                    <img className='object-cover py-1 rounded-lg w-full' src={image} alt="" />
                    <div className='flex gap-6'>
                        <div className='flex-1'>
                            <div className="space-y-6 ">
                                <h1 className="text-3xl font-bold md:tracking-tight md:text-4xl">{estate_title}</h1>
                                <div className="">
                                    <h5 className=" text-[#10ac8c] font-bold text-xl ">
                                        Facilities:
                                    </h5>
                                    <ul className="mb-3 ml-10   ">
                                        {
                                            facilities.map((fa, idx) => <li key={idx} className="list-disc">{fa}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='flex  gap-5 items-center'>
                                <h5 className='text-base font-semibold flex items-center gap-1'><FaDollarSign className="text-[#1ABA9B]"></FaDollarSign> Price: {price}</h5>
                                <button className='px-5 capitalize py-1 border border-[#ffffff] rounded font-bold text-base bg-[#1ABA9B] text-[#ffffff]'> {status}
                                </button>
                            </div>
                            <div>

                                <div className="">
                                    <p className="text-base font-bold mt-2 mb-4">Segment: {segment_name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-white flex-1 border-l pl-9 border-dashed ">
                            <p className='font-bold '>Description : <span className='font-medium'> {description}</span></p>
                            <div className=' mt-5'>
                                <h5 className='text-base font-semibold flex items-center gap-2'><FaLocationDot className="text-[#1ABA9B]"></FaLocationDot> Location: {location}</h5>
                                <h5 className='text-base font-semibold flex items-center gap-2'><FaChartArea className="text-[#1ABA9B]"></FaChartArea> Area: {area}</h5>
                            </div>
                        </div>
                    </div>
                </article>


            </div>
        </div>
    );
};

export default LuxuryStateDetails;