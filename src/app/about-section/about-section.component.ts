import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
aboutTitle:string = "Embracing Technology in Real Estate";
aboutDescription:string="In today's rapidly evolving real estate market, technology is no longer a luxury; it’s a necessity. As developers, leveraging advanced tools like AI, machine learning, and big data analytics can significantly enhance decision-making processes. These technologies enable us to analyze market trends, assess property values, and predict buyer behavior more accurately than ever before. By integrating these innovations, we can streamline operations, improve customer experiences, and ultimately drive profitability.";

btnClass:string ="btn btn-primary";

abtImage="./assets/images/about.jpg"

ShowContactDetails(){
  // alert("Please contact us at : +923241257793 for further details.")
  this.aboutDescription = 
"For developers, creating a seamless user experience is crucial. Whether it's a property listing platform or a mobile app for property management, understanding the end user is key. Implementing user-centric design principles can lead to higher engagement and satisfaction rates. This means prioritizing intuitive navigation, responsive design, and accessible features. Regularly gathering user feedback through surveys or usability tests can guide iterative improvements and ensure that our solutions effectively meet the needs of buyers and renters alike."

this.btnClass="btn btn-danger";
this.abtImage="./assets/images/abt2.webp"
}

}
