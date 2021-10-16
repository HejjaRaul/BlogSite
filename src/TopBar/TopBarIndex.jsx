import "./TopBarStyle.css"

export default function TopBarIndex() {
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook">

                </i>
                <i className="topIcon fab fa-instagram">

                </i>
                <i className="topIcon fab fa-twitter">

                </i>
                <i className="topIcon fab fa-pinterest">

                </i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACTS</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" alt=""
                     className="topImg"/>
                <i className="topSearchIcon fas fa-search">

                </i>
            </div>

        </div>
    )
}