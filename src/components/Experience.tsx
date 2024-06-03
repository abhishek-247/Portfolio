import React from "react"



const Experience = () => {

    return (
        <div>

            <h1 className="text-6xl font-bold   pt-4">
                Experience
                <span className="text-6xl text-[#6e06f2] font-bold">.</span>
            </h1>

            <div className="flex  w-[100%] gap-6">
                <div className="w-[25%] bg-white mr-24 sm:mr-0">

                    <h1 className="text-2xl font-medium py-4 pl-4 sm:pl-10"> <span className="text-[#6e06f2]">Apple</span></h1>
                    <h1 className="text-2xl font-medium py-4 pl-4 sm:pl-10">Microsoft</h1>
                    <h1 className="text-2xl font-medium py-4 pl-4 sm:pl-10">Spotify</h1>
                    <h1 className="text-2xl font-medium py-4 pl-4 sm:pl-10">Strip</h1>
                    <h1 className="text-2xl font-medium py-4 pl-4 sm:pl-10">Webflow</h1>


                </div>
                <div className="w-[75%]  bg-white">

                    <h1 className="text-2xl font-medium pt-4">Engineer <span className="text-[#6e06f2]">@ Apple</span></h1>
                    <p className="text-sm pt-2 pb-10">May 2018 - Present</p>

                    <p className="text-xl font-medium py-2">Developed and shipped highly interactive web applications for Apple Music using Ember.js

                    </p>
                    <p className="text-xl font-medium py-4">
                        Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs.
                    </p>
                    <p className="text-xl font-medium py-4">
                        Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps
                    </p>
                </div>
            </div>

        </div >

    )

}

export default Experience