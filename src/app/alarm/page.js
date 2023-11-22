import Layout from "../component/layout";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <h1>pageAlarm</h1>
        <Link href="/">← Back to home</Link>
      </div>
    </Layout>
  );
};

export default page;
