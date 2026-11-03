export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Jika browser meminta file gambar (.webp atau .jpg), ambil langsung dari repositori GitHub Anda
    if (url.pathname.endsWith(".webp") || url.pathname.endsWith(".jpg") || url.pathname.endsWith(".png")) {
      return env.ASSETS.fetch(request);
    }

    // 2. Konfigurasi Nomor WhatsApp (Ganti dengan nomor aktif Anda)
    const nomorWA = "6281234567890";

    // 3. Script Pembangun Tampilan Blog (Murni JavaScript DOM tanpa file HTML)
    const appScript = `
      function renderBlog() {
        document.title = "Blog & Katalog Cheesecuit Premium";

        Object.assign(document.body.style, {
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#fdfbf7",
          color: "#332922",
          margin: "0",
          padding: "16px",
          lineHeight: "1.7"
        });

        const container = document.createElement("main");
        Object.assign(container.style, {
          maxWidth: "760px",
          margin: "10px auto",
          backgroundColor: "#ffffff",
          padding: "28px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
        });

        function addText(tag, text, customStyle = {}) {
          const el = document.createElement(tag);
          el.textContent = text;
          Object.assign(el.style, customStyle);
          container.appendChild(el);
        }

        function addImageSection(src, altText, captionText) {
          const figure = document.createElement("figure");
          Object.assign(figure.style, {
            margin: "24px 0",
            textAlign: "center",
            backgroundColor: "#faf6f0",
            padding: "14px",
            borderRadius: "12px"
          });

          const img = document.createElement("img");
          img.src = src;
          img.alt = altText;
          Object.assign(img.style, {
            width: "100%",
            maxHeight: "420px",
            objectFit: "cover",
            borderRadius: "8px",
            display: "block"
          });

          const caption = document.createElement("figcaption");
          caption.textContent = captionText;
          Object.assign(caption.style, {
            marginTop: "10px",
            fontSize: "0.9rem",
            color: "#6e5a4f",
            fontStyle: "italic"
          });

          figure.appendChild(img);
          figure.appendChild(caption);
          container.appendChild(figure);
        }

        // Header Artikel
        addText("h1", "Mengenal Cheesecuit: Harmoni Biskuit dan Krim Keju Lumer", {
          fontSize: "1.8rem",
          color: "#8c5319",
          marginBottom: "8px",
          lineHeight: "1.3"
        });

        addText("p", "Kategori: Kuliner & Katalog Dessert Box", {
          fontSize: "0.85rem",
          color: "#998a7e",
          marginBottom: "24px"
        });

        addText("p", "Cheesecuit (Cheese Biscuit) adalah hidangan penutup favorit yang memadukan gurihnya krim keju lembut dengan tekstur biskuit manis berlapis dalam kemasan dessert box praktis.");

        // Bagian 1: Memanggil foto regal.webp dari GitHub
        addText("h2", "1. Pesona Klasik Varian Biskuit Regal", { color: "#a66321", marginTop: "28px", fontSize: "1.35rem" });
        addImageSection(
          "/regal.webp",
          "Cheesecuit dengan topping biskuit Regal utuh dan keju parut",
          "Varian Cheesecuit kotak bening dengan lapisan remahan biskuit, krim keju tebal, parutan keju cheddar, dan satu keping biskuit Regal utuh."
        );
        addText("p", "Tampilan berlapis pada wadah kotak memperlihatkan perpaduan remahan biskuit Regal cokelat keemasan dan krim keju putih gading, lengkap dengan mahkota biskuit Regal utuh dan parutan keju di atasnya.");

        // Bagian 2: Memanggil foto cheese.jpg dari GitHub
        addText("h2", "2. Kemewahan Varian Full Cheese", { color: "#a66321", marginTop: "28px", fontSize: "1.35rem" });
        addImageSection(
          "/cheese.jpg",
          "Cheesecuit wadah persegi panjang dengan parutan keju melimpah",
          "Sajian Cheesecuit persegi panjang dengan permukaan atas yang tertutup penuh oleh parutan keju keemasan."
        );
        addText("p", "Bagi pecinta keju sejati, varian wadah panjang dengan taburan keju parut melimpah di bagian atas menawarkan sensasi gurih yang lebih intens, diseimbangkan oleh dua lapis remahan biskuit di bagian tengah dan dasar.");

        // Bagian 3: Memanggil foto sendok.jpg dari GitHub
        addText("h2", "3. Tekstur Lembut di Setiap Suapan", { color: "#a66321", marginTop: "28px", fontSize: "1.35rem" });
        addImageSection(
          "/sendok.jpg",
          "Sendokan Cheesecuit memperlihatkan lapisan biskuit utuh di dalam krim",
          "Detail bagian dalam Cheesecuit saat disendok: kepingan biskuit yang menyatu lembut dengan krim keju dan taburan crumble di atasnya."
        );
        addText("p", "Saat sendok pertama diangkat, kepingan biskuit di dalamnya telah menyerap kelembapan krim keju sehingga melunak menyerupai tekstur kue bolu yang lembut, berpadu dengan taburan crumble renyah di permukaan atasnya.");

        // Bagian 4: Katalog Harga & Tombol WA
        addText("h2", "Daftar Harga & Pemesanan", {
          color: "#8c5319",
          marginTop: "40px",
          borderTop: "2px solid #f0e6dc",
          paddingTop: "24px",
          fontSize: "1.4rem"
        });

        const menuItems = [
          {
            nama: "Cheesecuit Marie Regal (Box Regular)",
            deskripsi: "Lapisan crumble Regal, krim keju spesial, parutan cheddar, dan topping biskuit Regal utuh.",
            harga: "Rp 35.000",
            pesanWA: "Halo, saya ingin memesan Cheesecuit Marie Regal (Box Regular) seharga Rp 35.000."
          },
          {
            nama: "Cheesecuit Full Cheese (Long Box Premium)",
            deskripsi: "Ukuran lebih puas dalam wadah panjang dengan ekstra limpahan keju parut penuh di bagian atas.",
            harga: "Rp 45.000",
            pesanWA: "Halo, saya ingin memesan Cheesecuit Full Cheese (Long Box Premium) seharga Rp 45.000."
          },
          {
            nama: "Paket Bundling Hemat (1 Regal + 1 Full Cheese)",
            deskripsi: "Cocok untuk dinikmati bersama keluarga atau teman minum kopi di sore hari.",
            harga: "Rp 75.000",
            pesanWA: "Halo, saya ingin memesan Paket Bundling Hemat Cheesecuit seharga Rp 75.000."
          }
        ];

        menuItems.forEach(function (item) {
          const card = document.createElement("div");
          Object.assign(card.style, {
            border: "1px solid #e6d7c3",
            backgroundColor: "#fffdf9",
            borderRadius: "12px",
            padding: "18px",
            marginBottom: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          });

          const titleRow = document.createElement("div");
          Object.assign(titleRow.style, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px"
          });

          const itemTitle = document.createElement("strong");
          itemTitle.textContent = item.nama;
          Object.assign(itemTitle.style, { fontSize: "1.1rem", color: "#4a3525" });

          const itemPrice = document.createElement("span");
          itemPrice.textContent = item.harga;
          Object.assign(itemPrice.style, {
            backgroundColor: "#fff0db",
            color: "#b35900",
            fontWeight: "bold",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "0.95rem"
          });

          titleRow.appendChild(itemTitle);
          titleRow.appendChild(itemPrice);

          const itemDesc = document.createElement("p");
          itemDesc.textContent = item.deskripsi;
          Object.assign(itemDesc.style, { margin: "4px 0 10px 0", color: "#6e5a4f", fontSize: "0.95rem" });

          const waButton = document.createElement("a");
          waButton.href = "https://wa.me/${nomorWA}?text=" + encodeURIComponent(item.pesanWA);
          waButton.target = "_blank";
          waButton.textContent = "💬 Pesan Sekarang via WhatsApp";
          Object.assign(waButton.style, {
            display: "inline-block",
            backgroundColor: "#25D366",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px 16px",
            borderRadius: "8px",
            alignSelf: "flex-start",
            fontSize: "0.95rem"
          });

          card.appendChild(titleRow);
          card.appendChild(itemDesc);
          card.appendChild(waButton);
          container.appendChild(card);
        });

        document.body.appendChild(container);
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderBlog);
      } else {
        renderBlog();
      }
    `;

    // Membuat kerangka dokumen secara otomatis di sisi server agar browser HP langsung merender body tanpa blank putih
    const stream = "<!DOCTYPE html><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><body><script>" + appScript + "</script></body>";

    return new Response(stream, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
