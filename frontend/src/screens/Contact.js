import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../actions/messageActions';

export default function Contact() {
    const[name, setName]=useState('');
    const[email, setEmail] = useState('');
    const[tele, setTele] = useState('');
    const[msg, setMsg] = useState('');

   
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addMessage(name, email, tele, msg));
    }
  return (
    <div>
        <div>
            <div className="card md-mx-auto md-mw-75">
                <div className='row g-0'>
                <div className="col-md-6">
                <div class="container-fluid">
                    <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1479448245227!2d79.93700551477332!3d6.991849894949126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f92d0c02ef5d%3A0x32649699aa341369!2sChathuranga%20Car%20Sale!5e0!3m2!1sen!2slk!4v1649387961346!5m2!1sen!2slk" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1479448245227!2d79.93700551477332!3d6.991849894949126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f92d0c02ef5d%3A0x32649699aa341369!2sChathuranga%20Car%20Sale!5e0!3m2!1sen!2slk!4v1649387961346!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" ></iframe> */}
                </div>
                </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit={submitHandler}>
                        
                        <div className='form-floating m-3'>
                            <input type="text" className='form-control' id='floatingInputValue' placeholder='name'
                            required onChange={(e)=> setName(e.target.value)} />
                            <label for="floatingInputValue"> Name </label>
                        </div>    
                        <div className='form-floating m-3'>
                            <input type="email" className='form-control' id='email' placeholder='Email' 
                            required onChange={(e)=> setEmail(e.target.value)} />
                            <label for="floatingInputValue"> Email </label>
                        </div>  
                        <div className='form-floating m-3'>
                            <input type="tel" className='form-control' id='tele' placeholder='Tele'
                            required onChange={(e)=> setTele(e.target.value)} />
                            <label for="floatingInputValue"> Tele </label>
                        </div> 
                        <div className='form-floating m-3'>
                            <textarea className='form-control' id='msg' placeholder='Msg' 
                            required onChange={(e)=> setMsg(e.target.value)} />
                            <label for="floatingInputValue"> Message </label>
                        </div>    
                        <div className="justify-content-md-end">
                            <button type="submit" class="btn btn-success">Send</button>     
                        </div>                              
                    </form>
                </div>
                </div>
            </div>      
        </div>
        
    </div>
  );
}
