import Articles from "@/components/Articles/Articles";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout";
import NewsLatter from "@/components/NewsLatter/NewsLatter";

export default function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <Articles></Articles>
      <NewsLatter></NewsLatter>
    </Layout>
  )
}
