

import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";


export default function Index() {
  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <Header />
      <Outlet />

    </div>
    
      
      



     
  );
}
