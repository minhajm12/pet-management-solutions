import ContentMain from "./ContentMain"

function MainTitle({ title, description, contentClassName, alignLeft = false }: { title: string, description: string, contentClassName: string, alignLeft?: boolean }) {
    return (
        <div className={`flex flex-col gap-2  ${alignLeft ? 'text-start items-start' : 'md:text-center md:items-center'}`}>
            <h2 className="text-[45px] font-medium leading-tight tracking-normal">{title}</h2>
            <ContentMain className={contentClassName} description={description} />
        </div>
    )
}

export default MainTitle