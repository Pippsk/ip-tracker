export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const ip = searchParams.get("ip");
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_IVPlc0WzdRsypuVMtGzWc5o7ErWn1&ipAddress=${ip}`
  );
  const ipData = await res.json();
  const ipCode = ipData.ip;

  return Response.json({ ipCode });
}
