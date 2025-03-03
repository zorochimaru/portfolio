import { Method } from '../../enums';

export const TS_CODE = `export class FrontendDeveloper {
    public fullName = "Rasim Karimli";
    public birthDate = new Date(1993, 11, 20);
    private hobbies = ["Video Games🎮", "Music🎸", "Anime🍿"];

    public ${Method.introduce}(): string {
      return \`console.log("Hi! I'm \${this.fullName}, a frontend developer! 🚀");\`;
    }

    public ${Method.showStack}(): string {
      return \`console.log("This is my stack! 😎");\`;
    }
  
    public ${Method.calculateExperience}(startYear: number): string {
      const years = new Date().getFullYear() - startYear;
      return \`console.log("I have \${years} years of experience in development! 🖥️");\`;
    }

    public ${Method.projects}(): string {
      return \`console.log("Here are some of my projects! 📝");\`;
    }

    public ${Method.softSkills}(): string {
      return \`console.log("Check out my soft skills! 💡");\`;
    }
}`;
