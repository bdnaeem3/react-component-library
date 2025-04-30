const AnchorOne = props => {
    const { children, url='#', className={}, ...rest } = props

    return (
        <a href={url} className={`p-[15px] border-b border-[#ddd] ${className}`} {...rest}>
            {children}
        </a>
    )
}

export default AnchorOne