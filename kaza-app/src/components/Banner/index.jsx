function Banner(props) { // fonction avec argument 'props'
    return (
        <div className={`${props.className}`}> {/* classe déterminée par la propriété "className" transmise via les "props" */}
            <img src= {props.image} alt="BannerImage" className="banner-image" /> {/* source de l'image déterminée par la propriété "image" transmise via les "props" */}
        </div>
    );
}

export default Banner;