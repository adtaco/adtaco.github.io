import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomePageHeroBanner from '@site/src/components/Homepage/HeroBanner';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section className="bg-orange-500 text-white text-center py-24">
          <div className="container max-w-screen-2xl px-6 mx-auto">
            <img
              src={require('@site/static/img/logo.png').default}
              alt="Adtaco Logo"
              className="inline-block hidden w-32"
            />
            <h1 className="font-brand text-8xl mb-2">{siteConfig.title}</h1>
            <p className="text-xl mb-8">{siteConfig.tagline}</p>
            <div className="flex justify-center items-center">
              <Link
                className="button button--secondary button--lg"
                to="/blog"
              >
                Read recent posts ⏱️
              </Link>
            </div>
          </div>
        </section>

        <HomePageHeroBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
