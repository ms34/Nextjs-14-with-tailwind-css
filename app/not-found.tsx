import Link from "next/link";

const NotFoundDev = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Oops! This page doesn&apos;t exist.</h1>
        <Link href={"/"}>
          <button className="border w-52 my-6 bg-slate-700 text-white rounded-md hover:bg-slate-600 px-6 py-2">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundDev;
// `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`