import React, { Component } from "react";
import { func } from "prop-types";

// 容器组件
export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    setInterval(() => {
      console.log('定时改变state 但是内容没变，注意组件是否渲染');
      
      this.setState({
        comments: [
          { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" }
        ]
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <MyComment key={i} {...c} />
        ))}
      </div>
    );
  }
}
// 展示组件
// function MyComment(data){
//   console.log('Comment====');
//   return (
//     <div>
//       <p>{data.body}</p>
//       <p> --- {data.author}</p>
//     </div>
//   )
// }
// 优化1
// class MyComment extends Component{
//   shouldComponentUpdate(nextProps){
//     if(nextProps.body === this.props.body && nextProps.author === this.props.author){
//       return false
//     }
//     return true;
//   }
//   render() {
//     console.log('Comment====');
//     return (
//     <div>
//       <p>{this.props.body}</p>
//       <p> --- {this.props.author}</p>
//     </div>
//     );
//   }
// }
// 优化2 PureComponent 只是对shouldComponentUpdate优化 使用时注意 引用地址不能变 || 值类型的props
// class MyComment extends React.PureComponent{
//   render() {
//     console.log('Comment====');
//     return (
//     <div>
//       <p>{this.props.body}</p>
//       <p> --- {this.props.author}</p>
//     </div>
//     );
//   }
// }

// memo高阶组件
const MyComment = React.memo(
  function(props) {
    console.log("render memo");
    return (
      <div>
        <p>{props.body}</p>
        <p> --- {props.author}</p>
      </div>
    );
  }
);