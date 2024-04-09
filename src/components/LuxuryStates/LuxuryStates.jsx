import { useLoaderData } from 'react-router-dom';
import LuxuryState from "../LuxuryState/LuxuryState";

const LuxuryStates = () => {
    const allStates = useLoaderData();

    return (
        <div className='bg-white py-16'>
            <h2 className='text-center mb-5 font-bold font-montserrat text-3xl md:text-4xl uppercase'>Luxury <span className='font-normal'>Estates</span></h2>
            <p className="text-center mb-20 text-sm md:text-lg w-11/12 lg:w-2/3 mx-auto">Luxury real estate epitomizes opulence, exclusivity, and unparalleled quality. These properties boast lavish amenities, breathtaking views, and meticulously crafted interiors, offering an unmatched lifestyle experience.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl w-11/12 mx-auto'>
                {
                    allStates.map(state => <LuxuryState state={state} key={state.id}></LuxuryState>)
                }
            </div>
        </div>
    );
};

export default LuxuryStates;