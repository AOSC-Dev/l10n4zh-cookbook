import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MaintainerList from '@site/src/components/MaintainerList';

import styles from './index.module.css';

function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroBannerTitle}>
            {siteConfig.title}
      </div>
      <div className={styles.heroBannerTagline}>
            {siteConfig.tagline}
      </div>
      <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            开始阅读本地化指南 - 封面
          </Link>
          <Link className="button button--secondary button--lg" to="https://repo.aosc.io/aosc-l10n/zh_CN_l10n.pdf">
            阅读 PDF 版本 (1.5.4)
          </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title= "起草阶段"
      description="本站点目前处于起草阶段">
      <HeroBanner />
      <div className={styles.MaintenanceUnitListTitle}>
        维护单位
      </div>
      <div className={styles.Maintainers}>
          <a href='maintainers'>🔗 具体维护人员及联系方式</a>
      </div>
      <main>
        <MaintainerList />
      </main>
    </Layout>
  );
}
