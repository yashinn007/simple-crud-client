import UsersTable from "../components/UsersTable";
import { getUser } from "../lib/data";
import { createUser, deleteUser } from "../lib/actions";
import AddUserModal from "../components/AddUserModal";

const UsersPage = async () => {
  const users = await getUser();
  return (
    <div>
      <div className="flex items-center justify-between my-4 mx-50">
        <h2> Users Page</h2>
        <AddUserModal createUserAction={createUser}></AddUserModal>
      </div>
      <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
    </div>
  );
};

export default UsersPage;
