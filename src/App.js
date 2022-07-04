import { Component } from 'react';
import './App.css';
// 컴퍼넌트 (클래스형태로만들어봄)



class Nav extends Component {

  state={
    list:[
      {}
    ]
  }



  //기본내제기능, 오버라이딩 느낌으로 함수에 기능 넣어서 해당 동작 시점을 관찰하겠다
  componentDidMount(){
    fetch('list.json')
    // 익명함수형태 전구누르고 convert 가능(arrow함수로..)
    .then(function (result) {
      return result.json();
    })
    // .then((json)=>console.log(json).bind(this));
    .then(function(json){
      console.log(json);
      this.setState({list : json});         //값 대체
    }.bind(this))
    
    // json으로 받아온 데이터를 동적으로(사용) rendering을 하려면 
    // state에 정의해주어야한다
  }



  render() {

    let listTag = [];
    for(let i = 0; i < this.state.list.length; i++){
      let li = this.state.list[i]
      listTag.push(<li key={li.id}><a href={this.state.list[i].id}>{this.state.list[i].title}</a></li>)
      console.log('li: ', li);
    }
    return (
      <>
        <nav>
          <ul>
            {/* HTML이나 이미지 json등의 파일들은 public폴더에 넣어 서비스한다. */}
            {/* 사용시 경로는 public을 절대 경로로잡고 사용한다 */}
            {/* <li><a href={this.state.list.id}>{this.state.list.title}</a></li> */}
            {/* <li><a href='2'>CSS</a></li> */}
            {/* <li><a href='3'>JavaScript</a></li> */}
            {listTag}
          </ul>
        </nav>
      </>

    )
  };
}

function App() {
  return (
    <div className="App">
      <h1>web</h1>
      <Nav></Nav>
      <article>
        <h2>Welcome</h2>
        Hello, React &amp; Ajax
      </article>
    </div>
  );
}

export default App;
