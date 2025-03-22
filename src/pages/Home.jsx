import "../App.css";
function Home() {
  return (
    <div>
      <main>
        <div className="heroSection bg-[url(./assets/heroSection.jpg)] w-full min-h-screen bg-center bg-no-repeat bg-cover text-center">
          <h1
            className=" text-white font-bold text-3xl md:text-4xl lg:text-5xl pt-20 md:pt-40 xl:pt-60
 px-4 md:px-8 lg:px-16 xl:px-32 leading-tight md:leading-relaxed lg:leading-loose xl:leading-14 "
          >
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
        </div>
      </main>
    </div>
  );
}

export default Home;
