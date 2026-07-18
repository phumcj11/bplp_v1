import { NextResponse } from "next/server";
import { availabilitySchema } from "@/lib/availability";
import { availabilitySubmissionAdapter } from "@/lib/submission-adapter";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = availabilitySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "กรุณาตรวจสอบข้อมูลในแบบฟอร์ม",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    await availabilitySubmissionAdapter.submit(result.data);

    return NextResponse.json({
      success: true,
      message:
        "ได้รับข้อมูลแล้ว ทีมงานจะติดต่อกลับเพื่อยืนยันแพและวันว่าง",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่หรือติดต่อทีมงานทาง LINE",
      },
      { status: 500 },
    );
  }
}
