import React,{Component} from 'react';
class Sec2 extends Component{
  state={
      star:Date.now(),
      current:Date.now(),
  }
  componentDidMount(){
      setInterval(()=>{
          this.setState({
              current:Date.now(),
          })
      },100)
  }
    render(){
        const {colr,addClick}=this.props;
        const sbj={color:colr?'blue':'red'};
        const {star,current}=this.state;
        const time=(current-star)/1000;
        return(
            <div className='sec2'>
                <div className='sec2Wrap'>
                   
                        <div className='step1'>
                            <div className='stepTitle'>步驟一</div>
                            <h3>於限定公開論壇撰寫開箱文</h3>
                            <div className='smWrap'>
                                <ul>
                                    <li>
                                        <img src='../img/sec2_1.png'/><span>PTT</span>
                                    </li>
                                    <li>
                                        <img src='../img/sec2_2.png'/><span>Dcard</span></li>  
                                    <li>
                                        <img src='../img/sec2_3.png'/><span>Mobil01</span></li>     
                                    <li>
                                        <img src='../img/sec2_4.png'/><span>巴哈姆特</span>
                                    </li>  
                                </ul>
                            </div>
                        </div>
                        <div className='step2'>
                            <div className='stepTitle'>步驟二</div>
                            <h3 style={sbj}>回報您的文章連結與訂單編號</h3>
                            <button onClick={addClick}>立刻回報</button>
                        </div>
                        <h3>{time.toFixed(1)}</h3>
                </div>
            </div>
        );
    }
}
export default Sec2;