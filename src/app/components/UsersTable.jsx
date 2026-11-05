"use client";
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";

const UsersTable = ({ users, deleteUserAction }) => {
  console.log(users);

  const userDeleteHandler = async (userId) => {
    await deleteUserAction(userId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <Link href={`/users/${user._id}`}>
                      <Button variant="outline">Details</Button>
                    </Link>
                    <Link href={`/users/${user._id}/edit`}>
                      <Button variant="outline">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <Button variant="danger">Delete</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>
                                Delete user permanently?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete{" "}
                                <strong>{user.name}</strong> and all of its
                                data. This action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                Cancel
                              </Button>
                              <Button
                                onClick={() => userDeleteHandler(user._id)}
                                slot="close"
                                variant="danger"
                              >
                                Confirm Delete
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UsersTable;
