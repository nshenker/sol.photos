import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageProfile from "../components/PageUserProfile";

const Home: NextPage = () => {
    return (
        <Layout>
            <PageProfile />
        </Layout>
    );
};

export default Home;
