import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageHome from "../components/PageHome";

const Home: NextPage = () => {
    return (
        <Layout>
            <PageHome />
        </Layout>
    );
};

export default Home;
