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

/*var Search = createReactClass({
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
)*/

var Mask = createReactClass({
	render : function () {
		console.log(this.props)
		var styles = {
			position : 'absolute',
			left : 0,
			top : 0,
			right: 0,
			bottom : 0,
			background : 'black',
			opacity : 0.5,
			display : 'block'
		}
		if(this.props.show){
			styles.display = 'block';
		}else{
			styles.display = 'none';
		}
		return (
			<div style={styles}>
				{this.props.children}
			</div>
		)
	}
});

var Dialog = createReactClass({
	
	render : function () {
		console.log(this.props)
		var ban = {
			width : '100%',
			lineHeight: '200px',
			heigth:'200px',
			textAlign : 'center',
			color:'#fff',
			background:'orange',
			fontSize : '50px',
			cursor: 'pointer'
		}
		return (
			<div>
				<Mask show={this.props.show}>
					<div style={ban} onClick={this.props.onShowClick}>Hello World</div>
				</Mask> 
			</div>
		)
	}
})

var App = createReactClass({
	getInitialState : function () {
       return {
           show : true
	   }
	},
	onHandleClick : function (){
		this.setState({show:false})
	},
	render : function () {
		console.log(this)
		return (
			<div>
				<Dialog show={this.state.show} onShowClick={this.onHandleClick}/>
			</div>
		)
	}
})
ReactDom.render(
	<App/>,
	document.getElementById('root')
)