import React from "react";


const About = () => (
  <section className="about">
    <h2>Hakkımızda</h2>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
      <div>
        <h3>ShopCat Kimdir?</h3>
        <p>
          ShopCat, 2023 yılında İstanbul’da kurulmuş, evcil hayvan sahiplerine kaliteli ürünleri uygun fiyatlarla sunmayı amaçlayan bir e-ticaret platformudur.
        </p>
        <h3>Vizyonumuz</h3>
        <p>
          Türkiye’de ve dünyada evcil hayvanların yaşam kalitesini artırmak, sahiplerine güvenli ve hızlı alışveriş deneyimi sunmak.
        </p>
        <h3>Misyonumuz</h3>
        <p>
          Müşteri memnuniyetini ve hayvan dostlarımızın mutluluğunu ön planda tutarak, yenilikçi ve sürdürülebilir çözümlerle sektöre değer katmak.
        </p>
      </div>
      <div>
        <h3>Neden ShopCat?</h3>
        <ul>
          <li>Geniş ürün yelpazesi: Kedi, köpek, kuş, balık, tavşan, at ve civciv için binlerce ürün</li>
          <li>Hızlı ve güvenli teslimat</li>
          <li>7/24 müşteri desteği</li>
          <li>İstanbul içi 2500 TL üzeri alışverişlerde ücretsiz kargo</li>
          <li>Güvenli ödeme altyapısı</li>
          <li>Doğaya ve hayvan haklarına saygılı yaklaşım</li>
        </ul>
        <h3>İletişim</h3>
        <p>
          Bize <a href="mailto:info@shopcat.com.tr">info@shopcat.com.tr</a> adresinden ulaşabilirsiniz.<br/>
          Sosyal medya: @shopcattr
        </p>
      </div>
    </div>
  </section>
);

export default About;
