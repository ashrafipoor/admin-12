import { useEffect, useState } from "react";

export default function TimeSheet() {

    const [userStatus, setUserStatus] = useState(false);
    const [day, setDay] = useState(0);
    const data = [
        [true, true, true, false, false, true, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
        [true, true, true, false, false, false, true, false, false, false, false, true, true, true, true, true, true, true, true, true, false, false, false, true],
        [true, true, true, false, false, false, false, false, false, false, true, true, true, false, true, true, false, false, true, true, false, false, false, true],
        [true, true, true, false, false, false, false, false, false, false, true, true, true, false, true, true, false, false, true, true, false, false, false, true],
        [true, true, true, false, false, false, false, false, false, false, true, true, true, false, true, false, true, false, true, true, false, false, false, true],
        [true, true, true, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, true, false, false, false, true],
        [true, true, true, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, true]
    ]
    const [hour, setHour] = useState(0);
    const calc = (_hour, _day) => {
        setUserStatus(data[_day][_hour - 1]);
    }
    useEffect(() => {
        const d = new Date();
        setHour(d.getHours());
        setDay(d.getDay());
        setUserStatus(data[d.getDay()][d.getHours() - 1]);

    }, [])

    const changeHour = (e) => {
        const val = Number(e.target.value);
        setHour(val);
        calc(val, day);
    }
    const dayChangeHandler = (e) => {
        const _day = Number(e.target.value);
        setDay(_day)
        calc(hour, _day);
    }
    return (
        <div style={{ color: userStatus ? 'green' : 'red' }}>
            <select onChange={dayChangeHandler}>
                <option value={6}>شنبه</option>
                <option value={0}>یکشنبه</option>
                <option value={1}>دوشنبه</option>
                <option value={2}>سه شنبه</option>
                <option value={3}>چهارشنبه</option>
                <option value={4}>پنجشنبه</option>
                <option value={5}>جمعه</option>


            </select>
            <input min="1" max="24" type="number" value={hour} onChange={changeHour} />
            Time Sheet

        </div>
    )
}
