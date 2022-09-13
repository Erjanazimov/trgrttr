import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo, userInfoHandler} from "../../../store/userInfoSlice";


const PersonalInfo = () => {
    const tokenUsers= useSelector(state => state.authorization);
    const dispatch = useDispatch();
    const infoUser = useSelector(state => state.userInfo.login);

    useEffect(() => {
        dispatch(fetchUserInfo(tokenUsers))
    }, [])

    const userHandler = (name, e) => {
        dispatch(userInfoHandler({[name]:e}))
    }

    const userEditBtn = (e) => {

        e.preventDefault();
    }
    return (
        <div>
            <h2 className="pt-3">Личный кабинет</h2>
            <div>
                <div>
                    <form onSubmit={userEditBtn} >
                        <div className="flex_personalInfo">
                    <div >
                        <label htmlFor="exampleInputName" className="text_date pb-2">Имя</label>
                        <input onChange={(e) =>
                            userHandler("name", e.target.value)} required type="name" className="form-control" id="exampleInputName"
                               aria-describedby="nameHelp" placeholder="Введите имя"  value={infoUser.name}/>
                    </div>
                    <div>
                        <label htmlFor="exampleInputEmail" className="text_date pb-2">E-mail</label>
                        <input onChange={(e) =>
                            userHandler("email", e.target.value)} required type="email"
                                className="form-control" id="exampleInputEmail"
                                aria-describedby="emailHelp" placeholder="Введите E-mail" value={infoUser.email}/>
                    </div>
                            <div >
                                <label htmlFor="exampleInputPassword1" className="text_date pb-2">Текущий пароль</label>
                                <input onChange={(e) =>
                                    userHandler("currentPassword", e.target.value)} required type="password" className="form-control"
                                       id="exampleInputPassword1" placeholder="Текущий пароль"
                                       value={infoUser.currentPassword}
                                />
                            </div>
                        <div>
                            <label htmlFor="exampleInputPassword1" className="text_date pb-2">Пароль</label>
                            <input onChange={(e) =>
                                userHandler("password", e.target.value)} required type="password" className="form-control"
                                    id="exampleInputPassword1" placeholder="Введите пароль"
                                   value={infoUser.password}
                            />
                        </div>
                        <div>
                            <label htmlFor="exampleInputNumber" className="text_date pb-2">Номер телефона*</label>
                            <input  onChange={(e) =>
                                userHandler("phone_number", e.target.value)} required type="name"
                                   className="form-control" id="exampleInputNumber"
                                   aria-describedby="numberHelp" placeholder="+999 999 999"
                                     value={infoUser.phone_number}
                            />
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary form-control fw-bold">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;