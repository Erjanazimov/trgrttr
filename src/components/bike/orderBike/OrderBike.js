import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import InfoOrder from "./infoOrder/InfoOrder";
import {Link} from "react-router-dom";
import {checkedAdd, counterBike} from "../../../store/collectBikeSlice";

const OrderBike = () => {
    const stateOrderBike = useSelector(state => state.collect);
    const dispatch = useDispatch();
    const changeBike = (id, checked) => {
        dispatch(checkedAdd({id, checked}))
    }

    
    const counter_order = (obj) => {
        dispatch(counterBike({obj}))
    }

    function removeDuplicates(originalArray, prop) {
        let newArray = [];
        let lookupObject  = {};

        for(let i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for(let i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }

    let contentDuplicates = removeDuplicates(stateOrderBike.collectBicycle, "id");

    return (
        <div>
            <div className="p-2 fonsMargin mb-5">
                <div className="fons_banner pg">
                    <div>
                        <h1 className="text-center">Заявка на аренду велосипедов</h1>
                        <div>
                            <div className="flex_text_order">
                                <div className="text_order">
                                    <p className="text_date">Тип аренды</p>
                                    <p>По дням</p>
                                </div>
                                <div className="text_order">
                                    <p className="text_date">Дата и время начала</p>
                                    <p>{stateOrderBike.startDate}</p>
                                </div>
                                <div className="text_order">
                                    <p className="text_date">Дата и время начала</p>
                                    <p>{stateOrderBike.endDate}</p>
                                </div>
                                <div className="text_order">
                                    <p className="text_date">По адресу</p>
                                    <p>Бишкек</p>
                                </div>
                            </div>
                            <div>
                                {stateOrderBike.collectBicycle.length ?
                                    <div>
                                        <div className="over_bike">
                                        {contentDuplicates.map((item, index) => {
                                            return <div key={index} className="mt-3 d-flex justify-content-between">
                                                <div>
                                                    <img className="img_order" src="https://bikepark.ae/upload/iblock/c82/c8242ad702c60a1ed6e7768938b9dc4b.jpg"/>
                                                </div>
                                                <div>
                                                    <div className="text_color">Название велосипедов</div>
                                                <div className="text_order_bike">
                                                    {item.bicycle_name}
                                                </div>
                                                </div>
                                                <div onClick={() => counter_order(item)} className="counter_order ">
                                                    +
                                                </div>
                                                <div>
                                                    <div className="text_color">Количество</div>
                                                <div className="counter_order">
                                                    {stateOrderBike.collectBicycle.filter(bikeId => bikeId.id === item.id).length}
                                                </div>
                                                </div>
                                                <div className="order_checked">
                                                    <div>
                                                        <div className="text_color">Шлем</div>
                                                    <div className="form-check form-check-inline">
                                                        <input checked={item.helmet} onChange={() => changeBike(item.id, "helmet")} className="form-check-input p-3" type="checkbox" id="inlineCheckbox1"
                                                               value={`helmet${index}`}/>
                                                    </div>
                                                    </div>
                                                    <div>
                                                        <div className="text_color">Фонарик</div>
                                                    <div className="form-check form-check-inline">
                                                        <input checked={item.flashlight} onChange={() => changeBike(item.id, "flashlight")} className="form-check-input p-3" type="checkbox" id="inlineCheckbox2"
                                                               value={`flashlight${item.bicycle_name}`}/>
                                                    </div>
                                                    </div>
                                                    <div>
                                                        <div className="text_color">Замок</div>
                                                    <div className="form-check form-check-inline">
                                                        <input checked={item.lock} onChange={() => changeBike(item.id, "lock")} className="form-check-input p-3" type="checkbox" id="inlineCheckbox3"
                                                               value={`lock${item.id}`} />
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="summa_order">
                                                    <div className="text_color">Стоимость</div>
                                                    <div className="eidth">
                                                    {item.bicycle_price} сом
                                                </div>
                                                </div>
                                            </div>
                                        })}
                                        </div>
                                        <div className="summa">
                                            <button type="button" className="btn btn-outline-primary"><a href="/">Назад к выбору велосипедов</a></button>
                                            <div className="d-flex">
                                                <span className="textsumma text_date">Итого:</span>
                                                <span className="eidth">{stateOrderBike.total_sum} сома</span>
                                            </div>
                                        </div>
                                    </div>

                                    : <>
                                <h2>Выберите велик</h2>
                                    <button type="button" className="btn btn-outline-primary">
                                        <Link to="/">Назад к выбору велосипедов</Link></button>
                                    </>
                                }


                                <InfoOrder/>
                            </div>
                        </div>
                    </div>
        </div>
            </div>
        </div>
    );
};

export default OrderBike;