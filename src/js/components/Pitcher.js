import React from "react";

export default class Pitcher extends React.Component {

  getPitcherData() {
    if(this.props.data.chibalotte === undefined) return;

    return this.props.data.chibalotte.pitcher.map(
      (player) => {
        return (
          <tr key={player.un}>
            <td>{player.un}</td>
            <td>{player.name}</td>
            <td>{player.era}</td>
            <td>{player.gm}</td>
            <td>{player.cg}</td>
            <td>{player.sho}</td>
            <td>{player.sho1}</td>
            <td>{player.w}</td>
            <td>{player.l}</td>
            <td>{player.hld}</td>
            <td>{player.hp}</td>
            <td>{player.sv}</td>
          </tr>
        )
    });
  }

  render () {
    return (
      <div>
        <h2>投手データ</h2>
        <table cellSpacing={0}>
          <tbody>
            <tr>
              <th>背番号</th>
              <th>名前</th>
              <th>防御率</th>
              <th>試合数</th>
              <th>完投</th>
              <th>無点勝</th>
              <th>無四球</th>
              <th>勝利</th>
              <th>敗戦</th>
              <th>ホールド</th>
              <th>HP</th>
              <th>セーブ</th>
            </tr>
            {this.getPitcherData()}
          </tbody>
        </table>
      </div>
    );
  }
}
