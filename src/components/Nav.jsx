import { Link, useLocation, } from "react-router-dom";

const links = [
  {
    name:"home",
    path:"/"
  },
  {
    name:"about",
    path:"/about"
  },
  {
    name:"exams",
    path:"/exams"
  },
  {
    name:"FAQ's",
    path:"/faqs"
  },
  {
    name:"contact",
    path:"/contact"
  },
]
function Nav() {
  const location = useLocation()
  return (
    <header className="w-full bg-transparent text-white py-8 px-5 xl:py-4 flex justify-between items-center absolute z-10 top-0">
        {/* Logo */}
        <h1 className="text-blue-600 text-2xl">From <span className="text-green-400">Sathi</span></h1>
        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-15">
            <ul className="flex items-center gap-16">
                {links.map((link,index)=>{
                  const isActive = link.path === location.pathname
                  return <Link to={link.path} key={index} className={`${isActive?'text-green-400 border-b-2 border-green-400':''} capitalize font-medium hover:text-green-400 transition-all`}>{link.name}</Link>
                  
                })}
            </ul>
            <div className="">
                <button className="px-3 py-2 bg-black rounded-md font-semibold mx-2">Login</button>
                <button className="px-3 py-2 bg-white text-black rounded-md font-semibold mx-2">Sign Up</button>
            </div>
        </div>
    </header>
  );
};

export default Nav