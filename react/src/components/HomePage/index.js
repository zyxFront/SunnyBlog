import React, { Component } from 'react';
import './index.scss';
import Article from './Article';
import SideList from './SideList';
import Whisper from './Whisper';

import { articles, hotArticles, recommendArticles } from '../../libs/homePgaeData'

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      articles: [],
      hotArticles: {},
      recommendArticles: {}
    }
  }

  componentDidMount(){
    this.setState({
      articles: articles,
      hotArticles: hotArticles,
      recommendArticles: recommendArticles
    });
  }

  render() {
    const { articles, hotArticles, recommendArticles } = this.state;
    const { onClick } = this.props;

    return (
      <div className='homepage'>
        <div className="left">
          {articles.length > 0 && articles.map((article, index) => {
            return (<Article key={index} {...article} onClick={onClick}></Article>);
          })}
        </div>
        
        <div className="right">
          <Whisper></Whisper>
          {Object.keys(hotArticles).length > 0 && <SideList {...hotArticles}></SideList>}
          {Object.keys(recommendArticles).length > 0 && <SideList {...recommendArticles}></SideList>}
        </div>
      </div>
    );
  }
}

export default HomePage;
