import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { connectDB } from "@/lib/mongodb";
import Result from "@/lib/models/Result";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    await connectDB();
    const result = await Result.create({
      userId: session.user.id,
      userName: session.user.name,
      userEmail: session.user.email,
      patientName: body.patientName,
      patientId: body.patientId,
      patientNotes: body.patientNotes || "",
      prediction: body.prediction,
      result: body.result,
      confidence: body.confidence,
      features: body.features,
    });
    return NextResponse.json({ message: "Result saved", id: result._id }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const results = await Result.find({ userEmail: session.user.email })
      .sort({ createdAt: -1 })
      .limit(10);
    return NextResponse.json({ results });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
