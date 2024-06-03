import Image from "next/image";
import React from "react";

const Projects = () => {
    return (
        <div>
            <div>

                <h1 className="text-6xl font-bold pt-4 ">
                    Projects<span className="text-6xl text-[#6e06f2] font-bold">.</span>
                </h1>
                <div className="flex w-[100%] gap-6 flex-col-reverse sm:flex-row ">

                    <div className="w-[100%]  bg-white sm:flex-col sm:w-[60%]">

                        <img src="first.1.jpeg" className="h-[60%] w-[95%] rounded-xl  mt-10 " alt="" />

                        <h2 className="text-3xl font-bold py-6">
                            TaskFlow
                        </h2>
                        <p className="text-xl font-medium max-width[100%]">
                            Task management system with drag-and-drop, real- <br /> time collaboration, and responsive layout.
                        </p>
                    </div>


                    <div className="w-[100%] bg-white sm:w-[60%]">
                        <img src="big-right.jpeg" className="h-[60%] w-[100%] mt-10 rounded-xl" style={{}} alt="" />
                        <h2 className="text-3xl font-bold py-6">
                            EcoCart
                        </h2>
                        <p className="text-xl font-medium max-width[100%]">
                            E-commerce platform promoting eco-friendly products with payment integration.
                        </p>

                    </div>
                </div>

                <div className="flex  flex-col-reverse gap-6 pb-20 sm:flex-row w-[100%]">
                    <div className="w-[100%] h-[600px] bg-white sm:w-[60%]">
                        <img src="big-right.jpeg" className="h-[60%] w-[100%] mt-10 rounded-xl " />
                        <h2 className="text-3xl font-bold py-6">
                            EventPlanner
                        </h2>
                        <p className="text-xl font-medium max-width[100%]">
                            E-commerce platform promoting eco-friendly products with payment integration.
                        </p>

                    </div>

                    <div className="w-[100%] bg-white sm:w-[60%]">

                        <img src="first.1.jpeg" className="h-[60%] w-[95%] rounded-xl  mt-10 " alt="" />

                        <h2 className="text-3xl font-bold py-6">
                            FoodieFinder
                        </h2>
                        <p className="text-xl font-medium max-width[100%]">
                            Task management system with drag-and-drop, real- <br /> time collaboration, and responsive layout.
                        </p>
                    </div>
                </div>
            </div>


        </div>








    );
};

export default Projects;
