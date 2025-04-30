import SidebarOne from "./SidebarOne"

const Sidebar = props => {
    const { ui, ...rest } = props;

    switch (ui) {
        case 'one':
        default:
            return <SidebarOne {...rest} />
    }
}

export default Sidebar