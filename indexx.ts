import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
  res.send("Bienvenue sur l’API Stylme !");
});

export default router;
