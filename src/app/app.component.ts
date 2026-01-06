import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'astrology-app';

  // Variables to show result in UI
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
     this.resultText=true;
     this.resultTexts=this.predictionResult;
    console.log('Name:', name);
    console.log('DOB:', dob);
    console.log('Zodiac:', this.zodiacSign);
    console.log('Prediction:', this.predictionResult);
  }

  // Calculate Zodiac Sign
  getZodiac(dob: string): string {
    const date = new Date(dob);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months start from 0

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

  // Astrology Prediction Logic
  getPrediction(zodiac: string): string {
    const predictions: { [key: string]: string } = {
      Aries: 'You are energetic and action-oriented. Today favors leadership and confident decisions. Avoid impulsive reactions.',
      Taurus: 'Stability and patience bring success. Financial planning and long-term goals are favorable.',
      Gemini: 'Communication is your strength today. Learning and networking bring positive outcomes.',
      Cancer: 'Emotional clarity improves today. Focus on family matters and inner peace.',
      Leo: 'Your confidence attracts opportunities. Creativity and recognition are highlighted.',
      Virgo: 'Attention to detail brings progress. Health and organization are important today.',
      Libra: 'Balance and harmony guide your day. Partnerships and negotiations go smoothly.',
      Scorpio: 'Deep focus helps you succeed. A good day for planning and transformation.',
      Sagittarius: 'Optimism opens new doors. Learning and exploration bring growth.',
      Capricorn: 'Discipline leads to success. Career and responsibilities take priority.',
      Aquarius: 'Innovation and originality shine. Social connections bring fresh ideas.',
      Pisces: 'Imagination and sensitivity are strong. Creative and spiritual activities bring peace.'
    };

    return predictions[zodiac] || 'Prediction not available.';
  }
  partner(){
    this.one=false;
    this.sencond=true;
  }
  single(){
    this.one =true;
    this.sencond=false
  }

}
