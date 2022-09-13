import React, {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DateTimePicker} from "@mui/lab";
import {useDispatch} from "react-redux";
import {endDate, startDate} from "../../store/collectBikeSlice";

function Banner(){
    const dispatch = useDispatch();
    const [valueStart, setValueStart] = useState(null);
    const [valueEnd, setValueEnd] = useState(null)
    const startDateBtn = (value) => {
        setValueStart(value)
        let resDate = new Date(value);
        let mm = resDate.getMonth() + 1;
        let dd = resDate.getDate();
        let yy = resDate.getFullYear(); //dd-mm-yy
        let hh = resDate.getHours();
        let min = resDate.getMinutes();

        let myDateString = `${yy}-${mm}-${dd} ${hh}:${min}`;
        dispatch(startDate(myDateString));
    }

    const endDateBtn = (value) => {
        setValueEnd(value);
        let resDate = new Date(value);
        let mm = resDate.getMonth() + 1;
        let dd = resDate.getDate();
        let yy = resDate.getFullYear(); //dd-mm-yy
        let hh = resDate.getHours();
        let min = resDate.getMinutes();

        let myDateString = `${yy}-${mm}-${dd} ${hh}:${min}`;
        dispatch(endDate(myDateString));
    }
    return (
        <div className="p-2 fonsMargin">
        <div className="fons_banner">
            <div className="d-flex_fons">
            <div className="text_banner">
                Аренда велосипедов <br/>
                c доставкой
            </div>
            <div className="d_flex ">
                <div className="banner_images">
                    <img src="https://s3-alpha-sig.figma.com/img/66bb/d2a6/d2d5dae5367200e65cdcbbd16efac68a?Expires=1647216000&Signature=aIySaBiWS2KxqwSGMhE2RU2HwCAdI0SUrYnrvpf-4b9hA~ce1UPxlWW8hz2y5zdFVhVwqAp4RA-6cflcEPUirDbTMmXw2xawFDcI6tRGdvYLM6IrJM2Cm03AccWYvSKw7FCLK5Yz-wmY9r2MsaVt1M5BAoFBU-L~ysfB9CHE0lgwW7XioRAFPbeX~Z3GX9xBLWJbQAhMtr1ZPgny9Jw4GmQCGORSi0UDGhOTNV-qARzgFCrpYBpz7DRJurB7FMm51ScpEQcRFtc5gHdLRcPw6iw3ny-d-C-s1smEAutKbK4QU9ACQGj2f1T5g~StjhCiX643EANwetd0O7M4-0JfNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                <div className="text_moto">
                    <h4>Шлем</h4>
                    <p>Бесплатно</p>
                </div>
                </div>
                <div className="banner_images_2">
                    <img src="https://s3-alpha-sig.figma.com/img/8ca8/d43b/5bca8035b2043ebd040d94024f913ef9?Expires=1647216000&Signature=YOyUlSrLTADGHPsQDoPgWPA1bnXMr~J2va1WbX~2R2KWlgkLbDyRKQsnCTAiwfIIsVZ8px0kxRGMm4-5kNl8Hktvts2RXNOASh2XhgIpqAgmDt5J17xtHBcq2k97NEEt2TxKZZfiD4yv8dwlcRxCCE7TrngixLCB92f0~ULVBQmMHXIUU8OgPP6JRitUuGp0-hUrxugSN9SLwzSyuUH-pEiylgaXxn8aqohlJRkrPAVyE4v3ZrL0gp0F5uYE-oO~P~v2EFiOk-uQTzrKo6YCim0NDxBlY3ZbWWMioI2xyaIqRH0rBcBjzDzy3Nkq929sckPRkDxLCl-VXLKCFyzPiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <div className="text_moto">
                        <h4>Фонарик</h4>
                        <p>Бесплатно</p>
                    </div>
                </div>
                <div className="banner_images_3">
                    <img src="https://s3-alpha-sig.figma.com/img/d4af/635f/d92f3acf3df745f9fac8283845bea40d?Expires=1647216000&Signature=YX87mU~d9MZYynzKU~JG-~vOzSTxY3R9Ud5H6gzx9ltlYRjdk2t20lVSBmadBC1F5ISdn7Orf7HyJKZoSjqFoYS8wJjRvdxk1-8U2SbGO7xUKpFuBHneir0x86tjcqLzEUvjhH16rRZ-LzfRdJaPZtSV7QbEYm4QT-Oh2TCXdTlIQvnwABqXxxrvyt5Ies-ecf7ck09UZ2S0f7soSdQUik0EDNxjE4pKTeygELBgB7HsrnQULLIIpPO6bxZATR1pG1eZ-wMhDDZpK3SYkWbvW062KnYvhajSDQGDkQyJMzdp2SsD5YN~yYMF4G3rYEskP2Vemmbt2qeEAVePrbSamA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <div className="text_moto">
                        <h4>Замок</h4>
                        <p>Бесплатно</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="dPost">
                <div className="text_banner2">
                    Аренда велосипедов
                    c доставкой!
                </div>
                <div className="d-flex justify-content-between" >
                    <div className="banner_images rad" style={{background: "#D7E6FF"}}>
                        <img src="https://s3-alpha-sig.figma.com/img/66bb/d2a6/d2d5dae5367200e65cdcbbd16efac68a?Expires=1647216000&Signature=aIySaBiWS2KxqwSGMhE2RU2HwCAdI0SUrYnrvpf-4b9hA~ce1UPxlWW8hz2y5zdFVhVwqAp4RA-6cflcEPUirDbTMmXw2xawFDcI6tRGdvYLM6IrJM2Cm03AccWYvSKw7FCLK5Yz-wmY9r2MsaVt1M5BAoFBU-L~ysfB9CHE0lgwW7XioRAFPbeX~Z3GX9xBLWJbQAhMtr1ZPgny9Jw4GmQCGORSi0UDGhOTNV-qARzgFCrpYBpz7DRJurB7FMm51ScpEQcRFtc5gHdLRcPw6iw3ny-d-C-s1smEAutKbK4QU9ACQGj2f1T5g~StjhCiX643EANwetd0O7M4-0JfNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                        <div className="text_moto">
                            <h4>Шлем</h4>
                            <p>Бесплатно</p>
                        </div>
                    </div>
                    <div className="banner_images_2 rad" style={{background: "#B9D5FF"}}>
                        <img src="https://s3-alpha-sig.figma.com/img/8ca8/d43b/5bca8035b2043ebd040d94024f913ef9?Expires=1647216000&Signature=YOyUlSrLTADGHPsQDoPgWPA1bnXMr~J2va1WbX~2R2KWlgkLbDyRKQsnCTAiwfIIsVZ8px0kxRGMm4-5kNl8Hktvts2RXNOASh2XhgIpqAgmDt5J17xtHBcq2k97NEEt2TxKZZfiD4yv8dwlcRxCCE7TrngixLCB92f0~ULVBQmMHXIUU8OgPP6JRitUuGp0-hUrxugSN9SLwzSyuUH-pEiylgaXxn8aqohlJRkrPAVyE4v3ZrL0gp0F5uYE-oO~P~v2EFiOk-uQTzrKo6YCim0NDxBlY3ZbWWMioI2xyaIqRH0rBcBjzDzy3Nkq929sckPRkDxLCl-VXLKCFyzPiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                        <div className="text_moto">
                            <h4>Фонарик</h4>
                            <p>Бесплатно</p>
                        </div>
                    </div>
                    <div className="banner_images_3 rad" style={{background: "#D7E6FF"}}>
                        <img src="https://s3-alpha-sig.figma.com/img/d4af/635f/d92f3acf3df745f9fac8283845bea40d?Expires=1647216000&Signature=YX87mU~d9MZYynzKU~JG-~vOzSTxY3R9Ud5H6gzx9ltlYRjdk2t20lVSBmadBC1F5ISdn7Orf7HyJKZoSjqFoYS8wJjRvdxk1-8U2SbGO7xUKpFuBHneir0x86tjcqLzEUvjhH16rRZ-LzfRdJaPZtSV7QbEYm4QT-Oh2TCXdTlIQvnwABqXxxrvyt5Ies-ecf7ck09UZ2S0f7soSdQUik0EDNxjE4pKTeygELBgB7HsrnQULLIIpPO6bxZATR1pG1eZ-wMhDDZpK3SYkWbvW062KnYvhajSDQGDkQyJMzdp2SsD5YN~yYMF4G3rYEskP2Vemmbt2qeEAVePrbSamA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                        <div className="text_moto">
                            <h4>Замок</h4>
                            <p>Бесплатно</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="date_select p-4">
                <div className="px-1">
                    <div className="pb-2 px-3 text_date">Тип аренды</div>
                    <div className=" bgBtn d-none">
                        <button className="btn activeBtn">По дням</button>
                        <button className="btn">2 часа</button>
                    </div>

                    <div className="btn-group bgBtn bg-primary" role="group" aria-label="Basic radio toggle button group">
                            <input type="button" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                                <label className="btn btn-outline-secondary text-white" htmlFor="btnradio2">По дням</label>
                    </div>
                </div>

                <div className="date_options2 px-1">
                    <div className="pb-2 px-3 text_date">Доставка</div>
                    <select defaultValue={'DEFAULT'} className="form-select slec" aria-label="Default select example">
                        <option value="DEFAULT" disabled>По адресу</option>
                        <option value="1">Самовывоз</option>
                    </select>
                </div>

                <div className="date px-1">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <p className="pb-date px-3 text_date">Время начала</p>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Дата и время начала"
                            value={valueStart}
                            onChange={(newValue) => startDateBtn(newValue)}
                        />
                    </LocalizationProvider>
                </div>
                <div className="date px-1">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <p className="pb-date px-3 text_date">Время конца</p>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Дата и время конца"
                            value={valueEnd}
                            onChange={(newValue) => endDateBtn(newValue)}
                        />
                    </LocalizationProvider>
                </div>
                <div className="date_options px-1">
                    <div className="pb-2 px-3 text_date">Доставка</div>
                    <select defaultValue={'DEFAULT'} className="form-select slec" aria-label="Default select example">
                        <option value="DEFAULT" disabled>По адресу</option>
                        <option value="1">Самовывоз</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;