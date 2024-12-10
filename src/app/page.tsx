"use client";
import Header from "@/components/Header/Header";
import CenteredContent from "@/components/CenteredContent/CenteredContent";
import { ContentProvider } from "@/contexts/ContentContext";
import TagsRow from "@/components/TagsRow/TagsRow";

export default function Home() {
  return (
    <ContentProvider>
       <CenteredContent>
        <Header/>
        <TagsRow/>
      </CenteredContent>
    </ContentProvider>
  );
}
