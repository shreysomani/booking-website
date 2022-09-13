import Image from 'next/image';
import nextConfig from '../next.config'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h[500px] xl:h-[600px]
     2xl:h-[700px]'>
        
        <Image src="https://links.papareact.com/0fm" 
        layout= "fill"
        objectFit='container'
        />
        <div className=' absolute top-1/2 w-full text-center font-medium'>
            <p className='text-sm sm:text-lg'>Hi! shrey not sure where to go? Perfect.</p>
            <button className=' text-purple-500 bg-white px-10 py-4 
            rounded-full shadow-md font-bold my-3 hover:shadow-xl
            active:scale-90 duration-150'>
                Explore</button>
        </div>
    </div>
  )
}

export default Banner