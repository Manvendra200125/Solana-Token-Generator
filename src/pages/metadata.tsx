import type { NextPage } from "next";
import Head from "next/head";
import { MetadataView } from "../views";

const Metadata: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NEON</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <MetadataView />
    </div>
  );
};

export default Metadata;