import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import SendIcon from '@material-ui/icons/Send';




export default class MessageBox extends Component {
    constructor() 
    {
        super();
        this.state = {
            message: null,
            messagesList: []
        };
        this.itemSend = this.itemSend.bind(this)
        this.onvalueChange = this.onvalueChange.bind(this) 
    }
    itemSend =e =>{
        var sender_item =this.state.messagesList;
        var itemAdd={
            type: "sent",
            message :this.state.message
        }
        sender_item.push(itemAdd);
        console.log(sender_item)

    this.setState({
        sender:sender_item,
        message: ''
    })
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(
      (result) => {
          var receive_item = this.state.messagesList;
          var receiveItemAdd={
              type:"received",
              message: result.slip.advice
          }
          receive_item.push(receiveItemAdd)
        console.log("API Response", result)

        this.setState({
            reciever:receive_item,
            message: ''
        })

      })
    }
    componentDidMount(){
        this.setState({
            message: null,
            messagesList: []
        
        });
    }
    onvalueChange = e =>{
        this.setState({
            message:e.target.value,
        })
       
    }

    componentDidMount() {
      
        }


    render() {
        const messages= this.state.messagesList.map((key, index)=>{
        var justifyContent = ' sender ml-auto mr-0'
        if (key.type == "received"){
            justifyContent = ' reciever ml-0 mr-auto'
        }
        return <div key={index} className={justifyContent}>
            
            {key.message}
            
            </div>

        
        })
    
        return (
            <div className="main_div">
                <div className="centre_div">
                {messages}
                
                </div>
                <div className="bottom_div">
                    <div className="d-flex justify-content-md-start">
                    <input className="text" type="text" placeholder="Send message" onChange={this.onvalueChange}>
                    </input>
                    </div>
                    <div className="d-flex justify-content-sm-end">
                    <Button type="submit" className="in_button" onClick={this.itemSend}><SendIcon color="#78FAC5"></SendIcon></Button>
                    </div>
                </div>
                </div>
            
        )
    }
}

