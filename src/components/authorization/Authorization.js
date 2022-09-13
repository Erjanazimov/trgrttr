import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addLogin, loginChange,} from "../../store/authorizationSlice";
import Register from "./Register";


const Authorization = () => {
    const entrance = React.createRef();
    const register = React.createRef()
    const entranceRef = React.createRef();
    const registerRef = React.createRef();
    const dispatch = useDispatch();

    const loginState = useSelector(state => state.authorization.login);


    const entranceBtn = (e) => {
        register.current.classList.add("d-none");
        entrance.current.classList.remove("d-none")
        entrance.current.classList.add("d-block");
        e.target.classList.add("active_modal");
        registerRef.current.classList.remove("active_modal")
    }

    const registerBtn = (e) => {
        entrance.current.classList.add("d-none");
        register.current.classList.remove("d-none")
        register.current.classList.add("d-block");
        e.target.classList.add("active_modal");
        entranceRef.current.classList.remove("active_modal")
    }



    const loginHandler = (name, e) => {
        dispatch(loginChange({[name]:e}))
    }

    const loginBtn = (event) => {
        dispatch(addLogin(loginState))
        event.preventDefault();
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="flex_modal">
                                <p ref={entranceRef} onClick={entranceBtn} className="active_modal">Вход</p>
                                <p ref={registerRef} onClick={registerBtn}>Регистрация</p>
                            </div>
                            {/*Войти*/}
                            <div ref={entrance} className="d-block">
                                <form onSubmit={loginBtn}>
                                    <div className="mb-4 mt-3">
                                        <label htmlFor="exampleInputNumber" className="text_date pb-2">Номер телефона*</label>
                                        <input onChange={(e) =>loginHandler("phone_number", e.target.value)}
                                               required type="tel" className="form-control" id="exampleInputNumber"
                                               aria-describedby="numberHelp" placeholder="Введите номер телефона"
                                                value={loginState.phone_number}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="text_date pb-2">Пароль*</label>
                                        <input onChange={(e) => loginHandler("password", e.target.value)}
                                               required type="password" className="form-control"
                                               id="exampleInputPassword1" placeholder="Введите пароль"
                                                value={loginState.password}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control fw-bold">Войти</button>
                                    <div className="text_a">
                                        <a href="#">Забыли пароль?</a>
                                    </div>
                                </form>
                            </div>

                            {/*Регистрация*/}
                            <div ref={register} className="d-none">
                                <Register/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;