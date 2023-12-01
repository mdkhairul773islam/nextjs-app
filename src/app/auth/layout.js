import style from './auth.module.css';
export const metadata = {
    title: 'User Panel',
    description: 'Generated by create next app',
}
export default function Layout({ children }) {
    return (
        <main className={style.bgColor}>
            {children}
        </main>
    )
}