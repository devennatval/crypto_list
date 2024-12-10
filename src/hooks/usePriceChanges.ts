import { TokenWithPrice } from '@/models/TokenWithPrice';
import { useQuery } from '@tanstack/react-query';

export function usePriceChanges() {
    return useQuery<TokenWithPrice[]>
}
