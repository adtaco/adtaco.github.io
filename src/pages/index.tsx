import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section className="bg-orange-500 text-white text-center py-20">
          <div className="container px-6 mx-auto">
            <h1 className="font-brand text-8xl mb-2">{siteConfig.title}</h1>
            <p className="text-xl mb-8">{siteConfig.tagline}</p>
            <div className="flex justify-center items-center">
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Get Started - 5min ⏱️
              </Link>
            </div>
          </div>
        </section>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
