import React from 'react';
import {Link} from 'react-router'; //リンクを作成するコンポーネント
import $ from 'jquery'


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "./data/chibalottePlayerData.json",
      chibalottePlayerData: []
    };
  }
  componentDidMount() {
    this.loadDataFromServer();
  }
  loadDataFromServer() {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({chibalottePlayerData: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Reactサンプル</h1>

        <nav>
          <ul>
            <li><Link to="/">打者データ</Link></li>
            <li><Link to="Pitcher">投手データ</Link></li>
          </ul>
        </nav>

        {this.props.children && React.cloneElement(this.props.children, {
              data: this.state.chibalottePlayerData
            })
        }

      </div>
    );
  }

}
