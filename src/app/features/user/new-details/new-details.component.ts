import { Component, OnDestroy, OnInit } from '@angular/core';
import { News, NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-details',
  standalone: false,
  templateUrl: './new-details.component.html',
  styleUrl: './new-details.component.scss',
})
export class NewDetailsComponent implements OnInit, OnDestroy {
  article: News | null = {
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
    publishDate: JSON.stringify(new Date('2023-10-01T10:00:00Z')),
    tags: ['aviation', 'technology', 'AI', 'biometrics'],
  };

  constructor(private newsService: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.newsService.getById(id).subscribe((article: any) => {
          this.article = article.data;
        });
      }
    });
  }

  getFormattedDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  getFormattedContent(content: string): string {
    return content
      .split('\n\n')
      .map((paragraph) => `<p class="mb-6">${paragraph.trim()}</p>`)
      .join('');
  }

  shareOnTwitter(): void {
    if (!this.article) return;
    const url = window.location.href;
    const text = `${this.article.title} - ${this.article.summary}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      '_blank',
    );
  }

  shareOnLinkedIn(): void {
    if (!this.article) return;
    const url = window.location.href;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank',
    );
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      console.log('Link copied to clipboard');
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnDestroy(): void {}
}
