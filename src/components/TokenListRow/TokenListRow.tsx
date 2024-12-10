import { Currency } from "@/models/Currency"
import { TokenWithPrice } from "@/models/TokenWithPrice";
import { formatRupiah } from "@/utils/common";
import { ReactSVG } from "react-svg";

export interface TokenListRowProps {
    currency: Currency,
    priceData: TokenWithPrice | undefined
}

const TokenListRow = ({
    currency,
    priceData,
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

    return (
        <div key={"row " + currency.name} className={"grid grid-cols-token-list border-row-dark transition hover:bg-dark-hover"}>
            <div className={"flex items-center p-5"}>
                <ReactSVG src={currency.logo} style={{ color: currency.color }}/>
                <span className={"ml-6 text-sm-bold"}> 
                    { currency.name }
                </span>
            </div>
            <div className={"p-5 text-sm text-secondary"}>
                { currency.currencySymbol }
            </div>
            <div className={"p-5 text-sm-bold"}>
                { formatRupiah(parseInt(priceData.latestPrice)) }
            </div>
            <div className={`p-5 text-sm-bold ${getTextColor(priceData.day)}`}>
                { getChangesValue(priceData.day) }
            </div>
            <div className={`p-5 text-sm-bold ${getTextColor(priceData.week)}`}>
                { getChangesValue(priceData.week) }
            </div>
            <div className={`p-5 text-sm-bold ${getTextColor(priceData.month)}`}>
                { getChangesValue(priceData.month) }
            </div>
            <div className={`p-5 text-sm-bold ${getTextColor(priceData.year)}`}>
                { getChangesValue(priceData.year) }
            </div>
        </div>
    );
}

export default TokenListRow;
