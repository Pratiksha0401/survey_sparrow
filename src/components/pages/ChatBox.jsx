import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import SendIcon from '@material-ui/icons/Send';
import MessageBox from './MessageBox';


export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            showMessagebox: false
        };
        this.handleShowBox = this.handleShowBox.bind(this)
        this.onLoad = this.onLoad.bind(this)
    }
  
    handleShowBox = e =>{
      this.setState({
        showMessagebox: !this.state.showMessagebox
      });
      console.log(this.state.showMessagebox)
    }
    
    onLoad = e =>{
        this.setState({
            isOpen: this.props.isOpen,
            showMessagebox: false
        });
    }
    componentDidMount(){
        this.onLoad();
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (

            <div className={(this.props.isOpen ? 'showbox' : 'hidebox')}>
               <div className="title1">
                <h2> Hi There </h2>
                Hello Ask Us Anything,Share Your Feedback.
               </div>


                { 
                        this.state.showMessagebox 
                        ? <MessageBox></MessageBox> 
                        : <Button variant="contained" className="send_button" onClick={this.handleShowBox}>New Conversion <SendIcon></SendIcon>
                        </Button> 
                    }
            </div>
        )
    }
}
