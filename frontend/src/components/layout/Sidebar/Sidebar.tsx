import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css'

export const Sidebar: React.FC = () => {

    const location = useLocation()

    const sidebarItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '🏠', path: '/dashboard' },
        { id: 'add-new', label: '+Novo', icon: '➕', path: '/add-transaction' },
        { id: 'income', label: 'Receitas', icon: '💰', path: '/income' },
        { id: 'expenses', label: 'Despesas', icon: '💸', path: '/expenses' },
        { id: 'cards', label: 'Cartões', icon: '💳', path: '/cards' }
    ]

    return (
        <aside className="sidebar">

            <div className="sidebar__header">
                <h2 className="sidebar__header">
                    Sistema Financeiro
                </h2>
            </div>

            <nav className="sidebar__nav">
                <ul className="sidebar__menu">
                    {sidebarItems.map(item => (
                        <li className="sidebar__item">

                            <Link to={item.path} className={`sidebar__link ${location.pathname === item.path ? 'sidebar__link--active' : ''}`}></Link>

                            <span className="sidebar__icon">{item.icon}</span>
                            <span className="sidebar__label">{item.label}</span>
                        </li>
                    ))
                    }
                </ul>
            </nav>

            <div className="sidebar__footer">
                <div className="sidebar__user">
                    <span className="sidebar__user-name">Calebe</span>
                </div>
            </div>

        </aside>
    )

}