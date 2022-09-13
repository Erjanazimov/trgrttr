import React from 'react';
import {addRegister, registerChange} from "../../store/authorizationSlice";
import {useDispatch, useSelector} from "react-redux";

const Register = () => {
    const registerState = useSelector(state => state.authorization.register);
    const dispatch = useDispatch();
    const registerBtnUser = (event) => {
        dispatch(addRegister(registerState))
        event.preventDefault();
    };

    const registerHandler = (name, e) => {
        dispatch(registerChange({[name]:e}))
    }
    return (
        <form onSubmit={registerBtnUser}>
            <div className="mb-4 mt-3">
                <label htmlFor="exampleInputName" className="text_date pb-2">Имя*</label>
                <input data-name="name" onChange={(e) =>
                    registerHandler("name", e.target.value)} required type="name"
                       className="form-control" id="exampleInputName"
                       aria-describedby="nameHelp" placeholder="Введите имя" value={registerState.name}/>
            </div>
            <div className="mb-4 mt-3">
                <label htmlFor="exampleInputNumber" className="text_date pb-2">Номер телефона*</label>
                <input onChange={(e) =>
                    registerHandler("phone_number", e.target.value)} required type="name"
                       className="form-control" id="exampleInputNumber"
                       aria-describedby="numberHelp" placeholder="+999 999 999"
                       value={registerState.phone_number}
                />
            </div>

            <div className="mb-4 mt-3">
                <label htmlFor="exampleInputEmail" className="text_date pb-2">E-mail</label>
                <input  onChange={(e) =>
                    registerHandler("email", e.target.value)} required type="email"
                        className="form-control" id="exampleInputEmail"
                        aria-describedby="emailHelp" placeholder="Введите E-mail" value={registerState.email}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="text_date pb-2">Пароль*</label>
                <input  onChange={(e) =>
                    registerHandler("password", e.target.value)} required
                        type="password" className="form-control"
                        id="exampleInputPassword1" placeholder="Введите пароль"
                        value={registerState.password}
                />
            </div>
            <div className="mb-3 form-check">
                <input required type="checkbox"
                       className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
            </div>
            <button type="submit" className="btn btn-primary form-control fw-bold">Войти</button>
            <div className="text_a">
                <span className="text_date">Уже авторизованы? </span>
                <a href="#">Войти</a>
            </div>
        </form>
    );
};

export default Register;