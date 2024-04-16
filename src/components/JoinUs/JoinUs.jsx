import j1 from '../../assets/J1.jpg'
import j2 from '../../assets/j2.jpg'
import j3 from '../../assets/j3.jpg'

const JoinUs = () => {
    return (
        <div className='grid py-28 grid-cols-1 lg:grid-cols-5 max-w-7xl w-11/12 gap-10 mx-auto mt-28'>
            <div className='lg:col-span-2 relative -top-14'>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-4xl mt-16 my-6'>Discover Your Dream Property</h1>
                <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                    className='w-full md:w-5/6'>LURAXRE is one of the most experienced and respected companies. We have been in business for over 20 years and are always open to new experiences.</p>
                <button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className="btn btn-md mb-16  bg-gradient-to-r px-10 mt-6 from-[#1debc1] to-[#1ABA9B] font-semibold text-base text-white">Join Us</button>
            </div>
            <div className='lg:col-span-3 grid grid-cols-3 gap-4 md:gap-8'>
                <figure
                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"><img className='w-full relative top-0' src={j2} alt="" /></figure>
                <figure
                    data-aos="fade-up" data-aos-duration="1200"><img className='w-full relative -top-28' src={j3} alt="" /></figure>
                <figure
                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"><img className='w-full relative -top-12' src={j1} alt="" /></figure>
            </div>
        </div>
    );
};

export default JoinUs;