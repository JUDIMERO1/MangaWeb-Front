
const ViewPages = ({children, ...props}) => {
    return ( 
        <div className="container">
            <div className="viewer-pages">
                {children}
            </div>
        </div>
     );
}
 
export default ViewPages;