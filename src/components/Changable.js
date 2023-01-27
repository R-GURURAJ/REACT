import athletic from "../images/athletic.png"
import Star from "../images/Star 1.png"

export default function Changable(){

    return(

    <div className="changable">
            <div className="comp">
                <img src={athletic} alt ="athel" />
                <div className="star_h">
                <img src={Star} alt ="star" className="star_lg"/>
                <span>4</span>
                <span>(6) *</span>
                <span>USA</span>
                </div>
                <p>this is an topic of life</p>
                <p>price $68 / person</p>
            </div>
        </div>
    )
}