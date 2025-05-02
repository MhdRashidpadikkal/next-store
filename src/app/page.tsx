import Featured from "@/components/home/Featured";
import { Hero } from "@/components/home/Hero";
import TrendingProduct from "@/components/home/TrendingProduct";
import { TrendingUp } from "lucide-react";

export default function Home() {
  return (
   <div>
    <Hero />
    <Featured />
    <TrendingProduct />
   </div>
  );
}
