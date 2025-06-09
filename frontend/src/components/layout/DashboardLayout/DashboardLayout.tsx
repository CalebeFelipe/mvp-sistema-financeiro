import { Sidebar } from '../Sidebar'
import type { DashboardLayoutProps } from "../../../types/dashboard";
import './DashboardLayout.css'

export const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {

    return (

        <div className="dashboard-layout">
            <Sidebar />

            <main>
                {title && <h1>{title}</h1>}

                <div className="content">
                    {children}
                </div>
            </main>
        </div>

    );

}