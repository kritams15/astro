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
}
