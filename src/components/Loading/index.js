import loadingImage from '../../assets/images/load.gif'


const Loading = ()=> {
return(
    <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex:"1000",
                position:"absolute",
                top:"50%",
                left:"45%"
            }}
        >
            <img src={loadingImage} width="50px" />
        </div>
)
}

export default Loading;