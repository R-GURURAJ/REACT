import youtube from "../images/youtube-logo-red-hd-13.png";

function Navbar(){
    return(
        <div className="main_nav">
        <div className="nav">
                <img src={youtube} alt="logo"width="80px"/>
                {/* <ol className="nav_list">
                    <li>HOME</li>
                    <li>SORTS</li>
                    <li>SUBSCRIBE</li>
                    <li>ABOUT US</li>
                </ol> */}
        </div>
        </div>
    )
}

export default Navbar;
