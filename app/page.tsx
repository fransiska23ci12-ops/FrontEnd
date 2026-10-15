"use client";

import { useState } from "react";

const menuItems = [
  {
    nama: "Kopi Susu Senja",
    jenis: "Favorit",
    harga: "Rp18.000",
    deskripsi:
      "Perpaduan kopi, susu, dan rasa manis yang lembut untuk menemani waktu santai.",
    ikon: "☕",
    warna: "",
  },
  {
    nama: "V60 Gayo",
    jenis: "Single Origin",
    harga: "Rp25.000",
    deskripsi:
      "Kopi Arabika Gayo dengan karakter aroma yang khas dan rasa yang seimbang.",
    ikon: "V60",
    warna: "menu-card-green",
  },
  {
    nama: "Cokelat Rumah",
    jenis: "Non Coffee",
    harga: "Rp20.000",
    deskripsi:
      "Minuman cokelat lembut dengan rasa manis yang cocok untuk semua suasana.",
    ikon: "🍫",
    warna: "menu-card-gold",
  },
];

const faqItems = [
  {
    tanya: "Apa itu Kopi Nusantara?",
    jawab:
      "Kopi Nusantara adalah konsep kedai kopi yang menghadirkan minuman dengan inspirasi dari berbagai kopi dan cita rasa Indonesia.",
  },
  {
    tanya: "Apa saja menu yang tersedia?",
    jawab:
      "Beberapa menu yang tersedia adalah Kopi Susu Senja, V60 Gayo, dan Cokelat Rumah.",
  },
  {
    tanya: "Dari mana kopi yang digunakan?",
    jawab:
      "Kopi yang digunakan terinspirasi dari berbagai daerah penghasil kopi di Indonesia.",
  },
  {
    tanya: "Apakah tersedia minuman non-kopi?",
    jawab:
      "Ya. Salah satu pilihan minuman non-kopi adalah Cokelat Rumah.",
  },
];

const perjalanan = [
  {
    nomor: "01",
    judul: "Dipilih",
    deskripsi: "Biji kopi dipilih dari berbagai daerah Indonesia.",
  },
  {
    nomor: "02",
    judul: "Diolah",
    deskripsi: "Biji kopi diproses untuk menghasilkan karakter terbaik.",
  },
  {
    nomor: "03",
    judul: "Disangrai",
    deskripsi:
      "Proses sangrai dilakukan untuk menghasilkan aroma dan rasa.",
  },
  {
    nomor: "04",
    judul: "Diseduh",
    deskripsi:
      "Kopi diseduh dengan metode yang sesuai hingga siap dinikmati.",
  },
];

export default function Home() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [likedItems, setLikedItems] = useState([false, false, false]);
  const [faqTerbuka, setFaqTerbuka] = useState<number | null>(null);
  const tahun = 2026;

  function toggleLike(index: number) {
    const sudahDisukai = likedItems[index];

    setLikes((sebelumnya) =>
      sebelumnya.map((jumlah, i) =>
        i === index ? jumlah + (sudahDisukai ? -1 : 1) : jumlah
      )
    );

    setLikedItems((sebelumnya) =>
      sebelumnya.map((status, i) => (i === index ? !status : status))
    );
  }

  return (
    <>
      <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a
              href="#home"
              className="navbar-brand brand d-flex align-items-center gap-2"
            >
              <span className="brand-mark">K</span>
              Kopi Nusantara
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Buka menu"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item">
                  <a href="#home" className="nav-link">Beranda</a>
                </li>
                <li className="nav-item">
                  <a href="#menu" className="nav-link">Menu</a>
                </li>
                <li className="nav-item">
                  <a href="#story" className="nav-link">Cerita</a>
                </li>
                <li className="nav-item">
                  <a href="#faq" className="nav-link">FAQ</a>
                </li>
                <li className="nav-item ms-lg-2">
                  <a href="#order" className="nav-link nav-cta">Pesan</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero py-5" id="home">
          <div className="container py-lg-5">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6 hero-copy">
                <p className="eyebrow mb-2">Kopi Nusantara</p>

                <h1 className="mb-3">
                  Rasa Lokal,
                  <em> Cerita Istimewa.</em>
                </h1>

                <p className="hero-intro mb-4">
                  Menikmati kopi Indonesia dengan cita rasa khas
                  dari berbagai daerah Nusantara.
                </p>

                <div className="d-flex flex-wrap align-items-center gap-3">
                  <a href="#menu" className="button button-primary">
                    Lihat Menu <span>→</span>
                  </a>
                  <a href="#story" className="button button-text">
                    Cerita Kami
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <div className="hero-image shadow-sm">
                  <div className="coffee-scene">
                    <div className="bubble bubble-one">Nikmat!</div>
                    <div className="bubble bubble-two">Kopi Indonesia</div>
                    <div className="steam steam-satu" />
                    <div className="steam steam-dua" />
                    <div className="coffee-disc">KOPI</div>
                  </div>

                  <div className="cup-caption">
                    <strong>KOPI NUSANTARA</strong>
                    <span>RASA DARI INDONESIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="menu-section py-5" id="menu">
          <div className="container py-4">
            <div className="text-center mb-5">
              <p className="eyebrow mb-2">Pilihan Kami</p>
              <h2 className="mb-3">Menu Kopi Nusantara</h2>
              <p className="section-description mx-auto mb-0">
                Pilihan minuman dengan bahan dan cita rasa
                yang terinspirasi dari kekayaan Indonesia.
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              {menuItems.map((menu, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={menu.nama}>
                  <article
                    className={`card menu-card ${menu.warna} h-100 rounded-0 shadow-sm`}
                  >
                    <div className="card-body d-flex flex-column p-4">
                      <div
                        className={`menu-icon mb-3 ${
                          menu.ikon === "V60" ? "icon-v60" : ""
                        }`}
                      >
                        {menu.ikon}
                      </div>

                      <p className="menu-type mb-2">{menu.jenis}</p>
                      <h3 className="card-title mb-2">{menu.nama}</h3>
                      <p className="card-text flex-grow-1">
                        {menu.deskripsi}
                      </p>

                      <div className="menu-bottom d-flex justify-content-between align-items-center mt-3 pt-3">
                        <strong>{menu.harga}</strong>

                        <button
                          className={`like-button ${
                            likedItems[index] ? "liked" : ""
                          }`}
                          type="button"
                          aria-pressed={likedItems[index]}
                          onClick={() => toggleLike(index)}
                        >
                          {likedItems[index] ? "♥ Disukai" : "♡ Suka"}{" "}
                          <span className="like-count">{likes[index]}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section py-5" id="story">
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-4 d-flex justify-content-center">
                <div className="story-badge shadow">
                  <strong>100%</strong>
                  <span>
                    Inspirasi<br />Nusantara
                  </span>
                  <small>KOPI INDONESIA</small>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <p className="eyebrow mb-2">Cerita Kami</p>
                <h2 className="mb-3">
                  Dari Nusantara ke dalam secangkir kopi.
                </h2>
                <p className="mb-3">
                  Kopi Nusantara hadir untuk memperkenalkan kekayaan
                  kopi Indonesia melalui minuman yang sederhana dan
                  dekat dengan keseharian.
                </p>
                <p className="mb-0">
                  Setiap kopi membawa cerita mengenai daerah, petani,
                  proses pengolahan, dan perjalanan hingga akhirnya
                  sampai ke dalam cangkir.
                </p>
              </div>
            </div>

            <div className="journey border-top mt-5 pt-5">
              <div className="text-center mb-5">
                <p className="eyebrow mb-2">Perjalanan</p>
                <h2 className="mb-0">Dari biji hingga menjadi kopi.</h2>
              </div>

              <div className="row g-4 text-center">
                {perjalanan.map((item) => (
                  <div
                    className="col-12 col-md-6 col-lg-3"
                    key={item.nomor}
                  >
                    <div className="journey-item">
                      <div className="journey-year mx-auto">
                        {item.nomor}
                      </div>
                      <h3>{item.judul}</h3>
                      <p>{item.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section py-5" id="faq">
          <div className="container py-4">
            <div className="text-center mb-5">
              <p className="eyebrow mb-2">FAQ</p>
              <h2 className="mb-3">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="section-description mx-auto mb-0">
                Temukan jawaban dari pertanyaan yang sering ditanyakan
                mengenai Kopi Nusantara.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="accordion accordion-flush" id="faqAccordion">
                  {faqItems.map((faq, index) => (
                    <div className="accordion-item faq-item" key={faq.tanya}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            faqTerbuka === index ? "" : "collapsed"
                          }`}
                          type="button"
                          aria-expanded={faqTerbuka === index}
                          onClick={() =>
                            setFaqTerbuka(
                              faqTerbuka === index ? null : index
                            )
                          }
                        >
                          {faq.tanya}
                        </button>
                      </h2>

                      <div
                        className={`accordion-collapse collapse ${
                          faqTerbuka === index ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          <p className="mb-0">{faq.jawab}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="order-section py-5" id="order">
          <div className="container py-4">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
              <div>
                <p className="eyebrow mb-2">Siap Menikmati?</p>
                <h2 className="mb-0">Temukan kopi favoritmu.</h2>
              </div>

              <a href="#menu" className="button button-light">
                Lihat Menu <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer py-4">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-5">
              <strong className="footer-brand">Kopi Nusantara</strong>
              <p className="mb-0">Rasa lokal, cerita istimewa.</p>
            </div>

            <div className="col-12 col-md-4">
              <div className="footer-contact d-flex flex-column">
                <span>Indonesia</span>
                <span>Kopi dari Nusantara</span>
              </div>
            </div>

            <div className="col-12 col-md-3 text-md-end">
              <div className="copyright">
                © {tahun} Kopi Nusantara
              </div>
            </div>
          </div>
        </div>
           </footer>

      <section className="student-identity" id="identitas">
        <div className="student-identity-card">
          <p className="student-label">IDENTITAS MAHASISWA</p>

          <h2>Proyek Website Kopi Nusantara</h2>

          <div className="student-detail">
            <span>Nama Lengkap</span>
            <strong>Fransiska</strong>
          </div>

          <div className="student-detail">
            <span>NIM</span>
            <strong>535250037</strong>
          </div>

          <div className="student-detail">
            <span>Mata Kuliah</span>
            <strong>Instalasi Next.js</strong>
          </div>
        </div>
      </section>
    </>
  );
}