import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addressaChange} from "../../../../store/orderSlice";
import {orderBikeFetch} from "../../../../store/collectBikeSlice";

const InfoOrder = () => {
    const stateUserBike = useSelector(state => state.order.address);
    const statePostBike = useSelector(state => state.collect);
    const accessState = useSelector(state => state.authorization.access)
    const dispatch = useDispatch();

    const bikePostBtn = (e) => {
        const objBike = {
            bicycles: statePostBike.collectBicycle,
            total_sum: statePostBike.total_sum,
            address: stateUserBike
        }

        dispatch(orderBikeFetch({objBike, access: accessState}))
        e.preventDefault();
    }
    return (
        <div className="width_order mt-5">
            <form onSubmit={bikePostBtn}>
                <div className="mb-3">
                    <input onChange={(e) => dispatch(addressaChange(e.target.value))} required placeholder="Адресс доставки" type="text" className="form-control" value={stateUserBike}/>
                </div>
                <div className="mb-3 form-check">
                    <input required type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
                </div>

                {accessState ?
                    <button type="submit" className="btn btn-primary form-control">Отправить</button>
                : <button  type="submit" className="btn btn-primary form-control" id="tel-num" data-bs-toggle="modal"
                           data-bs-target="#exampleModal">Отправить</button>}
            </form>
        </div>
    );
};

export default InfoOrder;