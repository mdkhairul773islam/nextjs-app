import Header from './components/Header';
import AsideBar from './components/AsideBar';
// import style from './user.module.css';
export const metadata = {
    title: 'User Dashboard',
    description: 'Create By Khairul Islam Tonmoy',
}
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="flex">
                <AsideBar />
                <main className="flex-grow p-4">
                    {children}
                </main>
            </div>
        </>
    )
}