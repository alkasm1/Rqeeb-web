function analyzeColorSimilarity(img1Data, img2Data) {
  // تحليل متوسط الألوان RGB وتحويله إلى نسبة
  const avgRGB1 = getAverageRGB(img1Data);
  const avgRGB2 = getAverageRGB(img2Data);

  const distance = Math.sqrt(
    Math.pow(avgRGB1.r - avgRGB2.r, 2) +
    Math.pow(avgRGB1.g - avgRGB2.g, 2) +
    Math.pow(avgRGB1.b - avgRGB2.b, 2)
  );

  const similarity = 100 - (distance / 442) * 100; // 442 = أقصى مسافة ممكنة بالـ RGB
  return Math.max(0, Math.min(similarity, 100));
}

function getAverageRGB(imgData) {
  let r = 0, g = 0, b = 0, count = imgData.data.length / 4;
  for (let i = 0; i < imgData.data.length; i += 4) {
    r += imgData.data[i];
    g += imgData.data[i + 1];
    b += imgData.data[i + 2];
  }
  return { r: r / count, g: g / count, b: b / count };
}
