export function Category({ categoryName, src }) {
    return (
        <div className="category">
            <img src={src} alt={categoryName} />
            <div className="fade"></div>
            <div className="cat-name"> {categoryName} </div>
        </div>
    )
}