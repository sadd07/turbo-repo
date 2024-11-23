// routes/userRoutes.ts
import express, { Request, Response, NextFunction, Router } from 'express';
import auth from '../middleware/authMiddleware';
import { addUser, getUserById, getUsers } from '../repository/userCollection';

const router: Router = express.Router();

const generateId = (length = 8) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
};

router.get("/fetch-user-data", auth, async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    if (users.length === 0) {
      res.status(200).send({ message: "No user data" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

router.get("/fetch-user-data/:id", auth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(418).send({ message: "Parameter id Required" });
    } else {
      const user = await getUserById(id);
      if (!user) {
        res.status(200).send({ message: "User not found" });
      } else {
        res.status(200).json(user);
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

  
router.post("/update-user-data", auth, async(req, res) => {
  const { age, name, email } = req.body;
  if (!name || !age || !email) {
    res.status(418).send({ message: "Params Required" });
  }
  // const id = generateId();
  await addUser({name, age, email});
  res.status(201).send({ message: "User added successfully" });
});

export default router;

