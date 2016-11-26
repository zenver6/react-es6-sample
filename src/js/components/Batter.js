import React from "react";

export default class Batter extends React.Component {
  constructor(props) {
    super(props);
    this.getBatterData = this.getBatterData.bind(this);
  }

  getBatterData() {
    //ajaxでデータ取得前だとエラーとなる
    if(this.props.data.chibalotte === undefined) return;
    return this.props.data.chibalotte.batter.map(
      (player) => {
        return (
          <tr key={player.un}>
            <td>{player.un}</td>
            <td>{player.name}</td>
            <td>{player.avg}</td>
            <td>{player.gm}</td>
            <td>{player.pa}</td>
            <td>{player.ab}</td>
            <td>{player.h}</td>
            <td>{player.h2}</td>
            <td>{player.h3}</td>
            <td>{player.hr}</td>
          </tr>
        )
      });
  }

  render () {
    return (
      <div>
        <h2>打者データ</h2>
        <table cellSpacing={0}>
          <tbody>
            <tr>
              <th>背番号</th>
              <th>名前</th>
              <th>打率</th>
              <th>試合数</th>
              <th>打席数</th>
              <th>打席</th>
              <th>安打</th>
              <th>二塁打</th>
              <th>三塁打</th>
              <th>本塁打</th>
            </tr>
            {this.getBatterData()}
          </tbody>
        </table>

      </div>
    );
  }
}
