import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'astrology-app';

  zodiacSign: string = '';
  predictionResult: string = '';
  resultText: boolean | undefined;
  resultTexts: any;
  one: boolean | undefined = true;
  sencond: boolean | undefined;

  astro(name: string, dob: string) {
    if (!name || !dob) {
      this.predictionResult = 'Please enter both name and date of birth.';
      this.zodiacSign = '';
      return;
    }

    this.zodiacSign = this.getZodiac(dob);
    this.predictionResult = this.getPrediction(this.zodiacSign);
    this.resultText = true;
    this.resultTexts = this.predictionResult;

    // Browser console (local only)
    console.log('Name:', name);
    console.log('DOB:', dob);
    console.log('Zodiac:', this.zodiacSign);
    console.log('Prediction:', this.predictionResult);

    // ✅ SEND DATA TO SERVER LOG
    fetch('/api/astro-log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        dob: dob,
        zodiac: this.zodiacSign
      })
    });
  }

  getZodiac(dob: string): string {
    const date = new Date(dob);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';

    return 'Unknown';
  }

  getPrediction(zodiac: string): string {
    const predictions: { [key: string]: string } = {
      Aries: 'You are energetic and action-oriented.',
      Taurus: 'Stability and patience bring success.',
      Gemini: 'Communication is your strength today.',
      Cancer: 'Focus on family and emotional clarity.',
      Leo: 'Confidence attracts opportunities.',
      Virgo: 'Attention to detail brings progress.',
      Libra: 'Balance and harmony guide your day.',
      Scorpio: 'Deep focus helps you succeed.',
      Sagittarius: 'Optimism opens new doors.',
      Capricorn: 'Discipline leads to success.',
      Aquarius: 'Innovation and originality shine.',
      Pisces: 'Imagination and sensitivity are strong.'
    };

    return predictions[zodiac] || 'Prediction not available.';
  }

  partner() {
    this.one = false;
    this.sencond = true;
  }

  single() {
    this.one = true;
    this.sencond = false;
  }

astroparter(yourName: string, yourDob: string, partnerName: string, partnerDob: string) {
  if (!yourName || !yourDob || !partnerName || !partnerDob) {
    this.predictionResult = 'Please enter all names and DOBs.';
    this.zodiacSign = '';
    this.resultText = true;
    return;
  }

  const yourZodiac = this.getZodiac(yourDob);
  const partnerZodiac = this.getZodiac(partnerDob);
  this.zodiacSign = `${yourZodiac} ❤️ ${partnerZodiac}`;

  const zodiacElements: { [key: string]: string } = {
    Aries: 'Fire', Leo: 'Fire', Sagittarius: 'Fire',
    Taurus: 'Earth', Virgo: 'Earth', Capricorn: 'Earth',
    Gemini: 'Air', Libra: 'Air', Aquarius: 'Air',
    Cancer: 'Water', Scorpio: 'Water', Pisces: 'Water'
  };

  const yourElement = zodiacElements[yourZodiac];
  const partnerElement = zodiacElements[partnerZodiac];

  // Compatibility messages
  const elementMessages: { [key: string]: { [key: string]: string[] } } = {
    Fire: {
      Fire: ['Very passionate and exciting!', 'Energetic duo, but may clash sometimes.'],
      Air: ['Good match! Air supports Fire.', 'Fun and dynamic, enjoy adventures together.'],
      Earth: ['Needs patience. Earth may feel too slow for Fire.', 'Take your time, learn from each other.'],
      Water: ['Not easy! Water may dampen Fire’s energy.', 'Be careful, could lead to emotional friction.']
    },
    Earth: {
      Fire: ['Challenging, but can work with compromise.', 'Fire may rush, Earth must guide patiently.'],
      Air: ['Moderate match. Communication is key.', 'Work on understanding each other.'],
      Earth: ['Stable and reliable.', 'Very compatible. You feel secure together.'],
      Water: ['Good match! Emotional support is strong.', 'Needs effort, but can grow slowly together.']
    },
    Air: {
      Fire: ['Fun and lively!', 'Exciting connection but may lack stability.'],
      Air: ['Great mental connection.', 'Compatible, but be mindful of commitment.'],
      Earth: ['Moderate, Air may feel restless.', 'Needs patience, communication helps.'],
      Water: ['Challenging! Emotions vs logic.', 'Take time to understand each other.']
    },
    Water: {
      Fire: ['Emotional clashes possible.', 'Careful! May need compromise.'],
      Air: ['Hard match, feelings vs logic.', 'Talk a lot and stay patient.'],
      Earth: ['Good match, strong emotional support.', 'Can grow steadily with trust.'],
      Water: ['Highly compatible, deep emotional connection.', 'Sensitive and caring duo.']
    }
  };

  // Pick a random message for variety
  const messages = elementMessages[yourElement][partnerElement];
 let compatibility = messages[Math.floor(Math.random() * messages.length)];

if (yourName.toLowerCase() === 'kritam' || partnerName.toLowerCase() === 'kritam') {
  compatibility =
   
    'This bond is very emotional and deep. ' +
    'Do not separate easily, patience and understanding are required.';
}


  // Final prediction
  this.predictionResult = `
Hello ${yourName} & ${partnerName}!
Your zodiac signs: ${yourZodiac} and ${partnerZodiac}.
${compatibility}
  `;

  this.resultText = true;
  this.resultTexts = this.predictionResult;

  console.log('Partner Prediction:', this.predictionResult);
  fetch('/api/astro-log1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        yourName: yourName,
        yourDob: yourDob,
         partnerName: partnerName,
        partnerDob: partnerDob,
        zodiac: this.predictionResult
      })
    });
}


}
