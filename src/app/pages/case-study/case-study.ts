import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { caseStudies, LocalizedText } from '../../data/case-studies';
import { LanguageService } from '../../services/language/language.service';
import { TranslatePipe } from '../../services/language/translate.pipe';

@Component({
  selector: 'app-case-study',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss'
})
export class CaseStudyPage {
  private route = inject(ActivatedRoute);
  private language = inject(LanguageService);
  private params = toSignal(this.route.paramMap);

  study = computed(() => caseStudies.find(item => item.slug === this.params()?.get('slug')));

  localized(text: LocalizedText): string {
    const locale = this.language.currentLanguage() as keyof LocalizedText;
    return text[locale] ?? text.pt;
  }
}
