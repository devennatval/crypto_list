import { Currency } from "@/models/Currency"
import { ReactSVG } from "react-svg";

export interface TokenListRowProps {
    currency: Currency 
}

const TokenListRow = ({
    currency
} : TokenListRowProps) => {
    return (
        <div key={"row " + currency.name} className={"grid grid-cols-token-list border-row-dark"}>
            <div className={"flex items-center p-5"}>
                <ReactSVG src={currency.logo} style={{ color: currency.color }}/>
                <span className="ml-6 text-sm font-semibold"> 
                    { currency.name }
                </span>
            </div>
            <div className="p-5 text-sm text-secondary">
                { currency.currencySymbol }
            </div>
        </div>
    );
}

export default TokenListRow;
