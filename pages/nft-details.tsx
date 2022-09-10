import type { NextPage } from "next";
import Layout from "../components/Layout";
import CardDetails from "../components/PageCharacterDetails/CardDetails";

const Marketplace: NextPage = () => {
    return (
        <Layout>
            <CardDetails />
        </Layout>
    );
};

export default Marketplace;
