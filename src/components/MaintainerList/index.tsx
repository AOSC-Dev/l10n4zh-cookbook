import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type MaintainerItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  url: string;
  description: JSX.Element;
};

const Maintainer_List: MaintainerItem[] = [
  {
    title: '安同开源社区 (AOSC)',
    Svg: require('@site/static/img/aosc.svg').default,
    url: 'https://aosc.io',
    description: (
      <>   
      安同开源社区 (AOSC) 是一个以“完全自愿”为原则而运转的社区，
      社区成员们共同维护与发展着名为“AOSC OS”的一款通用 Linux 发行版。
      </>
    ),
  }
];

function Maintainer({title, Svg, url, description}: MaintainerItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.maintainerSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default function MaintainerList(): JSX.Element {
  return (
    <section className={styles.maintainers}>
      <div className="container">
        <div className="row">
          {Maintainer_List.map((props, idx) => (
            <Maintainer key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
