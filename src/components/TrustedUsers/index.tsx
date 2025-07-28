import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import config from './languages.json';
import row1 from './row1.json';
import row2 from './row2.json';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import styles from './styles.module.css';
import RightArrowIcon from '@site/static/icons/arrow-right.svg';
import { useTranslation } from '@site/src/hooks/useTranslation';
import SectionTitle from "@site/src/components/SectionTitle";

export default function TrustedUsers() {
  const { t, language } = useTranslation(config);

  const { colorMode } = useColorMode();

  const gradientColor = colorMode === 'dark' ? '#1f1f1c' : '#fff';

  return (
    <BrowserOnly>
      {() => (
        <section className={styles['trusted-users']}>
          <SectionTitle title={t.users.title}/>
          <div data-aos="slide-left">
            <Marquee
              direction="left"
              speed={30}
              pauseOnHover
              gradient
              gradientWidth="10%"
              gradientColor={gradientColor}
              className={styles['carousel-container']}
              style={{ marginTop: 40 }}
            >
              {row1.map((img, i) => (
                <div className={styles['swiper-item']}>
                  <img
                    src={
                      colorMode === 'dark'
                        ? useBaseUrl('/home/user/dark/' + img.imgUrl)
                        : useBaseUrl('/home/user/light/' + img.imgUrl)
                    }
                    alt={img.imgUrl}
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div data-aos="slide-right">
            <Marquee
              direction="right"
              speed={30}
              gradient
              gradientWidth="10%"
              gradientColor={gradientColor}
              pauseOnHover
              className={styles['carousel-container']}
              style={{ marginTop: 16 }}
            >
              {row2.map((img, i) => (
                <div className={styles['swiper-item']}>
                  <img
                    src={
                      colorMode === 'dark'
                        ? useBaseUrl('/home/user/dark/' + img.imgUrl)
                        : useBaseUrl('/home/user/light/' + img.imgUrl)
                    }
                    alt={img.imgUrl}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className={styles['more-link']}>
            <a
              href={language === 'zh-CN' ? '/zh-CN/user' : '/user'}
              className={styles['more-link-btn']}
            >
              {t.users.more}
              <RightArrowIcon className={styles['more-link-icon']} />
            </a>
          </div>
        </section>
      )}
    </BrowserOnly>
  );
}
