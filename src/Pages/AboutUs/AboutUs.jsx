import { useLoaderData } from 'react-router-dom';
import about1 from '../../assets/about.png'
import about2 from '../../assets/about2.png'
import SingleTeam from '../../components/SingleTeam/SingleTeam';
import { useEffect } from 'react';

const AboutUs = () => {
    const teams = useLoaderData()
    useEffect(() => {
        document.title = "AboutUS - LURAXRE"
    }, [])

    return (
        <div className='w-11/12 max-w-7xl mx-auto text-white'>
            <div>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-5xl mt-16 my-6'>Our story </h1>
                <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                    className='mb-16 w-full md:w-2/6'>Real Estate is one of the most experienced and respected companies. We have been in business for over 20 years and are always open to new experiences.</p>
                <div className='grid grid-cols-1 lg:grid-cols-5  gap-28'>
                    <div data-aos="fade-up" data-aos-duration="1600" data-aos-delay="600" className="col-span-2">

                        <img className='w-full' src={about1} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
                            <h4 className=' mb-5 font-semibold text-2xl'>Discover your perfect rental! <br /> Vibrant cities. Beautiful homes.</h4>
                            <p className='text-sm w-4/5 '>We turn our clients’ ideas and visions into award-winning projects. We work with the intent to exceed our customers’ expectations in terms of safety, quality, functionality and aesthetics and provide assets that stand the test of time.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
                            <h4 className='mt-14 mb-5 font-semibold text-2xl'>Restancy is leading the way in creating unique <br /> real estate. Discover your perfect rental!</h4>
                            <p className='text-sm w-4/5 text-gray-200'>We provide professional legal support in real estate transactions, which guarantees the safety and profitability of transactions. Our real estate database is one of the largest. Therefore, we will always be able to offer you a property in accordance with your requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-center text-4xl mt-28 mb-16'>Our great team</h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 gap-7">
                        {
                            teams.map(team => <SingleTeam key={team.id} team={team}></SingleTeam>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;