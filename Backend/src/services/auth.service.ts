import prisma from '../config/prisma';
import bcrypt from 'bcryptjs';
import { signToken } from '../utils/jwt';
import { JWTPayload, UserSession } from '../types/auth.types';

export const loginAdminService = async (username: string, passwordAttempt: string): Promise<UserSession | null> => {
  const admin = await prisma.admin.findUnique({
    where: { username }
  });

  if (!admin) return null;

  const passwordsMatch = await bcrypt.compare(passwordAttempt, admin.password);
  if (!passwordsMatch) return null;

  const payload: JWTPayload = {
    id: admin.id,
    username: admin.username
  };

  const token = signToken(payload);

  return {
    token,
    username: admin.username
  };
};
