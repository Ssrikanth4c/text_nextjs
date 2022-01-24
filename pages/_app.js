import './styles.css'
export default function ({Component, pageProps}){
    return(
        <Component {...pageProps} />
        // <div>this is override of  next js APP</div>
    )
}