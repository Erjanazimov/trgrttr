import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


const FixedBike = () => {
    const collectBike = useSelector(state => state);
    const stateToken = useSelector(state => state.authorization);
    const {push} = useHistory();
    const dispatch = useDispatch();

    const fixedBook = () => {
        let orderObj = {
            bicycles: collectBike.collect.collectBicycle,
            total_sum: collectBike.collect.total_sum,
        };
        // dispatch(orderBikeFetch({access: stateToken.access, orderObj}))
        push("/orderBike")
    }
    return (
        <div className="fixed">
            <div className="container-global">
                <div className="flex_bike_post">
                <div className="bike_fixed">
                    <span>Количество велосипедов:</span> <span className="bike_text_fixed">{collectBike.collect.collectBicycle.length}</span>
                </div>
                <div className="mx-1">
                        <button onClick={fixedBook} type="button" className="btn btn-primary btn-fixed">Забронировать</button>


                </div>
                </div>
            </div>
        </div>
    );
};

export default FixedBike;