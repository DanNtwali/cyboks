'use client'
import { FileUpload } from "@/components/Dashboard/file_upload";
import Navbar from "@/components/Dashboard/navbar_dpo";
import Sidebar from "@/components/Dashboard/sidebar_dpo";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

function CyboksDashboard() {
     const router = useRouter();
     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       router.push('/dashboard_dpo');
     }

    return(
    <main className="overflow-y-auto sm:flex sm:flex-row w-full h-screen bg-fixed bg-center bg-cover bg-[url('../assets/images/back.png')]">
            <div>
            <Sidebar/>
            <Navbar/>
            </div>
          <div className=' p-4 sm:ml-64 sm:mt-10'>
            <div className=" p-2 mt-14 rounded-lg sm:rounded-lg m-2">
                <h3 className="font-bold font-['Open Sans'] text-xl text-white pl-2 pt-1">Add New Document</h3>
                <form onSubmit={handleSubmit}>
                 <div className=" p-2 mt-4 rounded-lg sm:rounded-lg m-2">
                   <div className="mt-1">
                     <FileUpload
                       labelClass="text-white text-sm font-normal "
                       labelName="1. General data mapping questionnaire"
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
                      labelName="2. Gap Analysis"
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
                       labelName="3. Risk Assessments"
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
                       labelName="4. Risk Mitigation"
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
                       labelName="5. Incidence Response Plan"
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
                   <div>
                     <FileUpload
                       labelClass="text-white text-sm font-normal "
                       labelName="7. Incidence Response Plan"
                       inputType="file"
                       inputClass="relative ml-3 block w-full min-w-0 flex-auto rounded border border-solid border-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                       inputName="Document"
                       containerClass="w-full sm:pr-4" 
                       disable={false} 
                       handleFileChange={undefined}
                       />
                   </div>
                </div>
                <div className="mt-8 px-16">
                  <button 
                  type='submit'
                  className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 w-full rounded-xl">
                    Submit
                  </button>
                </div>
                </form>
            </div>
          </div>
    </main>
  );
}
export default CyboksDashboard