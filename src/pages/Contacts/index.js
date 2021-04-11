import e from 'express';
import React, { useState } from 'react';
import './index.css';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMsg] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const onMsgChange = (e) => {
        setMsg(e.target.value);
    }

    submitEmail=(e)=>{
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: this.state
        }).then((response)=>{
            if(response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm=()=>{
        useState({name:'', email:'', subject:'', message:''})
    }

    return (
        <div className="mb_parallax_container" id="mb_parallax_three">
            <div className="mb_parallax_overlay">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Contact Me!</h2>
                            <p>
                            Let us know what you think! In order to provide better service,
                            please do not hesitate to give us your feedback. Thank you.
                            </p>
                            <hr/>
                            <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                                method="POST">
                            <div className="form-group">
                            <div className="row">
                            <div className="col-md-6">
                                <input placeholder = "Name"  id="name" type="text" 
                                    className="form-control" required value={this.state.name} 
                                    onChange={this.onNameChange.bind(this)}/>
                            </div>
                            <div className="col-md-6">
                                <input placeholder = "Email"  id="email" type="email"
                                    className="form-control" aria-describedby="emailHelp"
                                    required value={this.state.email} onChange=
                                    {this.onEmailChange.bind(this)}/>
                            </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <input placeholder = "Subject"  id="subject" type="text"
                                    className="form-control" required value={this.state.subject}
                                    onChange={this.onSubjectChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <textarea placeholder = "Message"  id="message" 
                                    className="form-control" rows="1" 
                                    required value={this.state.message}
                                    onChange= {this.onMsgChange.bind(this)}/>
                            </div>
                            <button type="submit" className="primary-btn submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;