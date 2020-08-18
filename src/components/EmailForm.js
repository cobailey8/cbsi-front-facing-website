import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';

const emailFormCont = {
    // background: 'red',

}

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

function EmailForm(props) {
    const {register, handleSubmit, errors} = useForm();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [])

    // Responsive Style changes 
    var headingSm;
    var textInputSm;
    var textareaSm;
    var submitBtnSm;
    var errorMsgBlockSm;
    var errorSm;
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
    }



    // const errorDiv = document.getElementById('errorDiv');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    // const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const onSubmit = (data) => {
        console.log(data);
        document.getElementById("emailForm").reset();  // Clear form fields
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
        </div>
    );
}

export default EmailForm;