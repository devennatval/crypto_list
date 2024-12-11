import { useCurrencies } from "@/contexts/CurrenciesContext";
import TokenListRow from "../TokenListRow/TokenListRow";
import { usePrices } from "@/contexts/PricesContext";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { TokenWithPrice } from "@/models/TokenWithPrice";

enum SortType {
    NONE = "NONE",
    PRICE = "PRICE",
    DAY_CHANGE = "DAY_CHANGE",
    WEEK_CHANGE = "WEEK_CHANGE",
    MONTH_CHANGE = "MONTH_CHANGE",
    YEAR_CHANGE = "YEAR_CHANGE",
}

enum SortOrder {
    ASC = "ASC",
    DESC = "DESC",
}

const TokenList = () => {
    const { supportedCurrencies } = useCurrencies();
    const { tokenPrices } = usePrices();

    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    const [sortType, setSortType] = useState<SortType>(SortType.NONE);
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.DESC);
    
    const sortedTokenPrices = [...tokenPrices].sort((a, b) => {
        const getValue = (item: TokenWithPrice) => {
            switch(sortType) {
                case SortType.PRICE:
                    return parseFloat(item.latestPrice);
                case SortType.DAY_CHANGE:
                    return parseFloat(item.day);
                case SortType.WEEK_CHANGE:
                    return parseFloat(item.week);
                case SortType.MONTH_CHANGE:
                    return parseFloat(item.month);
                case SortType.YEAR_CHANGE:
                    return parseFloat(item.year);
                default:
                    return 0;
            }
        }

        const valueA = getValue(a);
        const valueB = getValue(b);
        
        if(sortOrder === SortOrder.ASC) return valueA - valueB;
        else return valueB - valueA;
    })


    const getTokenPriceData = (symbol: string) => {
        const priceData = tokenPrices.find(item => {
            const tokenSymbol = item.pair.split("/").at(0) as string;
            return tokenSymbol.toLowerCase() === symbol.toLowerCase();
        })
        
        return priceData;
    }

    const getTokenData = (symbol: string) => {
        const data = supportedCurrencies.find(item => {
            return item.currencySymbol.toLowerCase() === symbol.toLowerCase();
        })
        return data;
    }

    interface SortIndicatorProps {
        type: SortType;
    }

    const SortIndicator = ({ type } : SortIndicatorProps) => {
        return (
            <div className={"flex flex-col ml-1 cursor-pointer"}  onClick={() => handleSort(type)}>
                <FaChevronUp className={`w-2 h-2 ${sortType === type && sortOrder === SortOrder.ASC ? 'text-primary' : ''}`}/>
                <FaChevronDown className={`w-2 h-2 ${sortType === type && sortOrder === SortOrder.DESC ? 'text-primary' : ''}`}/>
            </div>
        );
    }

    const handleSort = (type: SortType) => {
        if(sortType !== type) {
            setSortOrder(SortOrder.DESC);
            setSortType(type)
        } else {
            if(sortOrder === SortOrder.DESC) setSortOrder(SortOrder.ASC);
            else if(sortOrder === SortOrder.ASC) setSortType(SortType.NONE);
        }
    }

    const TokenListHeaderRow = () => {
        if(isSmallScreen) return (
            <div className={"grid grid-cols-token-list-compact border-dark"}>
                <div className={"py-5 pl-[68px] pr-5 text-list-header"}> CRYPTO </div>
                <div className={"list-header-right-align"}>
                    HARGA / 24H
                    <SortIndicator type={SortType.DAY_CHANGE} />
                </div>
            </div>
        );

        return (
            <div className={"grid grid-cols-token-list border-dark"}>
                <div className={"flex items-center py-5 pl-[68px] pr-5 col-span-2 text-list-header"}>
                    CRYPTO
                </div>
                <div className={"list-header-right-align"}>
                    HARGA
                    <SortIndicator type={SortType.PRICE} />
                </div>
                <div className={"list-header-right-align"}> 
                    24 JAM 
                    <SortIndicator type={SortType.DAY_CHANGE} />
                </div>
                <div className={"list-header-right-align"}>
                    1 MGG 
                    <SortIndicator type={SortType.WEEK_CHANGE} />
                </div>
                <div className={"list-header-right-align"}>
                    1 BLN
                    <SortIndicator type={SortType.MONTH_CHANGE} />
                </div>
                <div className={"list-header-right-align"}>
                    1 THN
                    <SortIndicator type={SortType.YEAR_CHANGE} />
                </div>
            </div>
        );
    };

    const tokenListContentRows = React.useMemo(() => {
        if(sortType !== SortType.NONE) {
            return sortedTokenPrices.map((priceData, index) => {
                const symbol = priceData.pair.split("/").at(0)?.toUpperCase() ?? '';

                return <TokenListRow key={"token_row_" + index} currency={getTokenData(symbol)} priceData={priceData} isCompact={isSmallScreen} />
            });
        }

        return supportedCurrencies.map((currency, index) => (
            <TokenListRow key={"token_row_" + index} currency={currency} priceData={getTokenPriceData(currency.currencySymbol)} isCompact={isSmallScreen}/>
        ))
    }, [tokenPrices, sortedTokenPrices, supportedCurrencies, isSmallScreen]);
    
    return (
        <div className={isSmallScreen ? '' : "min-w-[1024px]"}>
            <TokenListHeaderRow/>
            { tokenListContentRows }
        </div>
    );
}

export default TokenList;
