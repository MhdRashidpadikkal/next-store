import Featured from "@/components/home/Featured";
import { Hero } from "@/components/home/Hero";
import TrendingProduct from "@/components/home/TrendingProduct";
import Image from "next/image";




export default function Home() {
  return (
   <div>
    <Hero />
    <Featured />
    <div className="py-6">
      <Image 
        src="/images/home/ad-baner.png"
        width={1500}
        height={250}
        alt="Ad Banner"
        className=" "
      />
    </div>
    <TrendingProduct />
   </div>
  );
}
