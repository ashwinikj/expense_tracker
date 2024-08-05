import React , { useEffect, useState } from 'react'
import { Form , message } from 'antd'
import Input from 'antd/lib/input/Input'
import { Link, useNavigate} from 'react-router-dom'
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "sheymoney-udemy-user",
        JSON.stringify({ ...response.data, password: "" })
      );
      setLoading(false);
      message.success("Login successful");
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Login failed");
    }
  };
  
  useEffect(() => {
    if (localStorage.getItem("sheymoney-udemy-user")) {
      navigate("/");
    }
  }, []);
  
  return (
    <div className='register'>
      {loading && <Spinner />}
      <div className='loginrow'>
        <div className="lef_div col-md-3 inline-block justify-content-center align-items-center">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>LOGIN</h1>
          
            <Form.Item label='Email' name='email'>
              <Input />
            </Form.Item>
            <Form.Item label='Password' name='password'>
            <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Link to='/register'>Not Registered Yet , Click here to Register</Link>
              <button className="secondary" type="submit">LOGIN</button>
            </div>
          </Form>
        </div>
        <div className="rig_div col-md-5 inline-block justify-content-center align-items-center ">
          <div className="loginlottie">
            <dotlottie-player src="https://lottie.host/7c78849e-8445-4e2e-9e06-7e98d7b9cada/N2hm0eaUO1.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login 