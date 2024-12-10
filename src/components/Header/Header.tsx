import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    return <div className={"flex justify-between items-center"}>
        <div className={"font-neue-haas text-xl md:text-2xl font-semibold pl-4 md:pl-0"}>
            Harga Crypto dalam Rupiah Hari Ini
        </div>
        <SearchBar/>
    </div>
}

export default Header;
