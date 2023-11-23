import React from "react";
import Sidebar from "../../components/Dashboard/sidebar";
import Navbar from "@/components/Dashboard/navbar";

function NcsaDashboard() {
    return(
        <main className="sm:flex sm:flex-row w-full bg-fixed bg-center bg-cover bg-[url('../assets/images/signup_bg.png')]">
          <div>
          <Sidebar/>
          <Navbar/>
          </div>
        <div className="p-4 sm:ml-64">
        <div className="sm:flex sm:flex-row mt-16">
            <div className="flex flex-row bg-white rounded-lg p-4 mx-6 w-full justify-between mt-2">
            <div className="flex flex-row justify-between">
            <p className="text-slate-400 text-xs font-bold font-['Open Sans'] leading-[18px] mr-4">Received <br/>Companies</p>
            </div> 
            <div className="">
               <p className="text-gray-700 text-lg font-bold font-['Open Sans'] leading-relaxed">15</p>
            </div>
            </div>
            <div className="flex flex-row bg-white rounded-lg p-4 mx-6 w-full justify-between mt-2">
            <div className="flex flex-row justify-between">
            <p className="text-slate-400 text-xs font-bold font-['Open Sans'] leading-[18px] mr-4">Cancelled <br/>Companies</p>
            </div> 
            <div className="">
               <p className="text-gray-700 text-lg font-bold font-['Open Sans'] leading-relaxed">15</p>
            </div>
            </div>
            <div className="flex flex-row bg-white rounded-lg p-4 mx-6 w-full justify-between mt-2">
            <div className="flex flex-row justify-between">
            <p className="text-slate-400 text-xs font-bold font-['Open Sans'] leading-[18px]">Companies Under Review</p>
            </div> 
            <div className="">
               <p className="text-gray-700 text-lg font-bold font-['Open Sans'] leading-relaxed">15</p>
            </div>
            </div>
            <div className="flex flex-row bg-white rounded-lg p-4 mx-6 w-full justify-between mt-2">
            <div className="flex flex-row justify-between">
            <p className="text-slate-400 text-xs font-bold font-['Open Sans'] leading-[18px]">Companies Under Review</p>
            </div> 
            <div className="">
               <p className="text-gray-700 text-lg font-bold font-['Open Sans'] leading-relaxed">15</p>
            </div>
            </div>
            </div>
            <div className=''>
            <div className=" p-2 mt-14 bg-white rounded-lg sm:rounded-lg m-2">
                <h3 className="font-bold font-['Open Sans'] text-lg text-black pl-2 pt-1">List of Companies</h3>
                <p className="text-orange-500 text-xl text-semibold pl-2">+ <span className="text-gray-400 text-sm">5 Received Companies</span></p>
                <table className="relative overflow-y-auto w-full text-sm mt-4 font-['Open Sans'] text-left text-gray-500">
                    <thead className="text-xs text-orange-500 bg-gray-50">
                         <tr>
                             <th scope="col" className="px-1 py-2">
                                 Company Name
                            </th>
                            <th scope="col" className="px-1 py-2">
                                 DPO's Name
                            </th>
                            <th scope="col" className="px-1 py-2">
                                 DPO's Email Address
                            </th>
                            <th scope="col" className="px-1 py-2">
                                 DPO's Phone Number
                            </th>
                            <th scope="col" className="px-1 py-2">
                                 Document's Status
                            </th>
                            <th scope="col" className="px-1 py-2">
                                 Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 <a href="http://localhost:3000/info"> CHUK</a>
                            </th>
                            <td className="px-1 py-2">
                                 Antoinette Uwineza
                            </td>
                            <td className="px-1 py-2">
                                 a.uwineza@chuk.rw
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 780345627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from AQS
                            </td>
                            <td className="px-1 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 Norrsken
                            </th>
                            <td className="px-1 py-2">
                                 Rene Patrick Komeza
                            </td>
                            <td className="px-1 py-2">
                                 r.komeza@norrsken.com
                            </td>
                            <td className="px-1 py-2">
                                (+250) 780345627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from Dpo
                            </td>
                            <td className="px-1 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 Skol Ltd
                            </th>
                            <td className="px-1 py-2">
                                 Kayiranga Ernest
                            </td>
                            <td className="px-1 py-2">
                                 e.kayiranga@skolbrewery.com
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 790349627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from NCSA
                            </td>
                            <td className="px-1 py-2">
                                 dropdown
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 CHUK
                            </th>
                            <td className="px-1 py-2">
                                 Antoinette Uwineza
                            </td>
                            <td className="px-1 py-2">
                                 a.uwineza@chuk.rw
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 780345627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from AQS
                            </td>
                            <td className="px-1 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 Norrsken
                            </th>
                            <td className="px-1 py-2">
                                 Rene Patrick Komeza
                            </td>
                            <td className="px-1 py-2">
                                 r.komeza@norrsken.com
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 780345627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from Dpo
                            </td>
                            <td className="px-1 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 Skol Ltd
                            </th>
                            <td className="px-1 py-2">
                                 Kayiranga Ernest
                            </td>
                            <td className="px-1 py-2">
                                 e.kayiranga@skolbrewery.com
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 790349627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from NCSA
                            </td>
                            <td className="px-1 py-2">
                                 dropdown
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 CHUK
                            </th>
                            <td className="px-1 py-2">
                                 Antoinette Uwineza
                            </td>
                            <td className="px-1 py-2">
                                 a.uwineza@chuk.rw
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 780345627
                            </td>
                            <td className="px-1 py-2">
                                Pending from AQS
                            </td>
                            <td className="px-1 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 Norrsken
                            </th>
                            <td className="px-1 py-2">
                                 Rene Patrick Komeza
                            </td>
                            <td className="px-1 py-2">
                                 r.komeza@norrsken.com
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 780345627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from Dpo
                            </td>
                            <td className="px-1 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 Skol Ltd
                            </th>
                            <td className="px-1 py-2">
                                Kayiranga Ernest
                            </td>
                            <td className="px-1 py-2">
                                 e.kayiranga@skolbrewery.com
                            </td>
                            <td className="px-1 py-2">
                                 (+250) 790349627
                            </td>
                            <td className="px-1 py-2">
                                 Pending from NCSA
                            </td>
                            <td className="px-1 py-2">
                                 dropdown
                            </td>
                        </tr>
                             
                    </tbody>
                </table>
                  <div className="flex items-center justify-center">
                    <nav aria-label="Page navigation example">
                     <ul className="flex items-center -space-x-px h-8 text-sm my-2">
                         <li>
                         <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                             <span className="sr-only">Previous</span>
                             <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                             </svg>
                         </a>
                         </li>
                         <li>
                         <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                         </li>
                         <li>
                         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                         </li>
                         <li>
                         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                         </li>
                         <li>
                         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                         </li>
                         <li>
                         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                         </li>
                         <li>
                         <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                             <span className="sr-only">Next</span>
                             <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                             </svg>
                         </a>
                         </li>
                      </ul>
                    </nav>
                  </div>
            </div> 
            </div>
       </div>
       </main>
    );
}
export default NcsaDashboard