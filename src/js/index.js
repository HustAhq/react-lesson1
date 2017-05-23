import React from 'react';
import ReactDom from 'react-dom';
/*
var App = React.createClass({
	getDefaultProps : function () {
		console.log('getDefaultProps');
		return {
			name : 'ccc'
		}
	},
	getInitialState : function () {
		console.log('getInitialState');
		return {
			value : 'this is state'
		}
	},
	componentWillMount : function () {
		console.log('componentWillMount');
	},
	componentDidMount : function () {
		var _self = this;
		console.log('componentDidMount');
		window.setTimeout(function () {
           _self.setState({value:'ffff', jiajia:'w982'})
		}, 2000);
	},
	shouldComponentUpdate : function (nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState);
		return true;
	},
	ComponentWillUpdate:function () {
		console.log('ComponentWillUpdate');
	},
	componentDidUpdate : function () {
		console.log('componentDidUpdate')
	},
	render: function () {
		var data = 'duyi';
		// console.log(this)
		console.log(this.props.name);
		return <div>
		           <h1>{data}</h1>
				   <ul>
					   {
						   this.props.data.map(function (ele, index){
							   return <li key={index}>{ele}</li>
						   })
					   }
				   </ul>
			   </div>;
	}
});

var dataList = ['js', 'css', 'html'];
ReactDom.render(
	<App data = {dataList}/>, 
	document.getElementById('root')
);*/

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDom.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
// tick();
