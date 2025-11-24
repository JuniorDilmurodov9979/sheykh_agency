"use client";
import React, { useEffect } from "react";

const InstagramReels = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.instgrm) {
      // @ts-ignore
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DPEsEuaAl5H/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow:
            "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
        <div style={{ padding: 16 }}>
          <a
            href="https://www.instagram.com/reel/DPEsEuaAl5H/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: "#FFF",
              lineHeight: 0,
              padding: 0,
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: 40,
                  width: 40,
                  marginRight: 14,
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: 4,
                    height: 14,
                    marginBottom: 6,
                    width: 100,
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: 4,
                    height: 14,
                    width: 60,
                  }}
                ></div>
              </div>
            </div>

            <div style={{ padding: "19% 0" }}></div>

            <div
              style={{
                display: "block",
                height: 50,
                width: 50,
                margin: "0 auto 12px",
              }}
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000"
                  d="M556.869,30.41 C554.814,30.41 553.148,32.076..."
                />
              </svg>
            </div>

            <div style={{ paddingTop: 8 }}>
              <div
                style={{
                  color: "#3897f0",
                  fontFamily: "Arial, sans-serif",
                  fontSize: 14,
                  fontWeight: 550,
                  lineHeight: "18px",
                }}
              >
                View this post on Instagram
              </div>
            </div>

            <div style={{ padding: "12.5% 0" }}></div>
          </a>

          <p
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial, sans-serif",
              fontSize: 14,
              lineHeight: "17px",
              marginTop: 8,
              marginBottom: 0,
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <a
              href="https://www.instagram.com/reel/DPEsEuaAl5H/?utm_source=ig_embed&amp;utm_campaign=loading"
              target="_blank"
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              A post shared by Telefon / Soat / Aksessuar (@snappro_uz)
            </a>
          </p>
        </div>
      </blockquote>

      <script async src="//www.instagram.com/embed.js"></script>
    </>
  );
};

export default InstagramReels;