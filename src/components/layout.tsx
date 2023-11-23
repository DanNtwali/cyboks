import React from "react";
import Navbar from "@/components/Dashboard/navbar_aqs";
import Sidebar from "./Dashboard/sidebar_aqs";
function NcsaDashboard() {
    return(
        <main className="sm:flex sm:flex-row w-full bg-fixed bg-center bg-cover bg-[url('../assets/images/signup_bg.png')]">
          <Navbar/>
          <Sidebar/>
        </main>
    );
}
export default NcsaDashboard