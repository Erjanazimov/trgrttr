import React, {useEffect} from 'react';
import Banner from "../components/banner/Banner";
import Bike from "../components/bike/Bike";
import {useDispatch} from "react-redux";
import {nullFixed} from "../store/collectBikeSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(nullFixed())
    }, [])
    return (
        <div>
            <Banner/>
            <Bike/>
        </div>
    );
};

export default Home;