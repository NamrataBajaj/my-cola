import axios from "axios";
import { useState } from "react"

function Register() {

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler = async (e)=>{
        const url ="https://brave-ruby-costume.cyclic.app/api/auth/register"
        e.preventDefault();

        const res = await axios.post(url,{email,name,password});
        console.log("res => ",res)

    }
    return (<>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 form'>
                        <form onSubmit={submitHandler}>

                            <div className="form-group">
                                <label htmlFor="exampleName">Enter Name</label>
                                <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} className="form-control" id="exampleName" placeholder="Enter Name" />
                            </div>
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
export default Register;