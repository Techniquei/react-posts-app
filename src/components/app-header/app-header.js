import "./app-header.css"
const AppHeader = ({stats}) => {
    console.log(stats)
    return (
        <div className="app-header d-flex">
            <h1>Vladimir Matveev</h1>
            <h2>Понравилось: {stats.liked}, всего записей: {stats.allPost}</h2>
        </div>
    )
}

export {AppHeader}