import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/connectDb";
import { User } from "@/models/userModel";
import bcrypt from "bcryptjs";
import { connect } from "http2";

interface RegisterBodyRequest {
  username: string;
  password: string;
  email: string;
}

export const POST = async (request: NextRequest) => {
  try {
    const { username, email, password }: RegisterBodyRequest =
      await request.json();
    console.log(username, email, password);
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    connectDb();
    const userFound = await User.findOne({ username });
    console.log(userFound);
    if (userFound) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        message: `User ${savedUser.username} registered successfully`,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
};
