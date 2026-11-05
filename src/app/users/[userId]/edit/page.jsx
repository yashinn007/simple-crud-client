import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log("edit user:", user);

  const updateUserWrapper = async (formData) => {
    "use server";
    return updateUser(userId, formData);
  };

  return (
    <div>
      <h2>Edit User: {user.name}</h2>
      <div className="w-1/2 mx-auto">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            name="name"
            type="text"
            variant="secondary"
            defaultValue={user?.name}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            type="email"
            variant="secondary"
            defaultValue={user?.email}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            type="text"
            variant="secondary"
            defaultValue={user?.role}
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>
          <div className="flex justify-end gap-2">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;
