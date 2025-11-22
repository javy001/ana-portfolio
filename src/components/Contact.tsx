// import React from 'react';

export function Contact() {
  return (
    <div>
      <div
        style={{
          fontSize: "1.8rem",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Contact Information
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div>ariquintero@gmail.com</div>
            <div>
              <a
                href="https://www.linkedin.com/in/ariquintero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/ana-portfolio/LI-Logo.png" height={20} />
              </a>
            </div>

            <div>
              <a
                href="https://www.instagram.com/ariquintero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/ana-portfolio/ig-icon.png" height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
