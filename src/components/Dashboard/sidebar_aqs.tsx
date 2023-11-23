'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { InputProps } from 'rsuite';


function Sidebar({view}: InputProps) {
   const [isOpen, setIsOpen] = useState(false);
   const router = usePathname();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <ul className="space-y-2 font-medium">
             <li>
                <Link href="/dashboard_aqs" className="flex items-center p-2 text-white rounded-lg hover:bg-orange-500 group hover:font-bold">
                   <div className=" bg-white px-2 py-1 rounded-lg group-hover:bg-orange-500 ">
                    <svg className="flex-shrink-0 w-5 h-5 text-orange-500 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                   </div>
                   <span className="ml-3 text-white ">Dashboard</span>
                </Link>
             </li>
             <li> 
               <div className='text-white rounded-lg hover:bg'>
                  <div className={(router === '/dashboard_aqs/received' || router === '/dashboard_aqs/under_review')?"flex items-center p-2 text-gray-600 rounded-lg bg-white group font-bold":"flex items-center p-2 text-gray-900 rounded-lg hover:bg-orange-500 group hover:font-bold"} onClick={toggleDropdown}>
                  <div className=" bg-white px-2 py-1 rounded-lg group-hover:bg-orange-500 ">
                    <svg className="flex-shrink-0 w-5 h-5 text-orange-500 transition duration-75 group-hover:text-white hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                   </svg>
                   <svg  className="flex-shrink-0 w-5 h-5 text-orange-500 transition duration-75 group-hover:text-white " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="12" width="6" height="8" rx="1" />  <rect x="9" y="8" width="6" height="12" rx="1" />  <rect x="15" y="4" width="6" height="16" rx="1" />  <line x1="4" y1="20" x2="18" y2="20" /></svg>
                   </div>
                     <span className="flex-1 ml-3 whitespace-nowrap text-white">Companies</span>
                     </div>         
                  
                     <ul className={isOpen?'bg-black bg-opacity-30':'hidden'}>
                     <li>
                     <Link href="/dashboard_aqs/received" className={(router === '/dashboard_aqs/received')?"flex items-center p-2 text-white rounded-lg bg-orange-500 group font-bold":"flex items-center p-2 text-white rounded-lg hover:bg-orange-500 group hover:font-bold"}>
                     <div className=" ml-16 p-2">
                        <span className="flex-1 whitespace-nowrap">Received</span>
                     </div>
                     </Link>
                     </li>
                     <li>
                     <Link href="/dashboard_aqs/under_review" className={(router === '/dashboard_aqs/under_review')?"flex items-center p-2 text-white rounded-lg bg-orange-500 group font-bold":"flex items-center p-2 text-white rounded-lg hover:bg-orange-500 group hover:font-bold"}>
                     <div className=" ml-16 p-2">
                        <span className="flex-1 whitespace-nowrap">Under Review</span>
                     </div>
                     </Link>
                     </li>
                     <li>
                     <Link href="/dashboard_aqs/cancelled" className={(router === '/dashboard_aqs/cancelled')?"flex items-center p-2 text-white rounded-lg bg-orange-500 group font-bold":"flex items-center p-2 text-white rounded-lg hover:bg-orange-500 group hover:font-bold"}>
                     <div className=" ml-16 p-2">
                        <span className="flex-1 whitespace-nowrap">Rejected</span>
                     </div>
                     </Link>
                     </li>
                     <li>
                     <Link href="/dashboard_aqs/sent" className={(router === '/dashboard_aqs/sent')?"flex items-center p-2 text-white rounded-lg bg-orange-500 group font-bold":"flex items-center p-2 text-white rounded-lg hover:bg-orange-500 group hover:font-bold"}>
                     <div className=" ml-16 p-2">
                        <span className="flex-1 whitespace-nowrap">Sent</span>
                     </div>
                     </Link>
                     </li>
                     <li>
                     <Link href="/dashboard_aqs/certified" className={(router === '/dashboard_aqs/certified')?"flex items-center p-2 text-white rounded-lg bg-orange-500 group font-bold":"flex items-center p-2 text-white rounded-lg hover:bg-orange-500 group hover:font-bold"}>
                     <div className=" ml-16 p-2">
                        <span className="flex-1 whitespace-nowrap">Certified</span>
                     </div>
                     </Link>
                     </li>
                  </ul>
               </div>
            </li>
             <li>
                <Link href="/dashboard_aqs/feedback" className="flex items-center p-2 text-white rounded-lg hover:bg-orange-500 group hover:font-bold">
                   <div className=" bg-white px-2 py-1 rounded-lg group-hover:bg-orange-500 ">
                    <svg className="flex-shrink-0 w-5 h-5 text-orange-500 transition duration-75 group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                  </div>
                   <span className="flex-1 ml-3 whitespace-nowrap">Feedback</span>
                   <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">0</span>
                </Link>
             </li>
            
          </ul>
    </aside>
  )
}

export default Sidebar