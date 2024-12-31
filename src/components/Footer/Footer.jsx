import React from 'react'

const Footer = () => {
  return (
    <div className='w-[80%] mx-auto py-20 '>
        {/* Footer 4 col*/}
        <h1 className='text-white py-10'><a href="#">Questions? Contact us.</a></h1>
        <div>
            {/* 4 Col */}
            <div>
                {/* Links */}
                <div className='flex md:flex-row flex-col justify-between text-white'>
                    {/* Col 1 */}
                    <ul className='flex flex-col gap-2 '>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Investor Relations</a></li>
                        <li><a href="/">Ways to Watch</a></li>
                        <li><a href="/">Corporate Information</a></li>
                        <li><a href="/">Only on Netflix</a></li>
                    </ul>
                    {/* Col 2 */}
                    <ul className='flex flex-col gap-2 '>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Investor Relations</a></li>
                        <li><a href="/">Ways to Watch</a></li>
                        <li><a href="/">Corporate Information</a></li>
                        <li><a href="/">Only on Netflix</a></li>
                    </ul>
                    {/* Col 3 */}
                    <ul className='flex flex-col gap-2 '>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Investor Relations</a></li>
                        <li><a href="/">Ways to Watch</a></li>
                        <li><a href="/">Corporate Information</a></li>
                        <li><a href="/">Only on Netflix</a></li>
                    </ul>
                    {/* Col 3 */}
                    <ul className='flex flex-col gap-2 '>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Investor Relations</a></li>
                        <li><a href="/">Ways to Watch</a></li>
                        <li><a href="/">Corporate Information</a></li>
                        <li><a href="/">Only on Netflix</a></li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
