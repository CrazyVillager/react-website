import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-content">
          <h1>最新のReactテクノロジーを<br />Debian環境で</h1>
          <p>安定性と最新技術の融合。あなたのビジネスに最適なWebソリューションを提供します。</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">お問い合わせ</Link>
            <Link to="/about" className="btn btn-secondary">詳細を見る</Link>
          </div>
        </div>
      </section>
      
      {/* 特徴セクション */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">主な機能</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="icon-speed"></i></div>
              <h3>高速パフォーマンス</h3>
              <p>最適化されたReactコンポーネントとDebianのパフォーマンスで高速なウェブ体験を提供します。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="icon-responsive"></i></div>
              <h3>レスポンシブデザイン</h3>
              <p>あらゆるデバイスサイズに適応する柔軟なレイアウトでユーザー体験を向上させます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="icon-secure"></i></div>
              <h3>高セキュリティ</h3>
              <p>Debianの安定性とReactの最新セキュリティ対策で、安全なウェブサイトを構築します。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* サービスセクション */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">提供サービス</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>ウェブサイト開発</h3>
              <p>最新のReactテクノロジーを使用した高性能なウェブサイトを開発します。</p>
            </div>
            <div className="service-item">
              <h3>Eコマースソリューション</h3>
              <p>オンラインショップやEコマースプラットフォームの構築と運用をサポートします。</p>
            </div>
            <div className="service-item">
              <h3>PWA開発</h3>
              <p>インストール可能なプログレッシブウェブアプリを開発し、オフライン機能も提供します。</p>
            </div>
            <div className="service-item">
              <h3>技術コンサルティング</h3>
              <p>最適なテクノロジースタックの選定や技術的なアドバイスを提供します。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="cta">
        <div className="container">
          <h2>プロジェクトを始めましょう</h2>
          <p>あなたのビジネスに最適なウェブソリューションを一緒に構築しましょう。</p>
          <Link to="/contact" className="btn btn-primary">無料相談を予約する</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

