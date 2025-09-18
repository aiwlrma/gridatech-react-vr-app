import React from 'react';
import './MedicalDashboard.css';

const MedicalDashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <h1 className="title">근육주사(IM Injection)</h1>
        <div className="chart-icon">📊</div>
      </div>

      {/* Procedure Accuracy Section */}
      <div className="section">
        <h2 className="section-title">수행절차 정확도</h2>
        <div className="accuracy-items">
          <div className="accuracy-item">
            <span className="item-label">손위생 수행 여부</span>
            <div className="status completed">
              <span className="checkmark">✓</span>
              <span>완료</span>
            </div>
          </div>
          <div className="accuracy-item">
            <span className="item-label">환자 확인</span>
            <div className="status inadequate">
              <span className="x-mark">✗</span>
              <span>미흡</span>
            </div>
          </div>
          <div className="accuracy-item">
            <span className="item-label">무균술 유지</span>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '70%'}}></div>
              </div>
              <span className="progress-text">70%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nursing Skill Analysis Section */}
      <div className="section">
        <h2 className="section-title">간호 스킬 분석</h2>
        <div className="skill-items">
          <div className="skill-item">
            <span className="item-label">주사 각도</span>
            <div className="skill-detail">
              <span className="accuracy-text">정확도 (78%)</span>
              <div className="progress-bar">
                <div className="progress-fill purple" style={{width: '78%'}}></div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span className="item-label">주사 깊이</span>
            <div className="skill-detail">
              <span className="accuracy-text">정확도 (82%)</span>
              <div className="progress-bar">
                <div className="progress-fill purple" style={{width: '82%'}}></div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span className="item-label">주사 부위 선택</span>
            <div className="status-dot appropriate">●</div>
            <span className="status-text">적절</span>
          </div>
          <div className="skill-item">
            <span className="item-label">약물 투여 속도</span>
            <div className="status-dot appropriate">●</div>
            <span className="status-text">적절</span>
          </div>
          <div className="skill-item">
            <span className="item-label">폐기물 처리</span>
            <div className="status-dot inadequate">●</div>
            <span className="status-text">미흡</span>
          </div>
        </div>
      </div>

      {/* Communication Competency Assessment Section */}
      <div className="section">
        <h2 className="section-title">의사소통역량 평가</h2>
        <div className="communication-items">
          <div className="communication-item">
            <span className="item-label">환자 설명 및 동의</span>
            <div className="status completed">
              <span className="checkmark">✓</span>
            </div>
          </div>
          <div className="communication-item">
            <span className="item-label">사생활 보호</span>
            <div className="status completed">
              <span className="checkmark">✓</span>
            </div>
          </div>
          <div className="communication-item">
            <span className="item-label">환자 교육</span>
            <div className="status completed">
              <span className="checkmark">✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Evaluation Section */}
      <div className="section overall-section">
        <h2 className="section-title">종합 평가</h2>
        <div className="overall-content">
          <div className="donut-chart">
            <div className="donut-outer">
              <div className="donut-inner">
                <div className="grade">A</div>
                <div className="score">80점</div>
              </div>
            </div>
          </div>
          <div className="evaluation-details">
            <div className="detail-item">
              <div className="detail-dot purple">●</div>
              <span className="detail-label">단계별 수행률</span>
              <span className="detail-value">50%</span>
            </div>
            <div className="detail-item">
              <div className="detail-dot yellow">●</div>
              <span className="detail-label">오류 건수</span>
              <span className="detail-value">4개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDashboard;
