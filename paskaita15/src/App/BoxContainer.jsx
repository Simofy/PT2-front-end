import React from 'react';

const test = document.createElement('div');
test.className = 'find-me';

document.querySelector('.find-me')


export default class BoxContainer extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.number !== this.props.number;
  // }
  render() {
    const {
      number,
      numberTest,
    } = this.props;
    console.log(number, numberTest);
    return (
    <span>
      {number}
      {' '}
      Test
    </span>
  );
  }
}