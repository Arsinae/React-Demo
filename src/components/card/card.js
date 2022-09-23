import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div style={{fontSize: '16px'}}>
        {this.props.index + 1}.{this.props.family.name}
        </div>
    );
  }
}

function CardList(props) {
  return (
    <div>
      { props.families.map((v, i) => <Card key={i} family={v} index={i} />) }
    </div>
  );
}

export class CardContainer extends React.Component {

  state = {
    families: [{name: 'Atreides'}, {name: 'Harkonnen'}, {name: 'Corrino'}]
  };

  render() {
    return (
      <CardList families={this.state.families}/>
    );
  }
}