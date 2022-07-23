import React,{Component} from 'react';

const changeColr=ClickFunc=>{
    return class extends Component{
        state={
            colr:true,
        };
        addClick=()=>{
            this.setState({
                colr:!this.state.colr,
            });
        };
        render(){
            return (
            <ClickFunc colr={this.state.colr} 
            addClick={this.addClick} 
            {...this.props}
            />
            );
        }
    };
};

export default changeColr;