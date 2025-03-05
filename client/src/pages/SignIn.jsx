import React from "react";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-full max-w-sm mx-4 rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <h6 className="text-2xl font-bold text-[var(--color-primary)]">
            Sign In
          </h6>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Please sign in to Chat App
        </p>

        <form action="" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="font-medium text-gray-700 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button className="w-full text-lg font-semibold text-white bg-[var(--color-primary)] py-2 rounded-md hover:bg-opacity-90 transition-all">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
