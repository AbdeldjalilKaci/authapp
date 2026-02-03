import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ message: "Missing token" }), {
      status: 401,
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return new Response(
      JSON.stringify({
        message: "Access granted to protected route",
        user: decoded,
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Invalid or expired token" }),
      { status: 403 }
    );
  }
}
