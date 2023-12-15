import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export default function Layout({ children }) {
    return (
        <div className="dashboard-layout">
            <Aside />
            <div className="content-wrap">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}