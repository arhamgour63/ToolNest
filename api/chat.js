export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const message = req.body.message || "";

  res.status(200).json({
    reply: "You asked: " + message
  });

}
