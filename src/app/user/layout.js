import '@fortawesome/fontawesome-svg-core/styles.css';
import LayoutPage from "./components/Layout";
export const metadata = {
    title: 'User Dashboard',
    description: 'Create By Khairul Islam Tonmoy',
}
const Layout = ({ children }) => {

    return (
        <LayoutPage>
            {children}
        </LayoutPage>
    );
};
export default Layout;



