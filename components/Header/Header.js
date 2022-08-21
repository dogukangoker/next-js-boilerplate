import React from "react";
import styles from "./style.module.scss";
import settings from "../../ayarlar.json";
const Header = () => {
  return (
    <div
      style={{ backgroundColor: `${settings.headerBackgroundColor}` }}
      className={styles.header}
    >
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <div className={styles.menuItems}>
        <ul>
          {settings.headerElements.map((item) => (
            <li key={item.id}>
              <div>{item.name}</div>
              {item.dropdown.length > 0 && (
                <div className={styles.dropdown}>
                  {item.dropdown.map((item2) => (
                    <div key={item2.id}>{item2.name}</div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
