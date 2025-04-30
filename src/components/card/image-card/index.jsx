import ImageCardOne from "./ImageCardOne"

const ImageCard = props => {
    const { ui, ...rest } = props;

    switch (ui) {
        case 'one':
        default:
            return <ImageCardOne {...rest} />
    }
}

export default ImageCard