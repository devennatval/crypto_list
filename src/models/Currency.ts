interface CurrencyBase {
    currency_id: number;
    currencyGroup: string;
    decimal_point: number;
    logo: string;
    listingDate: string;
}

interface Wallet extends CurrencyBase {
    tokenSymbol: string;
    tokenType: string;
    blockchain: string;
    explorer: string;
    blockchainName: string;
}

export interface Currency extends CurrencyBase {
    currencySymbol: string;
    name: string;
    color: string;
    wallets: Wallet[];
    is_limit_order_enabled: boolean;
    is_upcoming: boolean;
}
