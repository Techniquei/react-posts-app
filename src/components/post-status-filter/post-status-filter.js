
import {Button} from 'reactstrap'
import "./post-status-filter.js"

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color='info'>Все</Button>
            <Button outline color='danger'>Понравилось</Button>
        </div>
    )
}

export {PostStatusFilter}