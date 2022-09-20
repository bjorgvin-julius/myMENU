import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../../../App";
import Menu from "../../../menu";
import Search from "../../../search";
import s from './Navigation.module.css'

export default function Navigation(){
    return(
        <>
        <nav className={s.navbar}>
            <ul className={s.listi}>
                <li className={s.listiItem}>
                    <Link to='/'>Heim</Link>
                </li>
                <div className={s.par}>
                    <li className={s.listiItem}>
                        <Link to='/search'>Leit</Link>
                    </li>
                    <li className={s.listiItem}>
                        <Link to='/menu'>Matseðill</Link>
                    </li>
                </div>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/menu' element={<Menu />}/>
        </Routes>
        </>
    )
}