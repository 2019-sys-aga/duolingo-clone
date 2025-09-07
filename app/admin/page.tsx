import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs/server";
import { getIsAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = async () => {
  const { userId } = await auth();
  const isAdmin = await getIsAdmin(userId || undefined);

  if (!isAdmin) redirect("/");

  return (
    <div>
      <App />
    </div>
  );
};

export default AdminPage;
