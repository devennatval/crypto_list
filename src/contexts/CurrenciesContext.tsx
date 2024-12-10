import { Currency } from "@/models/Currency";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as walletApi from "@/apis/wallet";

interface CurrenciesContextType {
    supportedCurrencies: Currency[];
}

const CurrenciesContext = createContext<CurrenciesContextType | undefined>(undefined);

export const CurrenciesProvider = ({ children } : { children: React.ReactNode }) => {
    const [supportedCurrencies, setSupportedCurrencies] = useState<Currency[]>([]);

    useEffect(() => {
        loadSupportedCurrencies();
    }, []);

    const loadSupportedCurrencies = async () => {
        const currencies = await walletApi.fetchSupportedCurrencies() ?? [];
        setSupportedCurrencies(currencies)
    }

    return (
        <CurrenciesContext.Provider value={{ supportedCurrencies }}>
            { children }
        </CurrenciesContext.Provider>
    )
}

export const useCurrencies = () => {
    const context = useContext(CurrenciesContext);
    if(!context) throw new Error("useCurrencies must be used within a CurrenciesProvider");
    return context;
}
