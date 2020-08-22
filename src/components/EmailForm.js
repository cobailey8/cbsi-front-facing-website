import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';

const emailFormCont = {}

const errorMsgBlock = {
    background: 'rgba(255, 0, 0, .25)',
    padding: '.5vw',
    borderRadius: '5px',
    margin: '0 0 2vw 0',
    display: 'inline-block',
}
const error = {
    color: 'red',
    fontSize: '2vw',
    fontWeight: '400',
    margin: '.5vw',
}

const heading = {
    fontSize: '3vw',
    fontWeight: '400',
    margin: '2vw 0',
}

const form = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const textInput = {
    background: '#eee',
    color: 'black',
    width: '40vw',
    height: '4vw',
    margin: '1.7vw 5vw',
    fontSize: '2vw',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '0 1vw 0 1vw',
}
const textarea = {
    background: '#eee',
    color: 'black',
    resize: 'none',
    width: '40vw',
    margin: '3vw 5vw',
    fontSize: '2vw',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '1vw 1vw 1vw 1vw',
}

const submitBtn = {
    background: 'rgb(166, 25, 46)',
    color: 'white',
    width: '20vw',
    height: '4vw',
    margin: '0 0 3vw 0',
    fontSize: '2vw',
    border: '2px solid black',
    borderRadius: '100px',
}

const confirmationMessage = {
    background: 'rgba(0,230,0,.4)',
    color: 'white',
    width: '400px',
    height: '150px',
    border: '1px solid rgba(0,0,0, .3)',
    borderRadius: '20px',
    fontSize: '45px',
    fontWeight: '400',
    letterSpacing: '3px',
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    margin: '-75px 0 0 -200px',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: 'rgba(0,0,0, .5)',
}

const confirmImg = {
    width: '50px',
    height: '50px',
    margin: '0 2vw'
}

function EmailForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    

    useEffect(() => {

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    // Responsive Style changes 
    var headingSm;
    var textInputSm;
    var textareaSm;
    var submitBtnSm;
    var errorMsgBlockSm;
    var errorSm;
    var confirmationMessageSm;
    var confirmImgSm;
    if(windowWidth < 600) {

        headingSm = {
            fontSize: '5vw',
            fontWeight: '400',
            margin: '6vw 0 3vw 0',
        }

        textInputSm = {
            background: '#eee',
            color: 'black',
            width: '80%',
            height: '6vw',
            margin: '3vw 5vw',
            fontSize: '3vw',
            border: '2px solid black',
            borderRadius: '10px',
            padding: '0 1vw 0 1vw',
        }

        textareaSm = {
            background: '#eee',
            color: 'black',
            resize: 'none',
            width: '80%',
            margin: '3vw 5vw',
            fontSize: '3vw',
            border: '2px solid black',
            borderRadius: '10px',
            padding: '1vw 1vw 1vw 1vw',
        }

        submitBtnSm = {
            background: 'rgb(166, 25, 46)',
            color: 'white',
            width: '50%',
            height: '7vw',
            margin: '3vw 5vw',
            fontSize: '4vw',
            border: '2px solid black',
            borderRadius: '100px',
        }

        errorMsgBlockSm = {
            width: '40%',
            background: 'rgba(255, 0, 0, .25)',
            padding: '.5vw',
            borderRadius: '5px',
            margin: '0 0 2vw 0',
            display: 'inline-block',
        }

        errorSm = {
            color: 'red',
            fontSize: '3vw',
            fontWeight: '400',
            margin: '.7vw',
        }

        confirmationMessageSm = {
            background: 'rgba(0,230,0,.35)',
            color: 'white',
            width: '200px',
            height: '74px',
            border: '1px solid rgba(0,0,0, .3)',
            borderRadius: '20px',
            fontSize: '30px',
            fontWeight: '400',
            letterSpacing: '3px',
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            margin: '-37px 0 0 -100px',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'rgba(0,0,0, .6)',
        }

        confirmImgSm = {
            width: '30px',
            height: '40px',
            margin: '0 2vw'
        }
    }

    // const errorDiv = document.getElementById('errorDiv');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    // const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const onSubmit = (data) => {
        console.log(data);  // Heres the data that should be sent 
        document.getElementById("emailForm").reset();  // Clear form fields

        //Show confirmation modal for x seconds
        document.getElementById('confirmation').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('confirmation').style.display = 'none';
        }, 2000);


    }

    const showError = (errorMessage, formInput) => {
        formInput.style.background = 'rgba(255, 0, 0, .2)';
        return <div style={ errorSm || error }>{errorMessage}</div>
    }

    return (
        <div style={ emailFormCont } className="emailFormCont">
            <div style={ headingSm || heading }>{ props.heading }</div>
            { 
                // Only display this JSX block if the errors object is holding errors to display
                Object.keys(errors).length > 0 &&
                    <div style={ errorMsgBlockSm || errorMsgBlock } id="errorDiv">
                        {errors.name && showError(errors.name.message, nameInput)}
                        {errors.email && showError("Invalid Email", emailInput)}
                        {errors.message && showError(errors.message.message, messageInput)}
                    </div> 
            }
            <form onSubmit={handleSubmit(onSubmit)} style={ form } id="emailForm">

                {/* Name Input*/}
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    id="name"
                    ref={register({required: "Name Required"})} 
                    style={ textInputSm || textInput }
                    onChange={ e => {
                        if(error.name === undefined){
                            e.target.style.background = '#eee';
                        }
                    }}
                />

                {/* Email Input*/}
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    id="email"
                    ref={register({ required: "Email Required", pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i })} 
                    style={ textInputSm || textInput }
                    onChange={ e => {
                        if(error.email === undefined){
                            e.target.style.background = '#eee';
                        }
                    }}
                />

                {/* Subject Input*/}
                <input 
                    type="text" 
                    placeholder="Subject" 
                    name="subject" 
                    id="subject"
                    ref={register} 
                    style={ textInputSm || textInput }
                />

                {/* Message Input*/}
                <textarea  
                    type="text" 
                    placeholder="Message" 
                    name="message" 
                    id="message"
                    rows="6"
                    ref={register({required: "Message Required"})} 
                    style={ textareaSm || textarea }
                    onChange={ e => {
                        if(error.message === undefined){
                            e.target.style.background = '#eee';
                        }
                    }}
                />

                {/* Submit Button */}
                <input type="submit" name="submit" value="SEND" style={ submitBtnSm || submitBtn }/>

            </form>
            <div style={ confirmationMessageSm || confirmationMessage } id='confirmation'>
                    {
                        windowWidth <= 600 ? "Sent!" : "Message Sent!"
                    }
                    <img src="/images/confirmImg.png" alt="" style={ confirmImgSm || confirmImg }/>
            </div>
        </div>
    );
}

export default EmailForm;