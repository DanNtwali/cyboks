'use client';
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Dashboard/sidebar";
import Navbar from "@/components/Dashboard/navbar";
import { usePathname } from "next/navigation";
import AxiosAPI from "@/utils/axiosApi";

interface pageProps {
  params: { info: string, slug: string};
}
export default function Info() {
  const [user, setUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const axiosAPI = new AxiosAPI();
    const router = usePathname();
  
    var parts = router.split('/');
    var lastString = parts[parts.length - 1];
    const paths = { params: { slug: lastString } };
  

  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);
      try {
        const response = await axiosAPI.get<any>(`/getData/clientsdoc/${Number(paths?.params.slug)}`);
        setUser(response);
        console.log('Fetched data', response);
        
    } catch (error) {
        console.error(error);
    }
    setIsLoading(false);
};
fetchData();
}, []);
  console.log('Fetching data', user)

  return (
    <main className="sm:flex sm:flex-row w-full h-screen bg-fixed bg-center bg-cover bg-[url('../assets/images/signup_bg.png')]">
      <div>
        <Sidebar />
        <Navbar />
      </div>
      <div className="p-4 sm:ml-64">
        <div className="pt-12 p-2 mt-14 rounded-lg sm:rounded-lg m-2">
          <div>
            <h3 className="font-bold  text-lg text-white pl-2 pt-1">
              {user?.user?.companyName}
            </h3>
          </div>
            The Processes will be here
        </div>
      </div>
    </main>
  );
}

