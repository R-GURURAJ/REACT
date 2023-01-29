export default function Changable(props) {
  // alert(props.rating)
  return (
    <div className="comp_det">
      <img src={props.img} alt={props.img} />

      <div className="star_h">
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>

      <div>
        {props.title && <p>{props.title}</p>}
        <span className="bold">From ${props.price} / person</span>
      </div>
    </div>
  );
}

{
  /* {props.name && <span>{props.name}</span>} */
  /* <span style={{display: props.name ? "block" : "none"}}>{props.name}</span> */
}
