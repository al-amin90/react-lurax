import { FaDollarSign, FaChartArea } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LuxuryState = ({ state }) => {
    const { id, estate_title, segment_name, image, description, price, status, area, location, facilities, logo } = state;


    return (
        <div className='shadow-lg'>
            <div className='relative flex flex-col'>
                <img className='h-52 object-cover w-full' src={image} alt="" />
                <img className="rounded-full  absolute top-[10rem] left-6 w-[6rem]" src={logo} alt="" />
                <div className='px-6 mt-14 '>
                    <h2 className='text-xl mb-4 font-semibold font-montserrat'>{estate_title}</h2>
                    <div className="">
                        <h5 className=" text-[#1ABA9B] font-semibold ">
                            Facilities:
                        </h5>
                        <ul className="mb-3 ml-10   ">
                            {
                                facilities.map((fa, idx) => <li key={idx} className="list-disc">{fa}</li>)
                            }
                        </ul>
                    </div>
                    <div className='flex text-gray-600 justify-between items-center'>
                        <h5 className='text-base font-semibold flex items-center gap-1'><FaDollarSign className="text-[#1ABA9B]"></FaDollarSign> Price: {price}</h5>
                        <button className='px-5 capitalize py-1 border border-[#1ABA9B] rounded font-bold text-base text-[#1ABA9B]'> {status}
                        </button>
                    </div>
                    {
                        description.length > 80 ? <p className="text-sm  my-4">{description.slice(0, 140)}...</p>
                            : <p className="text-sm my-4">{description}</p>
                    }

                    <div className='  text-gray-600 mb-3'>
                        <h5 className='text-base font-semibold flex items-center gap-2'><FaLocationDot className="text-[#1ABA9B]"></FaLocationDot> Location: {location}</h5>
                        <h5 className='text-base font-semibold flex items-center gap-2'><FaChartArea className="text-[#1ABA9B]"></FaChartArea> Area: {area}</h5>
                    </div>
                    <Link to={`/state/${id}`}>
                        <button className="btn btn-md bg-gradient-to-r mb-3 from-[#1debc1] to-[#1ABA9B] font-semibold text-base w-full text-white">View Property</button>
                    </Link>
                </div>
                <div className="border-t flex items-center justify-between px-6">
                    <p className="text-base font-bold text-[#1ABA9B] mt-2 mb-4">Segment: {segment_name}</p>
                    <p className="text-base font-bold p-2 bg-[#1ABA9B] text-white rounded-full mt-2 mb-4"> {id}</p>
                </div>
            </div>
        </div>
    );
};

export default LuxuryState;