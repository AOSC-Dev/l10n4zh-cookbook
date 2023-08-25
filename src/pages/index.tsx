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
          <Link className="button button--secondary button--lg" to="/docs/intro">
            项目贡献
          </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="本站点目前处于起草阶段">
      <HeroBanner />
      <div className={styles.MaintainerListTitle}>维护单位</div>
      <main>
        <MaintainerList />
      </main>
    </Layout>
  );
}
