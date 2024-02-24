import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const res = await fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_IVPlc0WzdRsypuVMtGzWc5o7ErWn1&ipAddress=8.8.8.8"
    );

    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch IP data");
  }
};
