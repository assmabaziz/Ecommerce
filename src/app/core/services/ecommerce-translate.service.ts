import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class EcommerceTranslateService {
  private readonly _TranslateService = inject(TranslateService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _Renderer2 = inject(RendererFactory2).createRenderer(null, null)


  constructor() {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      let savedLang = localStorage.getItem('lang');
      this._TranslateService.setDefaultLang('en');
      if (savedLang !== null) {
        this._TranslateService.use(savedLang!);
      }
      this.changeDir();
    }
  }
  changeDir(): void {
    let savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') {
      this._Renderer2.setAttribute(document.documentElement, 'dir', 'ltr')
      this._Renderer2.setAttribute(document.documentElement, 'lang', 'en')
      // document.documentElement.dir = 'ltr';
    } else if (savedLang === 'ar') {
      this._Renderer2.setAttribute(document.documentElement, 'dir', 'rtl')
      this._Renderer2.setAttribute(document.documentElement, 'lang', 'ar')
      // document.documentElement.dir = 'rtl';
    }
  }
  changeLang(lang: string): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      localStorage.setItem('lang', lang);
      this._TranslateService.use(lang);
      this.changeDir();
    }
  }
}
