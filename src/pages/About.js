import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>会社概要</h1>
          <p>私たちのビジョンと使命について</p>
        </div>
      </section>
      
      <section className="company-info">
        <div className="container">
          <div className="company-content">
            <div className="company-text">
              <h2>私たちについて</h2>
              <p>ReactWebsiteは、2020年に設立されたウェブ開発会社です。最新のReactテクノロジーとDebianの安定性を組み合わせた革新的なウェブソリューションを提供しています。</p>
              <p>私たちのチームは、フロントエンド開発、バックエンド開発、UI/UXデザインのスペシャリストで構成されており、クライアントのビジネス目標を達成するための最適なソリューションを提供しています。</p>
              
              <h3>私たちのミッション</h3>
              <p>高品質で信頼性の高いウェブソリューションを提供し、クライアントのビジネス成長をサポートすることです。</p>
              
              <h3>私たちのビジョン</h3>
              <p>テクノロジーの力を活用して、ビジネスとユーザーをつなぐ革新的なデジタル体験を創造します。</p>
            </div>
            <div className="company-image">
              <img src="/images/about-us.jpg" alt="私たちのチーム" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="team">
        <div className="container">
          <h2 className="section-title">私たちのチーム</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team-1.jpg" alt="山田太郎" />
              </div>
              <h3>山田 太郎</h3>
              <p className="position">CEOおよび創設者</p>
              <p>10年以上のウェブ開発経験を持ち、多くの大規模プロジェクトを成功に導いてきました。</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team-2.jpg" alt="佐藤花子" />
              </div>
              <h3>佐藤 花子</h3>
              <p className="position">リードデザイナー</p>
              <p>ユーザー中心設計と視覚的に魅力的なインターフェースの作成の専門家です。</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team-3.jpg" alt="鈴木一郎" />
              </div>
              <h3>鈴木 一郎</h3>
              <p className="position">シニア開発者</p>
              <p>Reactとモダンフロントエンド開発に特化したエキスパートです。</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/images/team-4.jpg" alt="高橋美智子" />
              </div>
              <h3>高橋 美智子</h3>
              <p className="position">プロジェクトマネージャー</p>
              <p>効率的なプロジェクト管理と顧客満足度の向上に焦点を当てています。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

