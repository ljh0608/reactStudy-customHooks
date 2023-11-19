import { useNavigate } from "react-router-dom";

export function useRouter() {
  const router = useNavigate();

  return {
    currentPath: window.location.pathname,
    routeTo: (path: string) => router(path),
    back: () => router(-1),
    forward: () => router(1),
  };
}
