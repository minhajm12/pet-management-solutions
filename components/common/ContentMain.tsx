function ContentMain({ description, className }: { description: React.ReactNode; className?: string }) {
    return (
        <p className={`!font-poppins 2xl:text-[20px] xl:text-[18px] text-[16px] leading-tight font-normal ${className}`}>{description}</p>
    )
}

export default ContentMain