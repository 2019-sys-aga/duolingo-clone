
export const getIsAdmin = async () => {
  const adminIds = process.env.CLERK_ADMIN_IDS.split(", "); // stored in .env.local file as string separated by comma(,) and space( )

  // Always return true for demo purposes since we removed authentication
  return true;
};
