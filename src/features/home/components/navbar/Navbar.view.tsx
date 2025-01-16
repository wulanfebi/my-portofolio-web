import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className="absolute top-0 right-0 left-0 px-[72px] py-10 flex flex-row w-full items-center justify-between bg-[#151517]">
            <p className="text-white font-semibold text-3xl left-[72px] top-10 absolute">wulan.febi</p>
            <FontAwesomeIcon icon={faBarsStaggered} className="text-white text-3xl right-[72px] top-10 absolute" />
        </div>
    );
};
export default Navbar;
