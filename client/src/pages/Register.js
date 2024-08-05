import React , { useEffect, useState } from 'react'
import { Form, Input, message } from 'antd'
//import Input from 'antd/lib/input/Input'
import { Link , useNavigate} from 'react-router-dom'
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/users/register", values);
      message.success("Registration Successfull");
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
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
      <div className='custom_row'>
        <div className="left_div col-md-5 inline-block justify-content-center align-items-center ">
          <div className="lottie">
            <dotlottie-player src="https://lottie.host/7c78849e-8445-4e2e-9e06-7e98d7b9cada/N2hm0eaUO1.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          </div>
        </div>
        <div className="right_div col-md-3 inline-block justify-content-center align-items-center">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>REGISTER</h1>
         
            <Form.Item label='Name' name='name'>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label='Password' name='password'>
            <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Link to='/login'>Already Registered , Click here to Login</Link>
              <button className="secondary" type="submit">REGISTER</button>

            </div>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default Register