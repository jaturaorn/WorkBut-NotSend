import Link from "next/link";

import Layout from "../component/layout";

const pagelog = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-[500px] w-full bg-white text-[#1946BA]">
        <form
          id="registration"
          className="flex flex-col gap-6 max-w-md w-full bg-white p-4 border-t rounded-lg shadow-md"
        >
          <h1 className="uppercase text-center my-4 select-none text-5xl font-semibold">
            Login
          </h1>
          <label className="text-center text-lg font-semibold">Username</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Username"
            id="username"
            required
            className="transition bg-transparent duration-300 p-2 border-b-2 border-solid border-white 
            shadow-lg focus:outline-none mx-auto max-w-full w-96 focus:border-sky-500 rounded-md"
          />
          <label className="text-center text-lg font-semibold">Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            id="password"
            required
            className="transition bg-transparent duration-300 p-2 border-b-2 border-solid border-white 
            shadow-lg focus:outline-none mx-auto max-w-full w-96 focus:border-sky-500 rounded-md"
          />
          <Link
            href="/overview"
            type="submit"
            value="submit"
            className="text-sm text-center font-medium cursor-pointer py-3 bg-gradient-to-r from-cyan-400 to-teal-300 transition duration-300 hover:opacity-70 
          mx-auto w-96 max-w-full uppercase"
          >
            Submit
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default pagelog;
