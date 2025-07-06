import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news-section',
  standalone: false,
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
})
export class NewsSectionComponent implements OnInit {
  articles: any[] = [
    {
      id: '1',
      title: 'Revolutionary Airport Technology Transforms Travel Experience',
      summary:
        'New biometric systems and AI-powered solutions are making air travel faster and more secure than ever before.',
      content: `The aviation industry is experiencing a technological revolution that's transforming how passengers navigate airports and airlines manage operations. From biometric screening to AI-powered predictive analytics, these innovations are creating a more seamless, efficient, and secure travel experience.
        Biometric technology has emerged as a game-changer in airport security and passenger processing. Advanced facial recognition systems now allow travelers to move through security checkpoints and boarding gates without traditional documents, reducing wait times by up to 40%. These systems not only enhance security but also provide valuable data insights that help optimize airport operations.

        Artificial intelligence is another cornerstone of this transformation. Predictive analytics powered by machine learning algorithms can forecast passenger flow patterns, optimize gate assignments, and even predict maintenance needs for aircraft and airport infrastructure. This proactive approach significantly reduces delays and improves overall operational efficiency.

        Mobile technology integration has also revolutionized the passenger experience. Smart apps now provide real-time updates on flight status, gate changes, and even suggest optimal routes through the airport based on current crowd levels. Some airports have implemented augmented reality wayfinding systems that overlay digital directions onto the physical environment through smartphone cameras.

        The Internet of Things (IoT) plays a crucial role in creating connected airport ecosystems. Smart sensors monitor everything from air quality to passenger density, enabling real-time adjustments to improve comfort and safety. Baggage tracking systems use RFID and GPS technology to provide passengers with precise location information about their luggage throughout the journey.

        These technological advances are not just improving efficiency; they're also enhancing sustainability. Smart energy management systems optimize power consumption across airport facilities, while data analytics help airlines improve fuel efficiency through better route planning and load optimization.`,
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      publishedDate: new Date('2024-01-15'),
      tags: ['aviation', 'technology', 'AI', 'biometrics'],
    },
    {
      id: '2',
      title:
        'Sustainable Aviation Fuel Initiative Launches Across Major Airports',
      summary:
        'A consortium of international airports announces ambitious plan to increase SAF usage by 50% over the next two years.',
      content: `The aviation industry has taken a significant step forward in its commitment to environmental sustainability with the launch of a comprehensive Sustainable Aviation Fuel (SAF) initiative across major international airports. This groundbreaking program represents the largest coordinated effort to date to reduce aviation's carbon footprint through the adoption of alternative fuels.

        The initiative, spearheaded by a consortium of 25 major airports worldwide, aims to increase SAF usage by 50% over the next two years. This ambitious target would represent a substantial reduction in greenhouse gas emissions from commercial aviation, contributing significantly to the industry's goal of achieving net-zero emissions by 2050.

        Sustainable Aviation Fuel is produced from renewable feedstocks such as waste oils, agricultural residues, and even captured carbon dioxide. Unlike conventional jet fuel derived from fossil fuels, SAF can reduce lifecycle carbon emissions by up to 80%. The fuel is designed to be a "drop-in" replacement for conventional jet fuel, requiring no modifications to existing aircraft engines or fuel infrastructure.

        The financial commitment behind this initiative is substantial, with participating airports and airlines pledging over $2 billion in investments for SAF infrastructure and supply chain development. This includes funding for new production facilities, storage systems, and distribution networks that will make SAF more widely available and cost-effective.

        Several innovative approaches are being employed to accelerate SAF adoption. Some airports are partnering with local waste management companies to convert municipal waste into aviation fuel, creating a circular economy model that addresses both waste disposal and fuel supply challenges. Others are investing in advanced biofuel production facilities that can convert algae and other renewable resources into high-quality aviation fuel.

        The initiative also includes a comprehensive research and development component focused on next-generation SAF technologies. Scientists and engineers are working on improving production efficiency, expanding feedstock options, and developing entirely new fuel formulations that could further reduce environmental impact while maintaining the performance characteristics required for safe aviation operations.`,
      imageUrl:
        'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      publishedDate: new Date('2024-01-12'),
      tags: ['sustainability', 'aviation', 'environment', 'fuel'],
    },

    {
      id: '4',
      title: 'Global Aviation Safety Statistics Show Record Improvements',
      summary:
        'Latest data reveals significant decrease in incidents and enhanced emergency response capabilities worldwide.',
      content: `The latest global aviation safety statistics paint an encouraging picture of the industry's continued commitment to safety excellence. According to the International Air Transport Association (IATA), commercial aviation has achieved its safest year on record, with significant improvements across all major safety metrics.

        The accident rate for commercial aviation in 2023 was 1.26 accidents per million flights, representing a 15% improvement over the previous year and the lowest rate ever recorded. This achievement is particularly remarkable given the recovery in air traffic volumes following the pandemic, with passenger numbers approaching pre-2020 levels.

        Enhanced safety protocols and technology adoption have played crucial roles in this improvement. Advanced weather radar systems and improved pilot training programs have significantly reduced weather-related incidents. Predictive maintenance technologies using artificial intelligence and machine learning have helped identify potential mechanical issues before they become safety concerns.

        Emergency response capabilities have also seen substantial improvements. Modern aircraft are equipped with enhanced emergency communication systems that provide real-time location data and aircraft status to ground controllers. This technology has reduced emergency response times by an average of 30% and improved coordination between aviation authorities and emergency services.

        The implementation of Safety Management Systems (SMS) across airlines and airports has created a more proactive approach to safety. These systems encourage reporting of safety concerns and near-misses, creating valuable data that helps identify and address potential risks before they result in incidents.

        International cooperation has strengthened, with improved information sharing between aviation authorities worldwide. This collaboration has led to more consistent safety standards and better coordination of safety initiatives across different regions and regulatory frameworks.

        Training programs have evolved to incorporate advanced simulation technologies and scenario-based learning. Modern flight simulators can recreate virtually any emergency situation, allowing pilots to practice responses to rare but critical scenarios in a safe environment.`,
      imageUrl:
        'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      publishedDate: new Date('2024-01-08'),
      tags: ['safety', 'statistics', 'aviation', 'improvement'],
    },
    {
      id: '5',
      title: 'Digital Infrastructure Investment Reaches $5 Billion Milestone',
      summary:
        'Airports worldwide accelerate digital transformation with massive investments in smart technologies and connectivity.',
      content: `The global airport industry has reached a significant milestone with digital infrastructure investments surpassing $5 billion in 2023. This unprecedented level of investment reflects the industry's commitment to digital transformation and the growing recognition of technology's role in improving operational efficiency and passenger experience.

        The investment surge spans multiple technology domains, including 5G network deployment, cloud computing infrastructure, Internet of Things (IoT) systems, and artificial intelligence platforms. These technologies are being integrated to create comprehensive digital ecosystems that can adapt to changing passenger needs and operational requirements.

        5G connectivity is a major focus area, with airports investing heavily in private 5G networks to support mission-critical operations. These high-speed, low-latency networks enable real-time data processing for applications such as autonomous ground vehicles, augmented reality maintenance systems, and ultra-responsive passenger services.

        Cloud computing adoption has accelerated, allowing airports to scale their IT resources dynamically and improve system reliability. Cloud-based solutions provide the flexibility needed to handle peak travel periods while optimizing costs during quieter times. This approach also facilitates better integration between different airport systems and external partners.

        Data analytics and artificial intelligence investments are yielding significant returns through improved operational insights and predictive capabilities. AI-powered systems can forecast passenger flow patterns, optimize resource allocation, and even predict equipment maintenance needs before failures occur.

        Cybersecurity has become a critical component of digital infrastructure investments, with airports implementing advanced threat detection and response systems. The increasing digitization of airport operations has made cybersecurity a top priority, with investments in both technology solutions and specialized security personnel.

        The digital transformation is also creating new opportunities for passenger services and revenue generation. Digital marketplaces, personalized travel apps, and smart retail solutions are enhancing the commercial aspects of airport operations while improving the overall travel experience.`,
      imageUrl:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      publishedDate: new Date('2024-01-05'),
      tags: ['digital transformation', 'investment', 'infrastructure', '5G'],
    },
    {
      id: '6',
      title: 'Regional Airport Development Program Announces New Phase',
      summary:
        'Multi-billion dollar initiative aims to modernize smaller airports and improve regional connectivity.',
      content: `A comprehensive regional airport development program has entered its next phase, with plans to modernize infrastructure and improve connectivity for smaller airports across the globe. This ambitious initiative represents one of the largest coordinated efforts to enhance regional aviation infrastructure in recent decades.

        The program focuses on upgrading airports that serve smaller communities and regional routes, recognizing their crucial role in maintaining economic vitality and social connectivity for areas not served by major hub airports. These facilities often face unique challenges, including limited funding, aging infrastructure, and the need to accommodate diverse aircraft types.

        Infrastructure improvements include runway extensions and upgrades, modern terminal facilities, enhanced cargo handling capabilities, and improved ground transportation connections. Many regional airports are also receiving upgrades to their air traffic control systems and navigation aids to improve safety and operational efficiency.

        Sustainability is a key component of the modernization efforts, with new terminals incorporating energy-efficient designs, renewable energy systems, and sustainable materials. Water management systems are being upgraded to reduce consumption and improve stormwater handling, while waste reduction and recycling programs are being implemented.

        Technology integration focuses on cost-effective solutions that can improve operations without requiring extensive technical support. Cloud-based systems and software-as-a-service platforms allow smaller airports to access advanced capabilities that were previously only available to larger facilities.

        The economic impact of these improvements extends beyond aviation, supporting local businesses, tourism, and economic development initiatives. Improved airport facilities can attract new airline services, cargo operations, and aviation-related businesses, creating jobs and stimulating regional economic growth.

        Community engagement has been a priority throughout the development process, with local stakeholders playing active roles in planning and decision-making. This approach ensures that improvements align with regional needs and priorities while maintaining strong community support.`,
      imageUrl:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      publishedDate: new Date('2024-01-03'),
      tags: [
        'regional development',
        'infrastructure',
        'connectivity',
        'modernization',
      ],
    },
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAll().subscribe({
      next: (response) => { 
        console.log('News articles fetched successfully:', response);
        
        this.articles = response.data.map((article) => ({
          ...article,
          publishedDate: new Date(article.publishDate),
        }));
      }
    });

  }

  getFormattedDate(date: Date): string {
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
  }
}
