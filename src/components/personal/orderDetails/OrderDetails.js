import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {orderTekFetch} from "../../../store/orderSlice";

const OrderDetails = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(orderTekFetch(props))
    }, [])

    const stateOrderDetails = useSelector(state => state.order.order_details);

    
    return (
        <div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {stateOrderDetails.map(item => {
               return <div key={item.id} className="accordion accordion-flush" id="accordionFlushExample">
                   <div className="accordion-item">
                       <h2 className="accordion-header" id="flush-headingOne">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                   data-bs-target={`#flush-headingOne${item.id}td`} aria-expanded="false"
                                   aria-controls="flush-collapseOne">
                               <div>
                                   <div className="flex_acordion">
                                       <div>Заказ № {item.id}</div>
                                       <div>Стоимость {item.total_sum}</div>
                                       <div>{item.status}...</div>
                                   </div>

                               </div>
                           </button>
                       </h2>
                       <div id={`flush-headingOne${item.id}td`} className="accordion-collapse collapse overs"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                           <table className="table table-borderless">
                               <thead>
                               <tr className="p-5">
                                   <th scope="col" className="text_date">Велосипеды</th>
                                   <th scope="col" className="text_date">Дата и время начала</th>
                                   <th scope="col" className="text_date">Дата и время конца</th>
                                   <th scope="col" className="text_date">Статус</th>
                               </tr>
                               </thead>
                               <tbody className="trt">
                               {item.bicycles.map((bike, index) => {
                                   return <tr key={index}>
                                       <th scope="row">{bike.bicycle_name}</th>
                                       <td>{bike.start_date}</td>
                                       <td>{bike.end_date}</td>
                                       <td>{item.status}</td>
                                   </tr>
                               })}
                               </tbody>
                           </table>
                           <div>
                           </div>
                       </div>
                   </div>
               </div>
                })}
            </div>
        </div>
    );
};

export default OrderDetails;