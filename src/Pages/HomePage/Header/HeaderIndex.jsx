import "./HeaderStyle.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img
                src="https://eskipaper.com/images/landscape-wallpaper-hd-11.jpg"
                alt="" className="headerImage"/>
        </div>
    )
}