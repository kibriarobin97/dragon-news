import { FaRegBookmark, FaEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const NewsCard = ({ aNews }) => {
    const { title, image_url, details, author, total_view, rating, _id } = aNews;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md  text-black">
            <div className="flex items-center justify-between space-x-4 bg-[#F3F3F3] p-2 rounded-md">
                <div className="flex space-x-4">
                    <img alt="" src={author.img} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{author?.name}</a>
                        <span className="text-xs text-[#706F6F]">{author.published_date}</span>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button><FaRegBookmark className="text-xl" /></button>
                    <button><FiShare2 className="text-xl" /></button>
                </div>
            </div>
            <div>
                <h2 className="mb-2 text-xl font-semibold">{title}</h2>
                <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                {
                    details.length > 200
                        ? <div>
                            <p className="text-sm text-[#706F6F]">{details.slice(0, 200)}...</p>
                            <Link to={`/news/${_id}`} className="text-[#F75B5F] text-sm font-semibold">Read More</Link>
                        </div>
                        : <p className="text-sm text-[#706F6F]">{details}</p>
                }

            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <button aria-label="Share this post" type="button" className="p-2 text-center flex items-center justify-center gap-2">
                        <FaStar className="text-xl text-[#FF8C47]"/>
                        <span>{rating.number}</span>
                    </button>
                </div>
                <div className="flex space-x-2 text-sm text-gray-700">
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <FaEye className="text-xl" />
                        <span>{total_view}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};


NewsCard.propTypes = {
    aNews: PropTypes.object
}

export default NewsCard;