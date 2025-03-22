
export default function Signup() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-lg font-medium">Password</label>
          <input
            id="password"
            type="password"
            required
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
