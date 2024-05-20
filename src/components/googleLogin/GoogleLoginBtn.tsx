// GoogleLoginButton.tsx
import React, { useEffect, useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GoogleLoginBtn: React.FC = () => {
  const [token, setToken] = useState<string>('') // token 유무 확인을 위한 useState
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID // 여기에 Google Developer Console에서 발급받은 클라이언트 ID를 입력하세요
  const navigate = useNavigate()

  const googleLoginInfo = async (credentialResponse: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/auth/verify-google-id-token`,
        { credentialResponse: credentialResponse },
      )
      if (response.data.token) {
        // 서버에서 받아온 토큰을 쿠키에 저장
        document.cookie = `token=${response.data.token}; path=/;`
        setToken(response.data.token)
      }
    } catch (error) {
      console.error('Error sending data to server:')
    }
  }

  useEffect(() => {
    // 토큰이 변경될 때마다 토큰 정보 출력
    if (token) {
      console.log(jwtDecode(token), 'login')
    }
  }, [token])

  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            if (credentialResponse !== undefined) {
              googleLoginInfo(credentialResponse.credential as string)
              navigate('/aboutme')
            }
          }}
          onError={() => {
            console.log('login Failed')
          }}
        />
      </GoogleOAuthProvider>
    </React.Fragment>
  )
}

export default GoogleLoginBtn
