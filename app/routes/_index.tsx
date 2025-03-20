

import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";


export default function Index() {
  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <Header />
      <Outlet />

    </div>
    
      
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        
      </body>
      </html>



     
  );
}
