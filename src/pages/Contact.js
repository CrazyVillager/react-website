import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 実際のアプリケーションでは、ここでAPIリクエストを送信します
    console.log('送信されたデータ:', formData);
    
    // フォーム送信成功のシミュレーション
    setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // 数秒後にステータスメッセージをクリア
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>お問い合わせ</h1>
          <p>お気軽にご連絡ください</p>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>お問い合わせ方法</h2>
              
              <div className="contact-item">
                <div className="icon"><i className="icon-location"></i></div>
                <div className="text">
                  <h3>住所</h3>
                  <p>東京都新宿区1-1-1</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon"><i className="icon-phone"></i></div>
                <div className="text">
                  <h3>電話番号</h3>
                  <p>03-1234-5678</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon"><i className="icon-mail"></i></div>
                <div className="text">
                  <h3>メールアドレス</h3>
                  <p>info@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon"><i className="icon-clock"></i></div>
                <div className="text">
                  <h3>営業時間</h3>
                  <p>平日 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>メッセージを送る</h2>
              
              {formStatus === 'success' && (
                <div className="form-success-message">
                  お問い合わせを受け付けました。担当者より連絡いたします。
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">お名前 <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">件名 <span className="required">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">メッセージ <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">送信する</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

