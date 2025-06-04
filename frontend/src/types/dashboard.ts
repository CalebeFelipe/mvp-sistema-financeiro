// === DADOS DO DASHBOARD ===

export interface DashboardStats {
    totalBalance: number;
    monthlyIncome: number;
    monthlyExpenses: number;
    creditCardDebt: number;
}

// === COMPONENTES ===

export interface StatsCard {
    id: string;
    title: string;
    value: number;
    icon: string;
    color: 'primary' | 'success' | 'danger' | 'warning';
    trend?: {
        percentage: number;
        isPositive: boolean;
    };
}

// === NAVEGAÇÃO ===

// Item do menu lateral
export interface SidebarItem {
    id: string;
    label: string;
    icon: string;
    path: string;
    badge?: number;
}

// === PROPS DOS COMPONENTES ===

// Props do DashboardLayout
export interface DashboardLayoutProps {
    children: React.ReactNode;
    title?: string;
}

// Props da Sidebar  
export interface SidebarProps {
    items: SidebarItem[];
    currentPath: string;
}

// Props do StatsCard
export interface StatsCardProps {
    title: string;
    value: number;
    icon: string;
    color: 'primary' | 'success' | 'danger' | 'warning';
    trend?: {
        percentage: number;
        isPositive: boolean;
    };
    isLoading?: boolean;
}