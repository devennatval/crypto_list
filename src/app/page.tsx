"use client";
import Header from "@/components/Header/Header";
import CenteredContent from "@/components/CenteredContent/CenteredContent";
import { ContentProvider } from "@/contexts/ContentContext";
import TagsRow from "@/components/TagsRow/TagsRow";
import { CurrenciesProvider } from "@/contexts/CurrenciesContext";
import TokenList from "@/components/TokenList/TokenList";

export default function Home() {
  return (
    <ContentProvider>
      <CurrenciesProvider>
        <CenteredContent>
          <Header/>
          <TagsRow/>
          <TokenList/>
        </CenteredContent>
      </CurrenciesProvider>
    </ContentProvider>
  );
}
