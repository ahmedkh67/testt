import { Navbar, Hero, Moresec } from "@/Components";
import Image from "next/image";



export default function Home() {

  return (    
    <>
      <div className="Homepage_background">
        <Navbar/>
        <Hero title={"Welcome"} 
        des={"best traditional dishes with local products of highest qualityies"}
        btn="Read more"
        />

      </div>
      <Moresec />

    </>
      
  );
}

