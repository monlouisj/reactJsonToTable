var React = require('react');
var ReactDOM = require('react-dom');

var Compos = function () {};

var Filter = React.createClass({
  displayName: 'Filter',

  render: function () {
    var colname = _.upperFirst(this.props.col);
    return React.createElement(
      'th',
      null,
      React.createElement(
        'div',
        { className: 'mui--text-menu mui--text-nowrap' },
        colname
      ),
      React.createElement(
        'div',
        { className: 'mui-textfield' },
        React.createElement('input', { name: this.props.col, placeholder: 'Filtrer', onChange: this.props.filtersUpdate })
      ),
      React.createElement(
        'div',
        { className: 'mui-textfield' },
        React.createElement(
          'a',
          { href: '#', onClick: this.props.sortUpdate.bind(this, this.props.col) },
          '^'
        )
      )
    );
  }
});

Compos.prototype.Headz = React.createClass({
  displayName: 'Headz',

  render: function () {
    var head = [];
    for (var key in this.props.first) {
      head.push(key);
    }
    return React.createElement(
      'tr',
      null,
      head.map((v, i) => React.createElement(Filter, { key: i, col: v, filtersUpdate: this.props.filtersUpdate, sortUpdate: this.props.sortUpdate }))
    );
  }
});

var Cellz = React.createClass({
  displayName: 'Cellz',

  render: function () {
    return React.createElement(
      'td',
      null,
      React.createElement(
        'div',
        { className: 'mui--text-caption' },
        this.props.data
      )
    );
  }
});

Compos.prototype.Line = React.createClass({
  displayName: 'Line',

  render: function () {
    var cells = [];
    for (var i in this.props.data) {
      cells.push(this.props.data[i]);
    }
    return React.createElement(
      'tr',
      null,
      cells.map((v, i) => React.createElement(Cellz, { key: i, data: v }))
    );
  }
});

module.exports = Compos;