import style from './auth.module.css';
export default function Layout({ children }) {
    return (
        <main className={style.bgColor}>
            {children}
        </main>
    )
}