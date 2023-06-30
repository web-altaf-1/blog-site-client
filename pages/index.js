import Articles from "@/components/Articles/Articles";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import NewsLatter from "@/components/NewsLatter/NewsLatter";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Articles></Articles>
      <NewsLatter></NewsLatter>
    </div>
  )
}
