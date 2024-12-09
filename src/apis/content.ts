import { API_CONTENT_MARKET_TAGS } from "@/constants/api";
import { MarketTag } from "@/models/MarketTag";

export async function fetchMarketTags(): Promise<MarketTag[] | null> {
    try {
        const response = await fetch(API_CONTENT_MARKET_TAGS);
        const data: MarketTag[] = await response.json();
        return data;

    } catch(error) {
        console.error('Fetch market tags failed:', error);
        return null;
    }
}
