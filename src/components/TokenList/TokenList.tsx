import { useCurrencies } from "@/contexts/CurrenciesContext";
import TokenListRow from "../TokenListRow/TokenListRow"
import { usePrices } from "@/contexts/PricesContext";
import { useMediaQuery } from "react-responsive";

const TokenList = () => {
    const { supportedCurrencies } = useCurrencies();
    const { tokenPrices } = usePrices();

    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    
    const getTokenPriceData = (symbol: string) => {
        const priceData = tokenPrices.find(item => {
            const tokenSymbol = item.pair.split("/").at(0) as string;
            return tokenSymbol.toLowerCase() === symbol.toLowerCase();
        })
        
        return priceData;
    }

    const TokenListHeaderRow = () => (
        <div className={"grid grid-cols-token-list border-dark"}>
            <div className={"py-5 pl-[68px] pr-5 col-span-2 text-list-header"}> CRYPTO </div>
            <div className={"list-header-right-align"}> HARGA </div>
            <div className={"list-header-right-align"}> 24 JAM </div>
            <div className={"list-header-right-align"}> 1 MGG </div>
            <div className={"list-header-right-align"}> 1 BLN </div>
            <div className={"list-header-right-align"}> 1 THN </div>
        </div>
    );
    
    const TokenListHeaderCompactRow = () => (
        <div className={"grid grid-cols-token-list-compact border-dark"}>
            <div className={"py-5 pl-[68px] pr-5 text-list-header"}> CRYPTO </div>
            <div className={"list-header-right-align"}> HARGA / 24H </div>
        </div>
    )

    if(isSmallScreen) return (
        <div>
            <TokenListHeaderCompactRow/>
            {
                supportedCurrencies.map((currency) => (
                    <TokenListRow key={"token_compact_row_" + currency.currencySymbol} currency={currency} priceData={getTokenPriceData(currency.currencySymbol)} isCompact={true}/>
                ))
            }
        </div>
    );

    return (
        <div>
            <div className={"min-w-[1024px]"}>
                <TokenListHeaderRow/>
                {
                    supportedCurrencies.map((currency) => (
                        <TokenListRow key={"token_row_" + currency.currencySymbol} currency={currency} priceData={getTokenPriceData(currency.currencySymbol)} isCompact={false}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TokenList;
