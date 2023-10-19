import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const {title,image_url } = brand;
    return (
        <Link to={`/product/${title}`} className="hover:shadow-md max-w-[380px] border-2 border-cyan-300">
            <div className="p-6 flex justify-center items-center">
                <img className="w-42 h-36" src={image_url} alt="" />
            </div>
            <p className="text-center text-2xl font-bold pb-4">{title}</p>
        </Link>
    );
};

export default BrandCard;