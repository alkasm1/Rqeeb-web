import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const isArabic = router.locale === "ar";

  return (
    <>
      <Head>
        <title>رقيب | RQEEB - كشف التزوير الذكي</title>
        <meta name="description" content="أداة ذكية لمقارنة الصور وكشف التزوير بدقة عالية" />
      </Head>

      <main style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#111",
        color: "#fff",
        minHeight: "100vh",
        direction: isArabic ? "rtl" : "ltr"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          {isArabic ? "رقيب لكشف التزوير" : "RQEEB - Fraud Detection"}
        </h1>

        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          {isArabic
            ? "قارن بين الصور أو المستندات أو العملات أو اللوحات الفنية لكشف التزوير بدقة عالية"
            : "Compare documents, currency, or artwork to detect forgery accurately."}
        </p>

        <button
          style={{
            backgroundColor: "#ff8800",
            border: "none",
            padding: "1rem 2rem",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => window.location.href = "/check.html"}
        >
          {isArabic ? "ابدأ الآن" : "Start Now"}
        </button>

        <footer style={{ marginTop: "4rem", fontSize: "0.9rem", opacity: 0.7 }}>
          <p>
            {isArabic ? "تم التطوير بواسطة رأفت عمر" : "Developed by Raafat Omar"}
          </p>
          <p>
            📧 <a href="mailto:shamwebs1@gmail.com" style={{ color: "#ff8800" }}>shamwebs1@gmail.com</a>
          </p>
          <p>
            🔗 <a href="https://www.facebook.com/profile.php?id=61578212474377" target="_blank" rel="noreferrer" style={{ color: "#ff8800" }}>صفحتنا على فيسبوك</a>
          </p>
        </footer>
      </main>
    </>
  );
}
