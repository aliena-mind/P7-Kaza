function Banner(props) { // fonction avec argument 'props'
    return (

        // classe déterminée par la propriété "className" transmise via les "props"
        <div className={props.className}> 

            {/* source de l'image déterminée par la propriété "image" transmise via les "props" */}
            <img src= {props.image} alt="BannerImage" className="banner-image" /> 
        </div>
    );
}

export default Banner;