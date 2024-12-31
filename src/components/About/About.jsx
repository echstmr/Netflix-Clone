import React from 'react'
import data from '../../assets/data/data.json'
import Tv_Video_1 from '../../assets/img/TV-Video-1.mp4'
import About_Img_1 from '../../assets/img/mobile.jpg'
import About_Img_2 from '../../assets/img/netflix-img.jpg'

const About = () => {
  return (
    <div className='mt-[80px] bg-black px-[100px] md:px-[5] pb-20'>
        {/* About 2 Col */}
        <div className=' container mx-auto flex gap-4 md:flex-row flex-col items-center justify-between pt-[150px]'>
            {/* Col 1 */}
            <div>
                {/* Col 1 Text */}
                <div className='flex flex-col md:gap-0 gap-10 max-w-[600px] min-w-[300px] w-full text-white text-center md:text-start'>
                    <h1 className='text-4xl md:text-6xl font-bold py-0 md:py-5'>{data.About.title}</h1>
                    <p className='md:text-2xl text-[20px]'>{data.About.subtitle}</p>
                </div>
            </div>
                {/* Col 2 */}
                <div>
                    {/* Col 2 Content/Videos  */}
                    <div>
                        <video src={Tv_Video_1} autoPlay loop muted className='rounded-md md:py-0 py-10 max-w-[500px] min-w-[300px] w-full'></video>
                    </div>
                </div>
        </div>
        {/* About 2 Col */}
        <div className=' container mx-auto flex gap-4 md:flex-row-reverse flex-col items-center justify-between pt-[150px]'>
            {/* Col 1 */}
            <div>
                {/* Col 1 Text */}
                <div className='flex flex-col md:gap-0 gap-10 max-w-[600px] min-w-[300px] w-full text-white text-center md:text-start'>
                    <h1 className='text-4xl md:text-6xl font-bold py-0 md:py-5'>{data.About.title2}</h1>
                    <p className='md:text-2xl text-[20px]'>{data.About.subtitle2}</p>
                </div>
            </div>
                {/* Col 2 */}
                <div>
                    {/* Col 2 Content/Videos  */}
                    <div>
                        <img src={About_Img_1} className='max-w-[500px] min-w-[300px] w-full'/>
                    </div>
                </div>
        </div>
        {/* About 2 Col */}
        <div className=' container mx-auto flex gap-4 md:flex-row flex-col items-center justify-between pt-[150px]'>
            {/* Col 1 */}
            <div>
                {/* Col 1 Text */}
                <div className='flex flex-col md:gap-0 gap-10 max-w-[600px] min-w-[300px] w-full text-white text-center md:text-start'>
                    <h1 className='text-4xl md:text-6xl font-bold py-0 md:py-5'>{data.About.title3}</h1>
                    <p className='md:text-2xl text-[20px]'>{data.About.subtitle3}</p>
                </div>
            </div>
                {/* Col 2 */}
                <div>
                    {/* Col 2 Content/Videos  */}
                    <div className='pt-10 md:pt-0'>
                        <img src={About_Img_2} className='max-w-[500px] min-w-[300px] w-full rounded-md'/>
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default About
