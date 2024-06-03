" use client"
import React from "react"


const Footer = () => {

    return (


        <div>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                crossOrigin="anonymous" referrerPolicy="no-referrer" />


            <div className="  justify-between items-center h-[100px] bg-white  hidden sm:block  ">
                <ul className=" flex justify-center items-center gap-6 text-xl font-bold  sm:justify-end  ">
                    <li> <span className=" text-[#6e06f2]">Home</span></li>
                    <li>Project</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>

                <div className="flex gap-6">

                    <i className="fa-brands fa-instagram fa-xl "></i>
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    <i className="fa-solid fa-globe fa-xl" style={{ color: "#0c012d" }}></i>

                </div>

            </div>




                    <h1 className="text-xl font-bold py-6">
                        Interested in working together?
                    </h1>
            <div className="flex  justify-between items-center pb-32 sm:flex-row">


                <div className="flex flex-col sm:flex-row ">
                   
                        <button className="text-white bg-blue-700 p-2 rounded-lg ">Get In touch</button>
                        <button className=" font-semibold p-2 border border-black sm:ml-4 ml-0 mt-4 sm:mt-0 rounded-lg">Browse Projects</button>
                    
                </div>
                <div className="ml-12 sm:ml-0">
                    <p className="text-xl font-medium ">
                        ©2023 All Rights Reserved.
                    </p>
                    <p className="text-xl font-medium  pl-10">
                        Made with 💜 by @bhi
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Footer




