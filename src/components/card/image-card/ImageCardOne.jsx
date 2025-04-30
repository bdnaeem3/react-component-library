const ImageCardOne = props => {
    const { image, className = {}, imageClass = {}, ...rest } = props;

    return (
        <div className={`group w-[300px] h-[300px] flex items-center justify-center border border-[#ddd] overflow-hidden rounded-[4px] ${className}`} {...rest}>
            <img src={image} alt="" className={`group-hover:scale-110 transition duration-300 ${imageClass}`} />
        </div>
    )
}

export default ImageCardOne