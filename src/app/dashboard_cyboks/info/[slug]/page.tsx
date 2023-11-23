import fs from 'fs';
import Navbar from "@/components/Dashboard/navbar_aqs";
import Sidebar from "@/components/Dashboard/sidebar_aqs";
import Link from "next/link";
import React from "react";
import path from 'path';

interface pageProps{
    params: {info: string}
}
export default async function Info({params}) {
    
    const infos = await getData()
    const info = infos.info && infos.info.length > 0
    ? infos.info.find((info: { slug: any; }) => info.slug === params.slug)
    : null;
  
    return(
        <main className="sm:flex sm:flex-row w-full h-screen bg-fixed bg-center bg-cover bg-[url('../assets/images/signup_bg.png')]">
          <div>
          <Sidebar/>
          <Navbar/>
          </div>
        <div className="p-4 sm:ml-64">
            <div className="pt-12 p-2 mt-14 rounded-lg sm:rounded-lg m-2">
                <div>
                    <h3 className="font-bold font-['Open Sans'] text-lg text-white pl-2 pt-1">{info.title}</h3>
                </div>
                <div className='mt-6'>
                    <ol className="flex items-center w-full text-sm font-medium text-center text-white dark:text-white sm:text-base">
                        <li className="flex md:w-full items-center text-orange-500 dark:text-orange-400 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-white dark:after:text-white">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                Received<span className="hidden sm:inline-flex sm:ml-2"> By</span><span className="hidden sm:inline-flex sm:ml-2"> AQS</span>
                            </span>
                        </li>
                        <li className="flex text-xs md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-white dark:after:text-white">
                                <span className="mr-2">2</span>
                                Under<span className="hidden sm:inline-flex sm:ml-2"> Review</span><span className="hidden sm:inline-flex sm:ml-2"> by</span><span className="hidden sm:inline-flex sm:ml-2">AQS</span>
                            </span>
                        </li>
                        <li className="flex text-xs md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-white dark:after:text-white">
                                <span className="mr-2">3</span>
                                Sent <span className="hidden sm:inline-flex sm:ml-2"> To</span> <span className="hidden sm:inline-flex sm:ml-2"> NCSA</span>
                            </span>
                        </li>
                        <li className="flex text-xs md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-white dark:after:text-white">
                                <span className="mr-2">4</span>
                                Under<span className="hidden sm:inline-flex sm:ml-2"> Review</span><span className="hidden sm:inline-flex sm:ml-2"> by</span><span className="hidden sm:inline-flex sm:ml-2">AQS</span>
                            </span>
                        </li>
                        <li className="flex text-xs items-center">
                            <span className="mr-2">5</span>
                            Confirmation
                        </li>
                    </ol>
                    <div className="text-white text-xl text-center mt-4">
                        No documents Uploaded
                    </div>
                    <div className="text-white text-lg mt-4 hover:text-orange-500">
                        <Link href={"/dashboard_aqs/documents"}>
                            + add clients documents
                        </Link>
                    </div>
                </div>
            </div>
       </div>

       </main>
    );
}
export async function getStaticPaths() {
    const paths = [
      { params: { slug: 'chuk' } },
      { params: { slug: 'norrsken' } },
      { params: { slug: 'skol_ltd' } },
    ];
    return { paths, fallback: false };
  }
  
  async function getData() {
      const filePath = path.join(process.cwd(), 'data', 'data.json');
      const fileData = fs.readFileSync(filePath, 'utf8');
      const info = JSON.parse(fileData);
    return info;
    }