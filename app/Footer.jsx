import React from 'react';

const Footer = () => {
    return (

        <footer className="">
             <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="w-full max-w-screen-xl mx-auto px-4 md:py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-1 sm:mb-0">
                        <span className="self-center text-2xl mt-3 font-semibold md:whitespace-nowrap text-black dark:text-black">Information</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className='m-3'>
                            <a href="/" className="mr-4 text-xl  md:mr-6 ">Contributers :</a>
                        </li>
                        <li className='m-2'>
                            <a href="https://github.com/adityach0uhan/adityach0uhan" className="mr-4 hover:text-black md:mr-6 ">Aditya Singh Chauhan</a>
                        </li>
                        <li className='m-2'>
                            <a href="https://github.com/dheeraj4200" className="mr-4 hover:underline md:mr-6 hover:text-black">Dheeraj Patel</a>
                        </li>
                        <li className='m-2'>
                            <a href="https://github.com/Arjun-project" className="mr-4 hover:underline md:mr-6 hover:text-black">Arjun Kushwaha</a>
                        </li>
                        <li className='m-2' >
                            <a href="https://github.com/Aman140404" className="hover:underline hover:text-black">Aman Gupta</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">This website is part of a mini project and is intended for educational and demonstration purposes only. The information presented on this website may not be up-to-date, accurate, or complete.</span>
                <hr className="mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8" />
            </div>
        </footer>



    );
}

export default Footer;
