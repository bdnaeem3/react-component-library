import AnchorOne from "./AnchorOne"

const Anchor = props => {
    const { ui, ...rest } = props

    switch (ui) {
        case 'one':
        default:
            return <AnchorOne {...rest} />
    }
}

export default Anchor