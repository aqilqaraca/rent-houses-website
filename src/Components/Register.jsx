import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import axios from 'axios'
import ServiceApi from '../Service';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUsernameAction } from '../Store.js/Actions';


export default function Register() {
    const [register,setRegister] = useState(false)
    const [inputType,setInputType] = useState(false)
    const [username,setUsername] = useState("")
    const [usernameError,setUsernameError] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [disabled,setDisabled] = useState(true)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [inEmail,setInEmail] = useState("")
    const [inPassword,setInPassword] = useState("")
    const [users,setUsers] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(username === ""){
            setUsernameError(false)
            setDisabled(true)
        }
        else if(username.length<3){
            setUsernameError(true)
            setDisabled(true)
        }
        else if(username.length>=3){
            setUsernameError(false)
            setDisabled(false)
        }


        if(email === ""){
            setEmailError(false)
            setDisabled(true)
        }
        else if(email.length < 10){
            setEmailError(true)
            setDisabled(true)
        }
        else if(email.length>=10){
            setEmailError(false)
            setDisabled(false)
        }

        if(password === ""){
            setPasswordError(false)
            setDisabled(true)
        }
        else if(password.length < 5){
            setPasswordError(true)
            setDisabled(true)
        }
        else if(password.length>=5){
            setPasswordError(false)
            setDisabled(false)
        }
    }, [username,email,password])
    useEffect(()=>{
        const newUserArr = []
        let getUsers = new ServiceApi()
        getUsers.getUser().then(response=>{
            for(let key in response.data){
                newUserArr.push(response.data[key])
            }
        })
        setUsers(newUserArr)
    },[])
    const registerSend =(e)=>{
        e.preventDefault()
        const filterChar = email.split('').filter(char=>char === "@")
        if(filterChar.length!==1){
            toast.warning("Doğru email daxil etdiyinizdən əmin olun")
            return
        }
        const filteredEmail = users.filter(user=>user.email === email)
        if(filteredEmail.length>0){
            toast.error("Yazdığınız email artıq bir dəfə qeydiyyatdan keçmişdir")
            return
        }
         axios.post("https://houserent-e92b3-default-rtdb.firebaseio.com/users.json",{username : username,password: password,email:email})
         toast.success("Qeydiyyat uğurla tamamlandı")
         setTimeout(()=>{
             window.location.reload()
         },2000)

    }
    const loginPost = (e) =>{
        e.preventDefault()
        const loginUser = users.filter(user=>user.email === inEmail)
        if(loginUser[0].password !== inPassword){
            toast.error("Şifrə yanlışdır")
        }
        else if(loginUser[0].password === inPassword){
            dispatch(setUsernameAction(loginUser[0].username))
            localStorage.setItem('username', loginUser[0].username);
            history.push("/")
        }
    }
    return (
        <>
            <Breadcrumb/>
            <div className="cd-user-modal-container" style={{padding:'75px 0 90px'}}>
                <ul className="cd-switcher">
                    <li><Link  onClick={()=>setRegister(false)} className={!register ? "selected" : null}>Giriş</Link></li>
                    <li><Link  onClick={()=>setRegister(true)} className={register ? "selected" : null}>Qeydiyyat</Link></li>
                </ul>

                
                <div id="cd-login" className={!register ? "is-selected" : null}> 
                    <form className="cd-form">
                        <p className="fieldset">
                            <label className="image-replace cd-email" htmlFor="signin-email">E-mail</label>
                            <input value={inEmail} onChange={(e)=>setInEmail(e.target.value)} className="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail"/>
                            <span className="cd-error-message">Error</span>
                        </p>

                        <p className="fieldset">
                            <label className="image-replace cd-password" htmlFor="signin-password">Password</label>
                            <input value={inPassword} onChange={(e)=>setInPassword(e.target.value)} className="full-width has-padding has-border" id="signin-password" type={inputType ? "password" : "text"} placeholder="Şifrə"/>
                            <Link  onClick={()=>setInputType(!inputType)} className="hide-password">{!inputType ? "Gizlət" : "Göstər"}</Link>
                            <span className="cd-error-message">Error</span>
                        </p>
                        <p className="fieldset">
                            <input className="full-width" type="submit" value="GİRİŞ" onClick={loginPost}/>
                        </p>
                    </form>
                </div>

                
                <div id="cd-signup" className={register ? "is-selected" : null}>
                    <form className="cd-form">
                        <p className="fieldset">
                            <label className="image-replace cd-username" htmlFor="signup-username">Username</label>
                            <input value={username} onChange={(e)=>setUsername(e.target.value)} className="full-width has-padding has-border" id="signup-username" type="text" placeholder="İstifadəçi adı"/>
                            {usernameError && <span className="cd-error-message is-visible">İstifadəçi adı 3 hərfdən böyük olmalıdır</span>}
                        </p>

                        <p className="fieldset">
                            <label className="image-replace cd-email" htmlFor="signup-email">E-mail</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail"/>
                            {emailError && <span className="cd-error-message is-visible">Email 9 hərfdən böyük olmalıdır</span>}
                        </p>

                        <p className="fieldset">
                            <label className="image-replace cd-password" htmlFor="signup-password">Password</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} className="full-width has-padding has-border" id="signup-password" type={inputType ? "password" : "text"} placeholder="Şifrə"/>
                            <Link  onClick={()=>setInputType(!inputType)} className="hide-password">{!inputType ? "Gizlət" : "Göstər"}</Link>
                            {passwordError && <span className="cd-error-message is-visible">Şifrə 5 hərfdən böyük olmalıdır</span>}
                        </p>

                        <p className="fieldset">
                            <input disabled={disabled}  className="full-width has-padding" onClick={registerSend} type="submit" value="Hesab yarat"/>
                        </p>
                    </form>
                </div>  
            </div>
        </>
    )
}
