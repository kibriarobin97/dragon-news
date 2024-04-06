import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams, useLoaderData, Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


const News = () => {


    const newses = useLoaderData()
    const { id } = useParams()

    const news = newses.find(news => news._id === id);
    const { title, details, image_url } = news;

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="col-span-3 p-4">
                    <h3 className="text-xl font-bold mb-4">Dragon News</h3>
                    <div className=" w-full p-4 shadow-md text-gray-100">
                        <div className="flex justify-between pb-4 border-bottom">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-md font-semibold text-black">{title}</h3>
                            </a>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={image_url} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            </div>
                            <div className="space-y-2">
                                <p className="leading-snug text-sm text-[#706F6F]">{details}</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Link to='/'><button className="px-3 py-2 bg-[#D72050] text-white flex items-center gap-2 rounded-sm"><FaArrowLeft />All news in this category</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;