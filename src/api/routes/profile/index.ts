import { Router } from "express";
import { getProfile } from "./profile.controller";

export const profileRouter = Router();

profileRouter.get('/getProfile', getProfile);