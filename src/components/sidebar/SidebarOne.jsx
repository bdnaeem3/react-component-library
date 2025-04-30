const SidebarOne = props => {
    const { children, ...rest } = props

    return (
        <div className="flex flex-col w-[300px] border-r border-[#ddd] h-screen shrink-0" {...rest}>
            {children}
        </div>
    )
}

export default SidebarOne