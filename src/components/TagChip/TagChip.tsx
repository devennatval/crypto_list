import { ReactSVG } from "react-svg"

export interface TagButtonProps {
    iconUrl: string,
    name: string 
}

const TagChip = ({
    iconUrl,
    name
} : TagButtonProps) => {
    return <div className={'flex flex-shrink-0 items-center px-3 py-2 border-dark rounded-3xl transition hover:bg-dark-hover'}>
        <ReactSVG src={iconUrl} className="w-6 h-6 mr-2"/>
        <span className="text-xs font-semibold"> {name} </span>
    </div>
}

export default TagChip;
