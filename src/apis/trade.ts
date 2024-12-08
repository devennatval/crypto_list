import { API_TRADE_PRICE_CHANGES } from "@/constants/api";
import { ApiResponse } from "@/models/ApiResponse";
import { TokenWithPrice } from "@/models/TokenWithPrice";

export async function fetchPriceChanges(): Promise<TokenWithPrice[] | null> {
    try {
        const response = await fetch(API_TRADE_PRICE_CHANGES);
        const json: ApiResponse<TokenWithPrice[]> = await response.json();
        const data = json.payload;
        return data;

    } catch(error) {
        console.error('Fetch price changes failed:', error);
        return null;
    }
}
