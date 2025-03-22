import { useState } from "react";
import "../App.css";
import aiImage from "../assets/ai-image.png"
import { FaCircleCheck } from "react-icons/fa6";

const featuresData = {
  "AI-Powered Eligibility Check":[
    "Helps users determine their eligibility for exams using AI.",
    "Provides instant results based on user input.",
    "Ensures applicants meet the required criteria before applying."
  ],
  "Auto-Fill Applications":[
    "AI automatically fills out exam applications.",
    "Saves time and reduces errors in manual form filling.",
    "Supports multiple exams with a single data entry."
  ],
  "Document Management & Verification":[
    "Users can upload and store documents securely.",
    "AI verifies documents for authenticity and correctness.",
    "Eases submission processes for multiple applications."
  ],
  "Live Updates & Notifications":[
    "Users receive alerts about new exams and deadlines.",
    "AI tracks submitted applications and informs users.",
    "Prevents missing important dates or last-minute rush."
  ]
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
      <section className="aiImgContainer w-full  ">
        <img src={aiImage} alt="ai image" />
      </section>
      <section className="features w-full min-h-screen flex justify-center items-center bg-gray-200 bg-cover bg-no-repeat bg-[url(./assets/features.jpg)]">
        <div className="flex gap-10 p-6 bg-transparent rounded-lg shadow-lg">
          {/* left-side buttons */}
          <div className="flex flex-col gap-4">
            {Object.keys(featuresData).map((feature)=>(
              <button key={feature} onClick={()=>setSelectedFeature(feature)} className={`px-4 py-2 md:py-4 lg:py-5 xl:py-6 rounded-lg xl:rounded-full font-semibold transition-all hover:bg-red-500 ${selectedFeature === feature?"bg-red-500 text-white":"bg-black text-white"}`}>
                {feature}
              </button>
            ))}
          </div>
          {/* right side content */}
          <div className="max-w-lg flex flex-col justify-center text-white">
            {featuresData[selectedFeature].map((line,index)=>(
              <p key={index} className="text-md lg:text-lg xl:text-xl font-medium m-4"><FaCircleCheck className="inline m-2 text-white shadow-lg" />{line}</p>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
