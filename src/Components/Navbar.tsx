const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <a href="#">☰ Tümü</a>
        </li>
        <li>
          <a href="#">Çok Satanlar</a>
        </li>
        <li>
          <a href="#">Okula ve Şehre Dönüş</a>
        </li>
        <li>
          <a href="#">Yeni Çıkanlar</a>
        </li>
        <li>
          <a href="#">Prime</a>
        </li>
        <li>
          <a href="#">Kitap</a>
        </li>
        <li>
          <a href="#">Elektronik</a>
        </li>
        <li>
          <a href="#">Bilgisayar</a>
        </li>
        <li>
          <a href="#">Moda</a>
        </li>
        <li>
          <a href="#">Oyuncaklar ve Oyunlar</a>
        </li>
        <li>
          <a href="#">Yapı Market</a>
        </li>
      </ul>

      <div className="navbar-banner">
        <span> % Günlük ihtiyaçlarda sepette %15 indirim % </span>
      </div>
    </nav>
  );
};

export default Navbar;
