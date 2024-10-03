import './Login.css';
import {Link} from 'react-router-dom';

function Login(){
    return (
        <main className='login-main'>
            <div className='login'>

                <div className='login-text'>
                    <h1>Login</h1>
                    <Link to="/Register" className='login-text2'>Sign in to continue</Link>
                </div>

                <div className='login-form'>
                    <div className="form-group col mb-3" >
                        <label class="form-label">EMAIL</label>
                        <input class="form-control" type="text"/>
                    </div>

                    <div className="form-group col mb-3" >
                        <label class="form-label">PASSWORD</label>
                        <input class="form-control"/>
                    </div>
                </div>

                <div className="login-button">
                    <button>Log In</button>
                </div>

            </div>
        </main>
    );
}

export default Login;