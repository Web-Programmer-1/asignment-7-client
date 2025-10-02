import ProtectedRoute from "@/components/modules/auth/authHook/ProjectedRoute";
import Sidebar from "@/components/modules/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex gap-4">
      <ProtectedRoute role="USER">
        <Sidebar></Sidebar>
      </ProtectedRoute>
      {children}
    </main>
  );
}
