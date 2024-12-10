import { ReactSVG } from "react-svg";

const SearchBar = () => {
    const icon = <ReactSVG src="/assets/icons/search.svg" width={20} height={20} />;

    return <div>
        <div className="hidden md:flex w-[22rem] items-center px-4 py-3 border border-secondary rounded-lg cursor-pointer transition hover:bg-dark-hover">
            { icon }
            <div className="ml-4 text-sm text-secondary">
                Cari aset di Pintu
            </div>
        </div>
        <div className="md:hidden px-4 py-2 cursor-pointer">
            { icon }
        </div>
    </div>
}

export default SearchBar;
