import React from "react";

import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { StatsCard } from "../../components/cards/StatsCard";
import './Dashboard.css'

export const Dashboard: React.FC = () => {

    return (

        <DashboardLayout
            title='Dashboard'
        >
            <div className="dashboard-stats">

                <StatsCard
                    title="Saldo Total"
                    value={12450.00}
                    icon="💰"
                    color="success"
                    trend={{ percentage: 12.5, isPositive: true }}
                />

                <StatsCard
                    title="Receitas do Mês"
                    value={8500.00}
                    icon="📈"
                    color="primary"
                    trend={{ percentage: 8.2, isPositive: true }}
                />

                <StatsCard
                    title="Despesas do Mês"
                    value={3200.00}
                    icon="📉"
                    color="danger"
                    trend={{ percentage: 4.1, isPositive: false }}
                />

                <StatsCard
                    title="Cartão de Crédito"
                    value={1800.00}
                    icon="💳"
                    color="warning"
                />
            </div>
        </DashboardLayout>

    );

}