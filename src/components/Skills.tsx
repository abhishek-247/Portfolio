"use client"

import React from "react"

const Skills = () => {

    return (


        <div>

            <h1 className="text-6xl font-bold py-12 ">
                Skills
                <span className="text-6xl text-[#6e06f2] font-bold">.</span>
            </h1>

            <div className=" flex flex-col sm:flex-row ">
                <div className=" w-[full] sm:w-[25%] pl-10">
                    <h1 className="text-2xl font-bold py-6 pt-8">
                        Web Design
                    </h1>
                    <ul className="text-xl">
                        <li>UI/UX Design</li>
                        <li>Responsive Design</li>
                        <li>Wireframing</li>
                        <li>User Research</li>
                    </ul>

                </div>
                <div className=" w-[full] sm:w-[25%] pr-16 pl-10">
                    <h1 className="text-2xl font-bold py-6 pt-8">
                        Frontend
                    </h1>
                    <ul className="text-xl">
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>NextJS</li>
                        <li>CSS3</li>
                    </ul>


                </div>
                <div className=" w-[full] sm:w-[25%] pr-16 pl-10">
                    <h1 className="text-2xl font-bold py-6 pt-8">
                        Backend
                    </h1>
                    <ul className="text-xl">
                        <li>NodeJs</li>
                        <li>MondoDB</li>
                        <li>ExpressJS</li>
                        <li>Vercel</li>
                    </ul>
                </div>
                <div className=" w-[full] sm:w-[25%] sm:pl-6 pl-10">
                    <h1 className="text-2xl font-bold py-6 pt-8">
                        Soft Skills
                    </h1>
                    <ul className="text-xl">
                        <li>Effective communication</li>
                        <li>Collaboration</li>
                        <li>Commitment</li>
                        <li>Leadership</li>
                    </ul>
                </div>


            </div>

        </div>
    )
}


export default Skills










