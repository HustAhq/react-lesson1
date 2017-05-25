import React from 'react';
import ReactDom from 'react-dom';
import createReactClass from 'create-react-class';


/*var App = createReactClass({
	getDefaultProps : function () {
		console.log('getDefaultProps');
		return {
			name : 'ccc'
		}
	},
	getInitialState : function () {
        console.log('getInitialState');
		return {
			value: 'input value'
		}
	},
	componentWillMount: function () {
		console.log('componentWillMount');
	},
	componentDidMount : function () {
		console.log('componentDidMount');
		window.setTimeout( ()=> {
           this.setState({
			   value : 'nihao',
			   age : 19
		   })
		}, 2000)
	},
	shouldComponentUpdate : function (nextProps, nextState) {
        console.log('shouldComponentUpdate');
		console.log(nextProps, nextState);
		if(nextState !== 'ddd'){
			return false;
		}
		return true;
	},
	componentWillUpdate: function () {
       console.log('componentWillUpdate');
	},
	componentDidUpdate:function () {
		console.log('componentDidUpdate');
	},
    render : function () {
		console.log('render')
		var Cpname = 'duyi';
		return (
			<div>
				<h1>{Cpname}</h1>
				<ul>
					{
						this.props.data.map(function (ele, index) {
                           return <li key={index}>{ele}</li>
						})
					}
				</ul>
			</div>
		)
	}
});

var dataList = ['js', 'html', 'react'];

ReactDom.render(
	<App data={dataList}/>,
	document.getElementById('root')
)*/

var Search = createReactClass({
	getInitialState : function () {
		return {
			value : 'please input'
		}
	},
	onhandleChange : function () {
       this.setState({value:this.refs.inp.value})
	},
	render : function () {
		console.log(this.state.value);
		return (
			<div>
				<input type="text" ref='inp' value={this.state.value} onChange={this.onhandleChange}></input>
				<span>{this.state.value}</span>
			</div>
		)
	}
})

ReactDom.render(
	<Search/>,
	document.getElementById('root')
)