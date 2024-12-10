import { Currency } from "@/models/Currency"
import { TokenWithPrice } from "@/models/TokenWithPrice";
import { formatRupiah } from "@/utils/common";
import { ReactSVG } from "react-svg";

export interface TokenListRowProps {
    currency: Currency,
    priceData: TokenWithPrice | undefined,
    isCompact: boolean,
}

const TokenListRow = ({
    currency,
    priceData,
    isCompact,
} : TokenListRowProps) => {
    if(!priceData) return (<div></div>);

    const getTextColor = (value: string) => {
        const numericValue = parseFloat(value);

        if(numericValue > 0) return "text-green-dark";
        else if(numericValue < 0) return "text-red-dark";
        else return "text-secondary";
    }

    const getChangesValue = (value: string) => {
        const numericValue = parseFloat(value);

        if(numericValue > 0) return "+" + value + "%";
        else return value + "%";
    }

    const TokenNameAndImage = () => (
        <div className={"flex items-center p-5"}>
            <ReactSVG src={currency.logo} style={{ color: currency.color }}/>
            {
                isCompact ? 
                <div className={"flex flex-col justify-center ml-6"}>
                    <div className={"text-sm-bold mb-1"}> { currency.name } </div>
                    <div className={"text-sm text-secondary"}> { currency.currencySymbol }</div>
                </div> :
                <span className={"ml-6 text-sm-bold"}> 
                    { currency.name }
                </span>
            }
        </div>
    )

    if(isCompact) return (
        <div className={"grid grid-cols-token-list-compact border-row-dark transition hover:bg-dark-hover"}>
            <TokenNameAndImage/>
            <div className={"flex flex-col items-end justify-center p-5 text-sm-bold"}>
                <div className={"text-sm-bold mb-1"}>
                    { formatRupiah(parseInt(priceData.latestPrice)) }
                </div>
                <div className={`text-sm font-bold ${getTextColor(priceData.day)}`}>
                    { getChangesValue(priceData.day) }
                </div>
            </div>
        </div>
    );

    return (
        <div className={"grid grid-cols-token-list border-row-dark transition hover:bg-dark-hover"}>
            <TokenNameAndImage/>
            <div className={"p-5 text-sm text-secondary"}>
                { currency.currencySymbol }
            </div>
            <div className={"list-content-right-align"}>
                { formatRupiah(parseInt(priceData.latestPrice)) }
            </div>
            <div className={`${getTextColor(priceData.day)} list-content-right-align`}>
                { getChangesValue(priceData.day) }
            </div>
            <div className={`${getTextColor(priceData.week)} list-content-right-align`}>
                { getChangesValue(priceData.week) }
            </div>
            <div className={`${getTextColor(priceData.month)} list-content-right-align`}>
                { getChangesValue(priceData.month) }
            </div>
            <div className={`${getTextColor(priceData.year)} list-content-right-align`}>
                { getChangesValue(priceData.year) }
            </div>
        </div>
    );
}

export default TokenListRow;
