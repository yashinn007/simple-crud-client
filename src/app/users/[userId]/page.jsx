import { getUserById } from "@/app/lib/data";

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log(user);
  return (
    <div>
      <h2>User detail: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailPage;
