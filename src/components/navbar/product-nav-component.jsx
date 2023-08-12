import { Link } from "react-router-dom";
import { FilterComp } from "../filter/filter-component";

export const ProductNavbar = () => {
  return (
    <div>
      <div className=" flex flex-row items-center justify-between ">
        <div className="text-2xl font-bold w-1/4 ">Products</div>
        <div className="  w-1/2 ">
          <FilterComp />
        </div>
        <div className="w-1/4 flex items-center justify-end ">
          <Link to={"/add-product"}>
            <button className="w-20 px-2 py-1 text-lg bg-blue-700 font-semibold rounded-md  text-white ">
              New
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
