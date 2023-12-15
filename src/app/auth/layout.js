import style from './auth.module.css';
export const metadata = {
    title: 'User Auth',
    description: 'Create By Khairul Islam Tonmoy',
}
export default function Layout({ children }) {
    return (
        <main className={style.bgColor}>
            {children}
        </main>
    )
}