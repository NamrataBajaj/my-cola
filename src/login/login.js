import axios from "axios";
import { useState } from "react"

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const submitHandler = async (e)=>{
        e.preventDefault();
        const url ="https://brave-ruby-costume.cyclic.app/api/auth/login"
        const res = await axios.post(url,{email,password});
        console.log("res => ",res)
    }

    return (<>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 form'>
                        <form onSubmit={submitHandler}>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Login