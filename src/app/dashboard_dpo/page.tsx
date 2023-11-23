import React from "react";
import Sidebar from "../../components/Dashboard/sidebar_dpo";
import Navbar from "@/components/Dashboard/navbar_dpo";
import Popupform from "@/components/Dashboard/popupform";
import Link from "next/link";

function DpoDashboard() {
    return(
        <main className="sm:flex sm:flex-row w-full h-screen bg-fixed bg-center bg-cover bg-[url('../assets/images/signup_bg.png')]">
          <div>
          <Sidebar/>
          <Navbar/>
          </div>
        <div className="p-4 sm:ml-64">
        <div className="sm:flex sm:flex-row mt-16">
            <div className="flex flex-row bg-white rounded-lg p-4 mx-6 w-full justify-between mt-2">
            <div className="flex flex-row justify-between">
            <p className="text-slate-400 text-xs font-bold font-['Open Sans'] leading-[18px] mr-4">Uploaded <br/>Documents</p>
            </div> 
            <div className="">
               <p className="text-gray-700 text-lg font-bold font-['Open Sans'] leading-relaxed">7</p>
            </div>
            </div>
            <div className="flex flex-row bg-white rounded-lg p-4 mx-6 w-full justify-between mt-2">
            <div className="flex flex-row justify-between">
            <p className="text-slate-400 text-xs font-bold font-['Open Sans'] leading-[18px] mr-4">Missing <br/>Documents</p>
            </div> 
            <div className="">
               <p className="text-gray-700 text-lg font-bold font-['Open Sans'] leading-relaxed">1</p>
            </div>
            </div>
            <div className="flex flex-row bg-white rounded-lg p-4 mx-6 w-full justify-between mt-2">
            <div className="flex flex-row justify-between">
            <p className="text-slate-400 text-xs font-bold font-['Open Sans'] leading-[18px]">Notification</p>
            </div> 
            <div className="">
               <p className="text-gray-700 text-lg font-bold font-['Open Sans'] leading-relaxed">10</p>
            </div>
            </div>
            </div>
            <div className=''>
            <div className=" p-2 mt-14 bg-white rounded-lg sm:rounded-lg m-2">
                <h3 className="font-bold font-['Open Sans'] text-lg text-black pl-2 pt-1">List of Uploaded Administrative Documents</h3>
                <Link className="font-medium text-sm ml-2 text-red-600 dark:text-red-500 hover:underline cursor-pointer" href={"/dashboard_dpo/documents"}>+Add</Link>
                <table className="relative overflow-y-auto w-full text-sm text-l mt-4 font-['Open Sans'] text-left text-gray-500">
                    <thead className="text-xs text-orange-500 bg-gray-50">
                         <tr>
                             <th scope="col" className="px-1 py-2">
                                 Documents Description
                            </th>
                            <th scope="col" className="px-8 py-2">
                                 Status From AQS
                            </th>
                            <th scope="col" className="px-8 py-2">
                                 Status From NCSA
                            </th>
                            <th scope="col" className="px-8 py-2">
                                 Document's Expiry Date
                            </th>
                            <th scope="col" className="px-8 py-2">
                                 Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-info="Certificate of incorporation (RDB Certificate in case of a business)">
                                <a href="http://localhost:3000/info">RDB Certificate</a>
                            </th>
                            <td className="px-8 py-2">
                                 Received
                            </td>
                            <td className="px-8 py-2">
                                 Awaited
                            </td>
                            <td className="px-8 py-2">
                                 24/12/2024
                            </td>
                            <td className="px-8 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-info="This is supposed to be the ID or Passport of the dpo">
                                <a href="http://localhost:3000/info">DPO's ID</a>
                            </th>
                            <td className="px-8 py-2">
                                 Sent
                            </td>
                            <td className="px-8 py-2">
                                 Received
                            </td>
                            <td className="px-8 py-2">
                                Lifetime
                            </td>
                            <td className="px-8 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-info="Letter addressed to the Chief Executive Officer NCSA">
                                <a href="http://localhost:3000/info">NCSA Letter</a>
                            </th>
                            <td className="px-8 py-2">
                                 Approved
                            </td>
                            <td className="px-8 py-2">
                                 Certified
                            </td>
                            <td className="px-8 py-2">
                                 12/24/2025
                            </td>
                            <td className="px-8 py-2">
                                 No Actions
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-info="License from Regulator (if applicable) e.g. license issued by RURA, MINICOM">
                                <a href="http://localhost:3000/info">License from Regulator</a>
                            </th>
                            <td className="px-8 py-2">
                                 Approved
                            </td>
                            <td className="px-8 py-2">
                                 Under Review
                            </td>
                            <td className="px-8 py-2">
                                 24/12/2025
                            </td>
                            <td className="px-8 py-2">
                                 No Actions
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
            </div>
       </div>
       </main>
    );
}
export default DpoDashboard