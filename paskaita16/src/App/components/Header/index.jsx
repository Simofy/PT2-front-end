import React from 'react';
import { applyTheme } from '../../common/helpers';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem('theme') || 'theme-light',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const {
      target
    } = e;
    const { value } = target;
    localStorage.setItem('theme', value);
    applyTheme(value);
  }
  render() {
    const {
      theme,
    } = this.state;
    return (
      <div className="header">
      <select value={theme} onChange={this.handleChange}>
        <option value="theme-light">Light</option>
        <option value="theme-dark">Dark</option>
        <option value="theme-magenta">Magenta</option>
      </select>
    </div>
    );
  }
}