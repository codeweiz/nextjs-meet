import {useTranslations} from "next-intl";

export default function DashboardPage() {
    // i18n
    const t = useTranslations();

    // 面包屑
    const breadcrumbs = [
        {
            label: t("menu.application.dashboard.title"),
            isCurrentPage: true
        }
    ]

    return (
        <>
            Dashboard
        </>
    )
}
