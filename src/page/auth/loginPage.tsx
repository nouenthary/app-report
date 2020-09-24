import React, {useState} from "react";
import styled from "styled-components";
import {Card, Input, Button} from "antd";
import {LoginOutlined} from "@ant-design/icons";

const Image = '/image.jpeg';
const ContainerLogin = styled.div`
  background-image: url(${Image});
  height: 100vh;
  width: 100%;
  display: flex;
  vertical-align: middle;
`;

const CardStyle = styled(Card)`
  height: 50vh;
  width: 400px;
  display: flex;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImN1YmV0aXEta2V5LWlkIn0.eyJ0ZW5hbnRfbmFtZSI6IkNMSU5JQyBTT0xVVElPTiIsImFjY2Vzc190ZW5hbnRfaWQiOiJUTkEtMDAwMTMwNjciLCJ1c2VyX25hbWUiOiJ0bmEtMDAwMTMwNjc6Y3ViZXRpcSIsImF1ZGl0b3IiOiJ0bmEtMDAwMTMwNjc6Y3ViZXRpcSIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXSwiY2xpZW50X2lkIjoiY3ViZXRpcS1jbGluaWMtZGV2IiwiYXVkIjpbImN1YmV0aXEtY2xpbmljLWRldiIsImN1YmV0aXEtb2F1dGgiXSwidXNlcl9pZCI6ImM1YzcyYTY1LWM3ZWItNGY3ZC1iN2IxLWJjOWVlNTliMmIwMCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJhY2Nlc3NfdGVuYW50X25hbWUiOiJDTElOSUMgU09MVVRJT04iLCJleHAiOjE2MDE1MzU5NjEsImp0aSI6ImJhYWU1MmQ3LTM3ODgtNDg2OS1iYjM0LTlkM2JiNGVkNmI5YyIsInRlbmFudCI6IlROQS0wMDAxMzA2NyIsInVzZXJuYW1lIjoiY3ViZXRpcSJ9.VFMfBttbhe3SCwzuBxXeiWBsovaexJLhs-huwaECTnHw3XRE7p-Q0CT3t2shLZLPaHFEB6B9_BtUXM_I10ckdQHM2Udojtr3AZLkPU4snuAAZAyGRh-b3eFg5aM7QqphOsBFULiCyumJWA5Vq5PpChpblGGw4c1sFEyjy46f3H1uk0BK4awL-92lgqxpNiq5SLP5jWwYZ0Kq67iFD-dCmXQF9mf76dKbu9vWoH0ViaBvnFwT2uN4fPOwiKLZg6UZR080LZ6cRGTNJdmkeT6Uw5QksZ2Rz-kfjvMv1gnDyFSsSFLtEii044R7ckOBrfZKE9Xcwc0nvhl3DJWcwRvGAA'

const LoginPage = (props: any) => {
    const [state, setState] = useState({
        token: token
    });

    const onChange = (value: any) => {
        setState({token: value})
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        let validateToken = state.token;
        if (validateToken) {
            props.history.push('/customer');
        }
    }

    return (
        <ContainerLogin>
            <CardStyle>
                <form onSubmit={onSubmit}>
                    <label>Login</label>
                    <Input.TextArea
                        style={{color: "salmon"}}
                        rows={12}
                        value={state.token}
                        placeholder="Insert Token..."
                        onChange={(event) => onChange(event.target.value)}
                    />
                    <br/><br/>
                    <Button
                        icon={<LoginOutlined/>}
                        block
                        type={"primary"}
                        disabled={!state.token}
                        htmlType={'submit'}
                    >
                        Login
                    </Button>
                </form>
            </CardStyle>

            <style>
                {`
                    .ant-card-body {
                        width: 100%;
                    }
                `}
            </style>

        </ContainerLogin>
    )
}

export default LoginPage;