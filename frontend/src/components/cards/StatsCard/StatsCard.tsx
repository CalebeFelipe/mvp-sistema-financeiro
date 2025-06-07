import type { StatsCardProps } from "../../../types/dashboard"


export const StatsCard = ({title, value, icon, color, trend, isLoading}:StatsCardProps) => {

    if(isLoading) {
        return (
            <div className="stats-card stats-card--loading">
                <div className="stats-card__spinner">Carregando...</div>
            </div>
        )
    }

    return (
        <div className={`stats-card stats-card--${color}`}>

            <div className="stats-card__header">

                <div className="stats-card__icon">
                    {icon}
                </div>

                <h3 className="stats-card__title">
                    {title}
                </h3>

            </div>

            <div className="stats-card__value">

                R$ {value.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}

            </div>

            {trend && (
                <div className={`stats-card__trend ${trend.isPositive ? 'positive' : 'negative'}`}>
                    <span className="stats-card__trend-icon">
                        {trend.isPositive ? '📈' : '📉'}
                    </span>

                    <span className="stats-card__trend-text">
                        {trend.isPositive ? '+' : ''}{trend.percentage}%
                    </span>
                </div>
            )}

        </div>
    )
}