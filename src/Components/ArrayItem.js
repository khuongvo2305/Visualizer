import React,{Component} from 'react';

import '../Styles/ArrayItem.css';

export default class ArrayItem extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:0,

        }
    }

    render(){
        return(
            <div className = "arrayitem" style = {{backgroundColor : this.props.isleft?"green":this.props.isright?"pink":this.props.isconst?"yellow":"white"}}>
                {this.props.value}
            </div>
        )
    }
}