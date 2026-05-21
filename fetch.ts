import https from "https";

https.get("https://sites.google.com/view/my-efolio-michael-mukaira-a/home", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    // Remove script tags and their contents
    let cleanText = data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ");
    // Remove style tags
    cleanText = cleanText.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ");
    // Remove all remaining html tags
    cleanText = cleanText.replace(/<[^>]*>/g, " ");
    // Remove excessive whitespace
    cleanText = cleanText.replace(/\s+/g, " ").trim();
    console.log(cleanText.substring(0, 5000));
  });
});
