var React = require('react');
var ReactDOM = require('react-dom');

var Compos = function(){};

var Filter = React.createClass({
  render: function() {
    var colname = _.upperFirst(this.props.col);
    return (
      <th>
        <div className="mui--text-menu mui--text-nowrap">{colname}</div>
        <div className="mui-textfield">
          <input name={this.props.col} placeholder="Filtrer" onChange={this.props.filtersUpdate}/>
        </div>
        <div className="mui-textfield">
          <a href="#" onClick={this.props.sortUpdate.bind(this,this.props.col)}>^</a>
        </div>
      </th>
    );
  }
});

Compos.prototype.Headz = React.createClass({
  render: function() {
    var head = [];
    for (var key in this.props.first) {
      head.push(key);
    }
    return (
      <tr>
      {head.map((v,i)=><Filter key={i} col={v} filtersUpdate={this.props.filtersUpdate} sortUpdate={this.props.sortUpdate}/>)}
      </tr>
    );
  }
});

var Cellz = React.createClass({
  render: function() {
    return (
      <td>
        <div className="mui--text-caption">{this.props.data}
        </div>
      </td>
    );
  }
});

Compos.prototype.Line = React.createClass({
  render: function() {
    var cells = [];
    for (var i in this.props.data) {
      cells.push(this.props.data[i]);
    }
    return (
      <tr>
      { cells.map((v,i) => <Cellz key={i} data={v} /> ) }
      </tr>
    );
  }
});

module.exports = Compos;
