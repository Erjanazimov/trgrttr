import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBike, fetchBikeInfo, removeCollectNo, removeCollectYes} from "../../store/bikeSlice";
import SearchBike from "./searchBike/SearchBike";
import FixedBike from "./fixedBike/FixedBike";
import {collectBikes, removeCollectBike} from "../../store/collectBikeSlice";
import {toast} from "react-toastify";

let mas = [];
function Bike(){
    const dispatch = useDispatch();
    const bikeState = useSelector(state => state.byBike.bike)
    const date = useSelector(state => state.collect);
    useEffect(() => {
        dispatch(fetchBike())
    }, [])

    const bikeMap = bikeState.map(bike => {
        return <div key={bike.id}>
            <p>
                <img onClick={() => infoBikeBtn(bike.id)} data-bs-toggle="modal" data-bs-target="#exampleModalBike" className="bike_img" src={bike.cover_image}/> </p>
            <div className="bg-bike">
                <h5>{bike.brand_name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="info_bike">
                        {bike.price} сом</p>
                    <div className="d-flex ">
                        <p className="btn btn-outline-secondary bike_btn mx-2">?</p>
                        {bike.boll ?
                            <p onClick={() => bikeCounter(bike.id, bike.price, bike.brand_name)}
                               className="btn btn-outline-secondary bike_btn">+</p> :
                            <p onClick={() => bikeCounterNo(bike.id, bike.price)}
                               className="btn btn-outline-secondary bike_btn">-</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    })

    const infoBikeBtn = (id) => {
        dispatch(fetchBikeInfo(id))
    }
    function bikeCounter(id, price, name){
        if (date.startDate && date.endDate) {
            const collectBikeObj = {
                id: id,
                start_date: date.startDate,
                end_date: date.endDate,
                bicycle_price: price,
                bicycle_name: name,
                flashlight: false,
                helmet: false,
                lock: false
            }
            mas.push(collectBikeObj);
            dispatch(collectBikes(collectBikeObj));
            dispatch(removeCollectYes({id}))
        } else {
            toast.error("Добавьте дату")
        }
    }

    const bikeCounterNo = (id, price) => {
        const collectBikeObj = {
            id: id,
            start_date: date.startDate,
            end_date: date.endDate,
            bicycle_price: price
        }
        dispatch(removeCollectNo({id}))
        dispatch(removeCollectBike({id, collectBikeObj}))
    }

    return (
        <div className="p-2 fonsMargin">
            <div className="fons_banner">
                <div>
                    <p className="text_date px-4 pt-3">Тип велосипеда</p>
                    {/*<SearchBike/>*/}
                    <div className="bike_flex">
                        {bikeState.length ? bikeMap : "Loading"}
                    </div>
                </div>
            </div>

            {date.collectBicycle.length ?
                <div>
                    <FixedBike/>
                </div> : null
            }
        </div>
    );
};

export default Bike;