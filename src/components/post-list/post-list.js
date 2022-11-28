
import {ListGroup} from 'reactstrap'
import "./post-list.css"
import { PostListItem } from "../post-list-item/post-list-item"

const PostList = ({posts, onDelete})=>{
    const elements = posts.map((item)=>{
        const {id, ...itemProps} = item
        return (
            <li key={id} className=''>
                <PostListItem {...itemProps} onDelete={()=> onDelete(id)}></PostListItem>
            </li>
        )
    })
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export {PostList}