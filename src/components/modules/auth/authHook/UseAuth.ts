"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";

export function useAuth(requiredRole?: "USER" | "ADMIN") {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me", { withCredentials: true });
        const userData = res.data.user;

        if (requiredRole && userData.role !== requiredRole) {
          setUser(null);
        } else {
          setUser(userData);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [requiredRole]);

  return { user, loading };
}
