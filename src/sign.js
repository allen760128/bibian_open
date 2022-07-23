import React,{Component} from 'react';
class Sign extends Component{
    state={
        cancel:true,
    }
    cancelClick=()=>{
        this.setState({
            cancel:!this.state.cancel,
        });
    }
    render(){
        const {cancel}=this.state;
        
        const oppa=this.props.data;
        const close={display:cancel?' ':'none'};
        return(
            <div className='signInClass' style={oppa } >
        <div className="sign_outer" >
            <div className="container">
                <form action="/action_page.php" id="frm1">
                <label forHTML="username">使用者名稱</label>
                <input id="userna" type="text" name="username" placeholder="Enter Username" required/>
                <span className="userAlert1 userScale"></span>
                <label forHTML="pw">使用者密碼</label>
                <input id="userpw" type="password" name="pw" placeholder="Enter Password" required/>
                <span className="userAlert2 userScale"></span>
                <button type="submit" class="ebutton" id="signSub">登入</button>
                <label forHTML=""><input type="checkbox" name="" id=""/>記住我</label>
                <button className="cancelbtn" type="button" onClick={this.cancelClick}>取消</button>
                <span className="psw" id='psw1'><a href="#">忘記密碼?</a></span>
                </form>
            </div>
            <div className="container2">
                <form action="/index.html" id="frm2">
                <h3>重設密碼</h3>
                <label forHTML="pw">E-mail信箱</label>
                <input id="usermail" type="text" name="email" placeholder="Enter e-mail"  required/>
                <span className="userMail userScale"></span>
                <button type="submit" className="ebutton mt_10" id="mailSub">寄出</button>
                <button className="cancelbtn mt_10" id="c2btn" type="button">取消</button>
            </form>
            </div>
        </div>
    </div>
        )
    }
}
export default Sign;