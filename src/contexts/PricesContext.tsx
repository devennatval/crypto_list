import { TokenWithPrice } from "@/models/TokenWithPrice";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";
import * as tradeApi from "@/apis/trade";

interface PricesContextType {
    tokenPrices: TokenWithPrice[];
}

const PricesContext = createContext<PricesContextType | undefined>(undefined);

export const PricesProvider = ({ children } : { children: React.ReactNode }) => {
    const { data } = useQuery({
        queryKey: ["token_prices"],
        queryFn: () => tradeApi.fetchPriceChanges(),
        refetchInterval: 5000,
    });

    const tokenPrices = data || [];

    return (
        <PricesContext.Provider value={{ tokenPrices }}>
            { children }
        </PricesContext.Provider>
    )
}

export const usePrices = () => {
    const context = useContext(PricesContext);
    if(!context) throw new Error("usePrices must be used within a PriceProvider");
    return context;
}
