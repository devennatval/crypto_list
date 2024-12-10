import { useContent } from "@/contexts/ContentContext"
import TagChip from "../TagChip/TagChip"

const TagsRow = () => {
    const { marketTags } = useContent();

    return <div className="flex overflow-x-auto space-x-2 py-2 hide-scrollbar">
        {
            marketTags.map(
                ( tag, index ) => <TagChip name={tag.title} iconUrl={tag.icon.url} key={index}/>
            )
        }
    </div>; 
}

export default TagsRow;
