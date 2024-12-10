import React, { createContext, useContext, useEffect, useState } from "react";
import * as contentApi from "@/apis/content"
import { MarketTag } from "@/models/MarketTag";

interface ContentContextType {
    marketTags: MarketTag[];
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children } : { children: React.ReactNode}) => {
    const [marketTags, setMarketTags] = useState<MarketTag[]>([]);
    
    useEffect(() => {
        loadMarketTags();
    }, []);

    const loadMarketTags = async () => {
        const tags = await contentApi.fetchMarketTags() ?? [];
        setMarketTags(tags);
    }

    return (
        <ContentContext.Provider value={{ marketTags }}>
            { children }
        </ContentContext.Provider>
    );
}

export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) throw Error("useContent must be used within a ContentProvider");
    return context;
}
