'use client'
import Sidebar from '../../../../components/Dashboard/sidebar_cyboks';
import  data  from '../../../../data/data.json'
import Navbar from '../../../../components/Dashboard/navbar_cyboks';
import Link from 'next/link';
import { FileUpload } from '@/components/Dashboard/file_upload';
import { FormInput } from '@/components/form_input';


export default async function Blogservice({params}: any) {
  const sservice = data
  const service = sservice.services && sservice.services.length > 0
  ? sservice.services.find((serv: any) => serv.slug === params.slug)
  : null;
  
  return (
    <main className="sm:flex sm:flex-row w-full h-fit bg-fixed bg-center bg-cover bg-[url('../assets/images/back.png')]">
          <div>
          <Sidebar/>
          <Navbar/>
          </div>
    <div className="p-4 sm:ml-72 p-2 mt-16 gap-4 flex flex-row">
      <div className='w-1/2'>
    <div className="container mx-auto py-8 h-fit bg-white rounded-lg sm:rounded-lg px-8">
      <h1 className="text-3xl text-violet-400 font-bold mb-4">{service?.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-bold">DPO Name:</div>
        <div>{service?.dpoName}</div>
        <div className="font-bold">DPO Phone:</div>
        <div>{service?.dpoPhone}</div>
        <div className="font-bold">DPO Email:</div>
        <div>{service?.dpoEmail}</div>
        <div className="font-bold">Document Status:</div>
        <div>{service?.docStatus}</div>
        <div className="font-bold">Document 1:</div>
        <div><Link href="" className='text-blue-300 hover:underline'>{service?.doc1}</Link></div>
        <div className="font-bold">Document 2:</div>
        <div><Link href="" className='text-blue-300 hover:underline'>{service?.doc2}</Link></div>
        <div className="font-bold">Document 3:</div>
        <div><Link href="" className='text-blue-300 hover:underline'>{service?.doc3}</Link></div>
        <div className="font-bold">Document 4:</div>
        <div><Link href="" className='text-blue-300 hover:underline'>{service?.doc4}</Link></div>
        
      </div>
    </div>
    <div className='pt-2'>
        <form>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                </svg>
                              <span className="sr-only">Attach file</span>
                          </button>
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                              <span className="sr-only">Embed map</span>
                          </button>
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                </svg>
                              <span className="sr-only">Upload image</span>
                          </button>
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                    <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"/>
                                </svg>
                                <span className="sr-only">Format code</span>
                          </button>
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"/>
                                </svg>
                              <span className="sr-only">Add emoji</span>
                          </button>
                      </div>
                      <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"/>
                                </svg>
                              <span className="sr-only">Add list</span>
                          </button>
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                                </svg>
                              <span className="sr-only">Settings</span>
                          </button>
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"/>
                                    <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"/>
                                </svg>
                              <span className="sr-only">Timeline</span>
                          </button>
                          <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                </svg>
                              <span className="sr-only">Download</span>
                          </button>
                      </div>
                  </div>
                  <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"/>
                        </svg>
                      <span className="sr-only">Full screen</span>
                  </button>
                  <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      Show full screen
                      <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
              </div>
              <div className="px-4 bg-white rounded-b-lg dark:bg-gray-800">
                  <label htmlFor="editor" className="sr-only">Publish post</label>
                  <textarea id="editor" rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
              </div>
          </div>
          <button 
            type='submit'
            className="ml-6 py-2 px-4 bg-black bg-opacity-0 border border-solid border-white hover:bg-violet-500 text-white font-semibold rounded-xl">
              Comment
          </button>
        </form>
        </div>
    </div>
    <div className="w-1/2">
    <div className="container mx-auto py-8 h-fit border rounded-lg sm:rounded-lg px-8">
    <div className=' px-4'>
            <div className=" px-2 rounded-lg sm:rounded-lg m-2">
                <h3 className="font-bold font-['Open Sans'] text-xl text-white pl-2 pt-1">Compliance Steps</h3>
                <div>
                  <div className=" p-2 mt-4 rounded-lg sm:rounded-lg m-2">
                  <div className="text-white text-sm hover:text-violet-400">
                    <Link href={""}>1. Summary About The Law</Link>
                  </div>
                  <div className="mt-1">
                    <FileUpload
                      labelClass="text-white text-sm font-normal "
                      labelName="2. General data mapping questionnaire"
                      inputType="file"
                      inputClass="relative ml-3 block w-full min-w-0 flex-auto rounded border border-solid border-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                      inputName="Document"
                      containerClass="w-full sm:pr-4" 
                      disable={false} 
                      handleFileChange={undefined}
                      />
                  </div>   
                  <div>
                    <FileUpload
                     labelClass="text-white text-sm font-normal "
                     labelName="3. Gap Analysis"
                     inputType="file"
                     inputClass="relative ml-3 block w-full min-w-0 flex-auto rounded border border-solid border-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                     inputName="Document"
                     containerClass="w-full sm:pr-4"
                     disable={false} 
                     handleFileChange={undefined}
                    />
                  </div>
                  <div>
                    <FileUpload
                      labelClass="text-white text-sm font-normal "
                      labelName="4. Risk Assessments"
                      inputType="file"
                      inputClass="relative ml-3 block w-full min-w-0 flex-auto rounded border border-solid border-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                      inputName="Document"
                      containerClass="w-full sm:pr-4" 
                      disable={false} 
                      handleFileChange={undefined}
                      />
                  </div>
                  <div>
                    <FileUpload
                      labelClass="text-white text-sm font-normal "
                      labelName="5. Risk Mitigation"
                      inputType="file"
                      inputClass="relative ml-3 block w-full min-w-0 flex-auto rounded border border-solid border-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                      inputName="Document"
                      containerClass="w-full sm:pr-4" 
                      disable={false} 
                      handleFileChange={undefined}
                      />
                  </div>
                  <div>
                    <FileUpload
                      labelClass="text-white text-sm font-normal "
                      labelName="6. Incidence Response Plan"
                      inputType="file"
                      inputClass="relative ml-3 block w-full min-w-0 flex-auto rounded border border-solid border-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                      inputName="Document"
                      containerClass="w-full sm:pr-4" 
                      disable={false} 
                      handleFileChange={undefined}
                      />
                  </div>
                  <div className="text-white text-sm mt-1 hover:text-violet-400">
                    <FormInput 
                    labelClass="text-gray-700 text-sm text-white font-normal font-['Open Sans']"
                    containerClass="" 
                    labelName='Link to training' 
                    inputType='Link' 
                    inputClass='border bg-neutral-100 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                    inputName='text' 
                    inputPlaceholder='Link' 
                    />
                  </div>
                  </div>
                  <div className="flex justify-between mt-4 px-16">
                  <button
                    className="bg-black py-2 bg-opacity-0 border border-solid border-white hover:bg-violet-500 text-white font-semibold  w-full rounded-xl">
                      Save
                    </button>
                    <button 
                    type='submit'
                    className="ml-6 py-2 bg-black bg-opacity-0 border border-solid border-white hover:bg-violet-500 text-white font-semibold w-full rounded-xl">
                      Submit
                    </button>
                  </div>
                </div>
            </div>
            <div className=" p-2 mt-2 rounded-lg sm:rounded-lg m-2">
                <div className="p-4 mt-1">
                  <FileUpload
                    labelClass="text-white text-sm font-normal "
                    labelName="Required Data Protection Policies"
                    inputType="file"
                    inputClass="relative ml-3 block w-full min-w-0 flex-auto rounded border border-solid border-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                    inputName="Document"
                    containerClass="w-full sm:pr-4" 
                    disable={false} 
                    handleFileChange={undefined}
                    />
                </div>
                <div className="flex justify-between px-16">
                  <button 
                    className="bg-black bg-opacity-0 border border-solid border-white hover:bg-violet-500 text-white font-semibold py-2 w-full rounded-xl">
                      Save
                  </button>
                  <button 
                    type='submit'
                    className="ml-6 bg-black bg-opacity-0 border border-solid border-white hover:bg-violet-500 text-white font-semibold py-2 w-full rounded-xl">
                      Submit
                  </button>
                </div>
            </div>  
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
    { params: { slug: 'skol_Ltd' } },
    { params: { slug: 'service4' } },
  ];
  return { paths, fallback: false };
}
