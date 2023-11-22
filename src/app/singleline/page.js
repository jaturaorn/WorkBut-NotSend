import Layout from "../component/layout";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <h1>Singleline</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </div>
    </Layout>
  );
};

export default page;
