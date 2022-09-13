import React from 'react';

const SearchBike = () => {
    return (
        <div className="flex_bike">
            <div className="search_flex">
                <div>
                    <div className="pb-2 text_date">Бренд</div>
                    <select defaultValue={'DEFAULT'} className="form-select form-select-lg mb-3 slec2" aria-label=".form-select-lg example">
                        <option value="DEFAULT" disabled>Все</option>
                        <option value="1">Городской</option>
                        <option value="2">Спортивный</option>
                        <option value="3">Горный</option>
                    </select>
                </div>
                <div>
                    <div className="pb-2 text_date">Размер рамы</div>
                    <select defaultValue={'DEFAULT'} className="form-select form-select-lg mb-3 slec2" aria-label=".form-select-lg example">
                        <option value="DEFAULT" disabled>Все</option>
                        <option value="1">XS</option>
                        <option value="2">S</option>
                        <option value="3">M</option>
                        <option value="3">L</option>
                        <option value="3">XL</option>
                        <option value="3">XXL</option>
                    </select>
                </div>
            </div>
            <div className="input-group input_search">
                <input type="text" className="form-control" placeholder="Поиск велика"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Найти
                </button>
            </div>

        </div>
    );
};

export default SearchBike;