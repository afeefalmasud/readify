import Category from "@/components/categories/category";
import Featured from "@/components/featured/featured";
import Hero from "@/components/hero/hero";
import MarqueeComponent from "@/components/marquee/marquee";
import Reason from "@/components/reason/reason";


export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <MarqueeComponent></MarqueeComponent>
      <Featured></Featured>
      <Category></Category>
      <Reason></Reason>
    </main> 
  );
}
