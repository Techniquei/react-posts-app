
import { Component } from 'react';
import './App.css';
import { AppHeader } from './components/app-header/app-header';
import { PostAddForm } from './components/post-add-form/post-add-form';
import { PostList } from './components/post-list/post-list';
import { PostStatusFilter } from './components/post-status-filter/post-status-filter';
import { SearchPanel } from './components/search-panel/search-panel';


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      data: [
        {label:`vevewv`, important: true, id: '1'},
        {label: 'Name 2', important: true, id: '2'},
        {label: 'Name 3', important: false, id: '3'}]
      ,
      term: '',
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)

  }

  deleteItem(id){
    this.setState(({data})=>{
      const newData = data.filter((e)=>(e.id!==id))
      return{
        data: newData
      }
    })
  }

  addItem(text){
    console.log(text)
    const newPost = {
      label: text,
      important: false,
      id: Date.now(),
    }
    this.setState(({data})=>{
      return {
        data: [newPost, ...data]
      }
    })
  }

  searchPost(items, term){
    // console.log(term.length)
    if(term.length===0){
      return items
    }
    return items.filter((item) => {
      return item.label.indexOf(term)> -1
    })
  }

  onUpdateSearch(term){
    this.setState({term})
  }

  render(){
    const {data, term} = this.state

    const liked = data.filter(item => item.like).length
    const allPost = data.length
    const visiblePosts = this.searchPost(data, term)

    return (
      <>
        <div className='container'>
          <AppHeader stats={{liked, allPost}}></AppHeader>
          <div className='search-panel d-flex'>
            <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
            <PostStatusFilter></PostStatusFilter>
          </div>
          <PostList posts={visiblePosts} onDelete={this.deleteItem}></PostList>
          <PostAddForm onAdd={this.addItem}></PostAddForm>
        </div>
      </>
  
    );
  }

}

export default App;
