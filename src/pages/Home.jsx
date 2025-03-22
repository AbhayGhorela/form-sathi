import "../App.css"
function Home() {
  return (
    <div>
        <main>
          <div className="heroSection bg-[url(./assets/heroSection.jpg)] w-full min-h-screen bg-center bg-no-repeat bg-cover text-center">
            <h1 className=" text-white font-bold text-5xl  xl: pt-60 px-38 leading-14">Apply for Government Exams Easily with AI Assistance!</h1>
            <p className="text-white xl:text-2xl font-semibold my-12 mx-52 leading-14">Find and apply for all government exams in one place with AI-powered assistance. Securely store your documents, check your eligibility, and let AI auto-fill your application forms—saving you time and effort!</p>
          </div>
        </main>
    </div>
  )
}

export default Home