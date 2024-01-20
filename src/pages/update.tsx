import type { NextPage } from "next";
import Head from "next/head";
import { UpdateView } from "../views";

const Update: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NEON</title>
      </Head>
      <UpdateView />
    </div>
  );
};

export default Update;