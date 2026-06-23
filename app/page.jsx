import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

const ChineseDailyWords = () => {
  const [todayWords, setTodayWords] = useState([]);

  // Comprehensive vocabulary library - everyday business and travel words
  const wordLibrary = [
    // Greetings & Courtesy
    { chinese: '你好', pinyin: 'nǐ hǎo', english: 'Hello', category: 'greeting' },
    { chinese: '谢谢', pinyin: 'xièxie', english: 'Thank you', category: 'courtesy' },
    { chinese: '请', pinyin: 'qǐng', english: 'Please', category: 'courtesy' },
    { chinese: '对不起', pinyin: 'duìbù qǐ', english: 'Sorry / Excuse me', category: 'courtesy' },
    { chinese: '再见', pinyin: 'zàijiàn', english: 'Goodbye', category: 'greeting' },

    // Work & Business
    { chinese: '会议', pinyin: 'huìyì', english: 'Meeting', category: 'work' },
    { chinese: '合作', pinyin: 'hézuò', english: 'Cooperation / Partnership', category: 'work' },
    { chinese: '项目', pinyin: 'xiàngmù', english: 'Project', category: 'work' },
    { chinese: '截止日期', pinyin: 'jiēzhǐ rìqī', english: 'Deadline', category: 'work' },
    { chinese: '报告', pinyin: 'bàogào', english: 'Report / Presentation', category: 'work' },
    { chinese: '同意', pinyin: 'tóngyì', english: 'Agree / Approval', category: 'work' },
    { chinese: '不同意', pinyin: 'bù tóngyì', english: 'Disagree', category: 'work' },
    { chinese: '计划', pinyin: 'jìhuà', english: 'Plan', category: 'work' },
    { chinese: '预算', pinyin: 'yùsuàn', english: 'Budget', category: 'work' },
    { chinese: '客户', pinyin: 'kèhù', english: 'Client / Customer', category: 'work' },

    // Numbers & Time
    { chinese: '今天', pinyin: 'jīntiān', english: 'Today', category: 'time' },
    { chinese: '明天', pinyin: 'míngtiān', english: 'Tomorrow', category: 'time' },
    { chinese: '昨天', pinyin: 'zuótiān', english: 'Yesterday', category: 'time' },
    { chinese: '现在', pinyin: 'xiànzài', english: 'Now', category: 'time' },
    { chinese: '几点', pinyin: 'jǐ diǎn', english: 'What time', category: 'time' },

    // Common Phrases
    { chinese: '我叫...', pinyin: 'wǒ jiào...', english: 'My name is...', category: 'intro' },
    { chinese: '你呢', pinyin: 'nǐ ne', english: 'How about you?', category: 'conversation' },
    { chinese: '很高兴认识你', pinyin: 'hěn gāoxìng rènshi nǐ', english: 'Nice to meet you', category: 'greeting' },
    { chinese: '不太明白', pinyin: 'bú tài míngbai', english: 'I don\'t quite understand', category: 'conversation' },
    { chinese: '可以吗', pinyin: 'kěyǐ ma', english: 'Is it okay? / Can I?', category: 'conversation' },

    // Food & Dining
    { chinese: '吃饭', pinyin: 'chīfàn', english: 'Eat / Have a meal', category: 'food' },
    { chinese: '水', pinyin: 'shuǐ', english: 'Water', category: 'food' },
    { chinese: '茶', pinyin: 'chá', english: 'Tea', category: 'food' },
    { chinese: '咖啡', pinyin: 'kāfēi', english: 'Coffee', category: 'food' },
    { chinese: '饭店', pinyin: 'fàndiàn', english: 'Restaurant', category: 'food' },

    // Travel & Directions
    { chinese: '火车站', pinyin: 'huǒchē zhàn', english: 'Train station', category: 'travel' },
    { chinese: '机场', pinyin: 'jīchǎng', english: 'Airport', category: 'travel' },
    { chinese: '酒店', pinyin: 'jiǔdiàn', english: 'Hotel', category: 'travel' },
    { chinese: '地图', pinyin: 'dìtú', english: 'Map', category: 'travel' },
    { chinese: '哪里', pinyin: 'nǎli', english: 'Where', category: 'travel' },
    { chinese: '左', pinyin: 'zuǒ', english: 'Left', category: 'travel' },
    { chinese: '右', pinyin: 'yòu', english: 'Right', category: 'travel' },

    // Questions & Useful
    { chinese: '多少钱', pinyin: 'duōshao qián', english: 'How much?', category: 'useful' },
    { chinese: '是', pinyin: 'shì', english: 'Yes / Is', category: 'useful' },
    { chinese: '不是', pinyin: 'búshì', english: 'No / Is not', category: 'useful' },
    { chinese: '有', pinyin: 'yǒu', english: 'Have / Has', category: 'useful' },
    { chinese: '没有', pinyin: 'méiyǒu', english: 'Don\'t have', category: 'useful' },
    { chinese: '帮忙', pinyin: 'bāngmáng', english: 'Help / Do me a favor', category: 'useful' },
    { chinese: '没关系', pinyin: 'méi guānxi', english: 'Never mind / It\'s okay', category: 'useful' },
  ];

  // Get today's words based on date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const startIndex = (dayOfYear * 5) % wordLibrary.length;

    const words = [];
    for (let i = 0; i < 5; i++) {
      words.push(wordLibrary[(startIndex + i) % wordLibrary.length]);
    }
    setTodayWords(words);
  }, []);

  // Text-to-speech function
  const playAudio = (pinyin, chinese) => {
    const utterance = new SpeechSynthesisUtterance(chinese);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: 'white'
        }}>
          <h1 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>
            今日单词
          </h1>
          <p style={{ fontSize: '1.1em', margin: '0', opacity: 0.9 }}>
            Today's Chinese Words
          </p>
          <p style={{ fontSize: '0.9em', margin: '10px 0 0 0', opacity: 0.8 }}>
            {today}
          </p>
        </div>

        {/* Word Cards */}
        <div style={{
          display: 'grid',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {todayWords.map((word, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div>
                  {/* Chinese Characters */}
                  <div style={{
                    fontSize: '2.5em',
                    fontWeight: 'bold',
                    color: '#667eea',
                    marginBottom: '10px',
                    fontFamily: 'serif'
                  }}>
                    {word.chinese}
                  </div>

                  {/* Pinyin */}
                  <div style={{
                    fontSize: '1.3em',
                    color: '#764ba2',
                    marginBottom: '8px',
                    fontStyle: 'italic',
                    letterSpacing: '1px'
                  }}>
                    {word.pinyin}
                  </div>

                  {/* English */}
                  <div style={{
                    fontSize: '1em',
                    color: '#666',
                    fontWeight: '500'
                  }}>
                    {word.english}
                  </div>
                </div>

                {/* Audio Button */}
                <button
                  onClick={() => playAudio(word.pinyin, word.chinese)}
                  style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '24px',
                    transition: 'background 0.2s, transform 0.2s',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#764ba2';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#667eea';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  title="Click to hear pronunciation"
                >
                  <Volume2 size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          color: 'white',
          opacity: 0.9,
          fontSize: '0.9em'
        }}>
          <p>Visit again tomorrow for 5 new words! 📚</p>
          <p>Click the speaker icon to hear the pronunciation</p>
        </div>
      </div>
    </div>
  );
};

export default ChineseDailyWords;
