import { cli } from "@remix-run/dev";
import { Form, redirect, useLoaderData } from "@remix-run/react";

import { deleteUser, findUser, User } from "user";

export const loader = async ({params}:{params:{id:string}}) => {
  const user=findUser(params.id)
 
if (!user){
  return redirect("/")
}

return (user)
};
export const action = async ({ request, params }: { request: Request,params:{id:string} }) => {
  const formData = await request.formData();
  const action = formData.get("action");
  const user=findUser(params.id)
  if (action=="logout"){
  redirect("/")
}
if (action=="delete"){
  deleteUser(user?.id)
  return redirect("/")
}
return redirect("/")
};


const Profile=()=>{
  const user=useLoaderData<User>()
 const clientSideAction = async (action: string) => {
  if (action === "logout" || action === "delete") {
    localStorage.removeItem("loggedUser");
    return redirect("/");
  }
 }






return (
 
  <div className="flex items-center justify-center h-screen gap-16 bg-gray-100 border border-gray-200 p-8">
  <div className="text-center">
    <h1 className="text-2xl font-bold text-gray-800">Welcome {user.name}</h1>
    <h1 className="text-lg text-gray-600">Email: {user.email}</h1>
    <h1 className="text-lg text-gray-600">Password: {user.password}</h1>
    <h1 className="text-lg text-gray-600">ID: {user.id}</h1>
    <div className="flex flex-col items-center gap-4">
      <Form action="" method="post" onSubmit={() => {clientSideAction("logout")}  }>
        <input type="hidden" name="action" value="logout"/>
      <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600" type="submit">
      Logout
    </button>
      </Form>
   
   <Form action="" method="post"  onSubmit={() => {clientSideAction("logout")} } >
    <input type="hidden" name="action" value="delete" />
   <button className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600" type="submit">
      Delete
    </button>
   </Form>
   
  </div>
  </div>

</div>

)


}
export default Profile


