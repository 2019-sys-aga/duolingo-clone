import dynamic from "next/dynamic";

import { getIsAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = async () => {
  const isAdmin = await getIsAdmin();

  return (
    <div>
      <App />
    </div>
  );
};

export default AdminPage;
