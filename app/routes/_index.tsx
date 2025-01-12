import { Form, useActionData, useNavigate } from "@remix-run/react";
import { users, createUser, User } from "../../user";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

type ActionData = {
  error?: string;
  user?: User;
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const id = formData.get("id") as string;

  if (!email || !password || !name) {
    return {
      error: "All fields are required",
    };
  }
  const existingUser = users.find((user) => user.id === id );

  const newUser = {
    id: uuidv4(),
    email,
    password,
    name,
  }; 
  const user=existingUser || newUser;

  if (!existingUser) {
   createUser(user);
 
  }
  return Response.json({ user },{status:200});
  }



export default function Index() {
  const actionData = useActionData<ActionData>();
  const navigate = useNavigate();
  
  useEffect(() => {

    const user= localStorage.getItem("loggedUser");
    if (user) {
      const userout = JSON.parse(user).id;
      navigate(`/profile/${userout}`);
    }


    if (actionData?.user) {
      localStorage.setItem("loggedUser", JSON.stringify(actionData.user));
      navigate(`/profile/${actionData.user.id}`);
    }

    
  },[actionData, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to EthioFarmLink
        </h1>
        {actionData?.error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {actionData.error}
          </p>
        )}
        <Form method="post" className="space-y-4" >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
           Login
          </button>
        </Form>
      </div>
    </div>
  );
}
