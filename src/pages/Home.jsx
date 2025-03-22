import { useState } from "react";
import "../App.css";
import aiImage from "../assets/ai-image.png"

const featuresData = {
  "AI-Powered Eligibility Check": "This feature helps users determine their eligibility for exams using AI.",
  "Auto-Fill Applications": "AI automatically fills out exam applications, saving time and reducing errors.",
  "Document Management & Verification": "Users can upload, store, and verify their documents securely.",
  "Live Updates & Notifications": "Users receive alerts about new exams, deadlines, and status updates."
};

function Home() {
  const [selectedFeature,setSelectedFeature] = useState(Object.keys(featuresData)[0]);

  return (
    <div>
      <main>
        <div className="heroSection bg-[url(./assets/heroSection.jpg)] w-full min-h-screen bg-center bg-no-repeat bg-cover text-center">
          <h1
            className=" text-white font-bold text-3xl md:text-4xl lg:text-5xl pt-28 md:pt-40 xl:pt-60
 px-4 md:px-8 lg:px-16 xl:px-32 leading-tight md:leading-relaxed lg:leading-loose xl:leading-14 ">
            Apply for Government Exams Easily with AI Assistance!
          </h1>
          <p
            className="text-white xl:text-2xl text-lg md:text-xl font-semibold my-12 mx-4 md:mx-12 lg:mx-16 xl:mx-52 leading-normal md:leading-relaxed lg:leading-loose xl:leading-14
"
          >
            Find and apply for all government exams in one place with AI-powered
            assistance. Securely store your documents, check your eligibility,
            and let AI auto-fill your application forms—saving you time and
            effort!
          </p>

          <button className="bg-black text-white px-6 md:px-12 lg:px-16 xl:px-24 py-2 md:py-4 lg:py-6 xl:py-7 rounded-full font-semibold text-sm md:text-base lg:text-lg xl:text-xl">Get Started</button>
        </div>
      </main>
      <section className="aiImgContainer w-full min-h-screen ">
        <img src={aiImage} alt="ai image" />
      </section>
      <section className="features w-full min-h-screen flex justify-center items-center bg-gray-200 bg-cover bg-no-repeat bg-[url(./assets/features.jpg)]">
        <div className="flex gap-10 p-6 bg-white rounded-lg shadow-lg">
          {/* left-side buttons */}
          <div className="flex flex-col gap-4">
            {Object.keys(featuresData).map((feature)=>(
              <button key={feature} onClick={()=>setSelectedFeature(feature)} className={`px-4 py-2 rounded-lg font-semibold ${selectedFeature === feature?"bg-red-500 text-white":"bg-black text-white"}`}>
                {feature}
              </button>
            ))}
          </div>
          {/* right side content */}
          <div className="max-w-lg">
            <p className="text-lg font-medium">{featuresData[selectedFeature]}</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
