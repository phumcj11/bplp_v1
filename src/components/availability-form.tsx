"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  availabilitySchema,
  groupTypes,
  type AvailabilityInput,
  type AvailabilityResponse,
} from "@/lib/availability";

const inputClass =
  "min-h-12 w-full rounded-xl border-2 border-charcoal/15 bg-white px-4 py-3 text-base text-charcoal outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/15";

export function AvailabilityForm() {
  const [serverState, setServerState] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AvailabilityInput>({
    resolver: zodResolver(availabilitySchema),
    defaultValues: {
      stayDate: "",
      guests: 8,
      groupType: undefined,
      contactName: "",
      phone: "",
      lineId: "",
      message: "",
      privacyAccepted: false,
      website: "",
    },
  });

  async function onSubmit(values: AvailabilityInput) {
    setServerState("idle");
    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as AvailabilityResponse;
      setServerMessage(data.message);
      if (!response.ok) {
        setServerState("error");
        return;
      }
      setServerState("success");
      reset();
    } catch {
      setServerState("error");
      setServerMessage(
        "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่หรือติดต่อทีมงานทาง LINE",
      );
    }
  }

  const fieldError = (name: keyof typeof errors) =>
    errors[name]?.message ? (
      <p className="mt-1 text-sm font-medium text-red-700" role="alert">
        {String(errors[name]?.message)}
      </p>
    ) : null;

  return (
    <section id="availability" className="section bg-off-white">
      <div className="shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <p className="eyebrow">CHECK YOUR DATE</p>
          <h2 className="section-title">เช็กแพว่างสำหรับทริปของคุณ</h2>
          <p className="mt-4 max-w-md text-lg text-charcoal/70">
            แจ้งวันที่และจำนวนสมาชิก ทีมงานจะช่วยแนะนำแพที่เหมาะกับกลุ่มให้
          </p>
          <div className="paint-note mt-7">ไม่ต้องสมัครสมาชิก</div>
        </div>

        <form
          className="rounded-[1.75rem] border-2 border-charcoal bg-white p-5 shadow-brutal md:p-8"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-label">
              วันที่ต้องการเข้าพัก *
              <input
                type="date"
                className={inputClass}
                aria-invalid={Boolean(errors.stayDate)}
                {...register("stayDate")}
              />
              {fieldError("stayDate")}
            </label>
            <label className="form-label">
              จำนวนผู้เข้าพัก *
              <input
                type="number"
                inputMode="numeric"
                min={1}
                className={inputClass}
                aria-invalid={Boolean(errors.guests)}
                {...register("guests", { valueAsNumber: true })}
              />
              {fieldError("guests")}
            </label>
            <label className="form-label">
              ประเภทกลุ่ม *
              <select
                className={inputClass}
                defaultValue=""
                aria-invalid={Boolean(errors.groupType)}
                {...register("groupType")}
              >
                <option value="" disabled>
                  เลือกประเภทกลุ่ม
                </option>
                {groupTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              {fieldError("groupType")}
            </label>
            <label className="form-label">
              ชื่อผู้ติดต่อ *
              <input
                autoComplete="name"
                className={inputClass}
                aria-invalid={Boolean(errors.contactName)}
                {...register("contactName")}
              />
              {fieldError("contactName")}
            </label>
            <label className="form-label">
              เบอร์โทรศัพท์ *
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={inputClass}
                aria-invalid={Boolean(errors.phone)}
                {...register("phone")}
              />
              {fieldError("phone")}
            </label>
            <label className="form-label">
              LINE ID
              <input
                autoComplete="off"
                className={inputClass}
                {...register("lineId")}
              />
              {fieldError("lineId")}
            </label>
          </div>
          <label className="form-label mt-5">
            ข้อความเพิ่มเติม
            <textarea
              rows={4}
              className={inputClass}
              {...register("message")}
            />
            {fieldError("message")}
          </label>

          <div className="sr-only" aria-hidden="true">
            <label>
              Website
              <input tabIndex={-1} autoComplete="off" {...register("website")} />
            </label>
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 text-base">
            <input
              type="checkbox"
              className="mt-1 size-5 accent-orange"
              {...register("privacyAccepted")}
            />
            <span>
              ฉันยอมรับนโยบายความเป็นส่วนตัว เพื่อให้ทีมงานติดต่อกลับ
            </span>
          </label>
          {fieldError("privacyAccepted")}

          {serverState !== "idle" && (
            <div
              className={`mt-5 rounded-xl p-4 font-medium ${
                serverState === "success"
                  ? "bg-green-100 text-green-900"
                  : "bg-red-100 text-red-900"
              }`}
              role={serverState === "error" ? "alert" : "status"}
            >
              {serverState === "success" && (
                <CheckCircle2 className="mr-2 inline" aria-hidden="true" />
              )}
              {serverMessage}
            </div>
          )}

          <button
            type="submit"
            className="button button--primary mt-6 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" aria-hidden="true" />
            ) : (
              <Send aria-hidden="true" />
            )}
            {isSubmitting ? "กำลังส่ง..." : "ส่งคำขอเช็กวันว่าง"}
          </button>
        </form>
      </div>
    </section>
  );
}
