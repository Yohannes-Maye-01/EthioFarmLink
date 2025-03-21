

import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";


export default function Index() {
  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <Header />
      <Outlet />

    </div>
    
    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quod asperiores aspernatur animi tempore! Culpa, qui quidem, dolores at vel inventore quibusdam sapiente nam adipisci distinctio eos nostrum est atque!</div>
   



     
  );
}
