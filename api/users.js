import { addUser, getUsers, getUser, userUpdate, userDelete } from "../Handlers/userHandler";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // Handle adding a user
      try {
        const user = await addUser(req.body);
        return res.status(201).json(user);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to add user' });
      }

    case "GET":
      // Check for user ID in the query
      if (req.query.id) {
        try {
          const user = await getUser(req.query.id);
          return res.status(200).json(user);
        } catch (error) {
          return res.status(500).json({ error: 'Failed to get user' });
        }
      } else {
        try {
          const users = await getUsers();
          return res.status(200).json(users);
        } catch (error) {
          return res.status(500).json({ error: 'Failed to get users' });
        }
      }

    case "PUT":
      // Handle updating a user
      try {
        await userUpdate(req.query.id, req.body);
        return res.status(200).json({ message: 'User updated' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to update user' });
      }

    case "DELETE":
      // Handle deleting a user
      try {
        await userDelete(req.query.id);
        return res.status(204).json({});
      } catch (error) {
        return res.status(500).json({ error: 'Failed to delete user' });
      }

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
