"use client";
import Header from "@/components/Header/Header";
import CenteredContent from "@/components/CenteredContent/CenteredContent";
import { ContentProvider } from "@/contexts/ContentContext";
import TagsRow from "@/components/TagsRow/TagsRow";
import { CurrenciesProvider } from "@/contexts/CurrenciesContext";
import TokenList from "@/components/TokenList/TokenList";
import { PricesProvider } from "@/contexts/PricesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ContentProvider>
        <CurrenciesProvider>
          <PricesProvider>
            <CenteredContent>
              <Header/>
              <TagsRow/>
              <TokenList/>
            </CenteredContent>
          </PricesProvider>
        </CurrenciesProvider>
      </ContentProvider>
    </QueryClientProvider>
    
  );
}
