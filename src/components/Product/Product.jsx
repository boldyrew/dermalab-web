export function Product(props) {
  return (
    <li style={{background: "#fff"}}>
      <div className="product-item">
        <div className="product-item-img">
          <img src={props.image} />
        </div>
        <a href="#" className="product-item-title">
          {props.name}
        </a>
        <p className="product-item-description">{props.description}</p>
      </div>                      
    </li>
  )
}