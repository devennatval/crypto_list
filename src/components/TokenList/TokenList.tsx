import { useCurrencies } from "@/contexts/CurrenciesContext";
import TokenListRow from "../TokenListRow/TokenListRow"

const TokenList = () => {
    const { supportedCurrencies } = useCurrencies();

    const TokenListHeaderRow = () => (
        <div className={"grid grid-cols-token-list border-dark"}>
            <div className={"py-5 pl-[68px] pr-5 col-span-2 text-list-header"}>CRYPTO</div>
            <div className="p-5 text-list-header">HARGA</div>
            <div className="p-5 text-list-header">24 JAM</div>
            <div className="p-5 text-list-header">1 MGG</div>
            <div className="p-5 text-list-header">1 BLN</div>
            <div className="p-5 text-list-header">1 THN</div>
        </div>
    );

    return (
        <div>
            <div className={"min-w-[1024px]"}>
                <TokenListHeaderRow/>
                {
                    supportedCurrencies.map((currency) => (
                        <TokenListRow key={"token_row_" + currency.currencySymbol} currency={currency}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TokenList;
