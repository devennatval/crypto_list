import { useContent } from "@/contexts/ContentContext"
import TagChip from "../TagChip/TagChip"

const TagsRow = () => {
    const { marketTags } = useContent();

    return (
        <div className="flex overflow-x-auto space-x-2 py-2 hide-scrollbar mb-6">
            {
                marketTags.map((tag) => (
                    <TagChip key={"chip_tag_" + tag.slug} name={tag.title} iconUrl={tag.icon.url}/>
                ))
            }
        </div>
    );
}

export default TagsRow;
