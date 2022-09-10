import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageProfile from "../components/PageUserProfile";

const Home: NextPage = () => {
    const { hostname } = window.location
    return (
        <Layout>
            {hostname === "sol.photos"
                ? "Hello"  // Home page
                : <PageProfile/>
            }
        </Layout>
    );
};

export default Home;
