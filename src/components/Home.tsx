import { Button } from "antd";
import Image from "next/image";
import React from "react";


const Homepage = () => {

   return (

      <div>
         <div className=" flex w-full flex-col-reverse  pt-10  sm:flex-row sm:pt-0">
            <div className=" w-[100%] py-14 ">
               <h2 className="text-3xl py-4">Hay,I'm abhi</h2>
               <h1 className="text-4xl font-bold text-start sm:text-8xl"><span className="text-[#6e06f2]">Front</span>end Developer</h1>
               <p className="text-3xl py-4 ">I'm a frontend developer based in Italy, I'll help you build beautiful websites your users will love.</p>
               <div className="flex flex-col sm:flex-row gap-4 w-[50%]justify-center  items-center ">
                  <Button type="primary" className="bg-[#6e06f2]  ">Primary Button</Button>
                  <Button type="primary" className="bg-[#6e06f2]  " >Primary Button</Button>
               </div>

            </div>





            <div className="flex justify-center items-center  w-[100%]  sm:w-[50%]  mt-20  ">
               <Image
                  src="/man.webp"
                  width={450}
                  height={450}
                  alt="Picture of the author"
                  className="rounded-full border border-[#6e06f2] p-10"

               />
            </div>
         </div>


      </div>

   )




}


export default Homepage