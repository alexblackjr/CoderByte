/**
 * Created by Alexander on 3/13/2017.
 */
class App extends React.Component {
    render() {
        return(
            <div className="notificationsFrame">
                <div className="panel">
                    <Header />
                    <Content />
                </div>
            </div>
        )
    }
}

class Header extends React.Components{
    render() {
        return (
            <div className="header">
                <div className="fa fa-more"></div>

                <span className="title">Timeline</span>

                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search..." />
                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

class Content extends React.Component{
    render() {
        return(
            <div className="content">
                <div className="line"></div>

                {}
                <div className="item">
                    <div className="avatar">
                        <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                        Doug
                    </div>

                    <span className="time">An hour ago</span>
                    <p>Ate lunch</p>;
                    <div className="commentCount">
                    2
                    </div>
                    {/*Where comments would go*/}
                </div>
            </div>
        )
    }
}