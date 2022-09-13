import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {activeUsers} from "../../../store/userInfoSlice";

const ActivePersonal = () => {
    const mjk = window.location.href.split("/");
    const urlEnd = window.location.href.split("/");

    const dispatch = useDispatch();


    useEffect(() => {
        const objUrl = {
            uid: mjk[mjk.length-2],
            token: urlEnd.pop()
        }
        dispatch(activeUsers(objUrl))
    }, [])
    return (
        <div className="text-center pt-4">
            <h2>Вы успешно зарегистрировались</h2>
        </div>
    );
};

export default ActivePersonal;