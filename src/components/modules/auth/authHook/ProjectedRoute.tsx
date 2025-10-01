"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./UseAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "USER" | "ADMIN";
}

export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const { user, loading } = useAuth(role);
  const router = useRouter();

  if (loading) {
    return <p>Loading...</p>; 
  }
  if (!user) {
    router.push("/auth/login"); 
    return null;
  }

  return <>{children}</>; 
}
