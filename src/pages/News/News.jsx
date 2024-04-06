import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from 'react-router-dom';

const News = () => {
    const {id} = useParams()
    // console.log(title)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="col-span-3 p-4">
                    <h3 className="text-xl font-bold mb-4">Dragon News</h3>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;