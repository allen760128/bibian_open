import React, {Component,createRef} from 'react';
import Sign from './sign';
class header extends Component{
    childOpen=createRef();
    state={
        open:true,
    }
    addClick=()=>{
        this.setState({
            open:!this.state.open,
        });
    }
    
    render(){
        const {open}=this.state;
        const opp={display:open?' ':'block'};
        return(
            <div >
                <Sign ref={this.childOpen} data={opp} {...this.props}></Sign>
            <div className='header' >
                
                <div className='headerWrap'>
                    <div classNAme='logo' >
                        <img src='img/logo.png' alt=''/>
                    </div>
                    <div className='signWrap'>
                        <div className='sign' onClick={this.addClick}><span>登入會員</span></div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default header;