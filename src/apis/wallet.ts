import { API_WALLET_SUPPORTED_CURRENCIES } from "@/constants/api";
import { ApiResponse } from "@/models/ApiResponse";
import { Currency } from "@/models/Currency";

export async function fetchSupportedCurrencies(): Promise<Currency[] | null> {
    try {
        const response = await fetch(API_WALLET_SUPPORTED_CURRENCIES);
        const json: ApiResponse<Currency[]> = await response.json();
        const data = json.payload;
        return data;

    } catch(error) {
        console.error('Fetch supported currencies failed:', error);
        return null;
    }
}
