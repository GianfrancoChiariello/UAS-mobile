declare module 'i18n-js' {
    const i18n: {
      translate(key: string, options?: any): string;
      locale: string;
      fallbacks: boolean;
      defaultLocale: string;
      t(key: string, options?: any): string;
      currentLocale(): string;
      translations: any;
      missingTranslationPrefix: string;
      missingTranslation: (key: string, locale: string, options: any) => string;
      pluralization: (locale: string, count: number) => string;
      toPercentage(value: number, options?: any): string;
      toCurrency(value: number, options?: any): string;
      toHumanSize(value: number, options?: any): string;
      toTime(scope: string, value: Date | string, options?: any): string;
      strftime(date: Date, format: string): string;
      l(scope: string, value: Date | string, options?: any): string;
      p(value: number, options?: any): string;
      c(value: number, options?: any): string;
      humanize(value: number, options?: any): string;
        localize(scope: string, value: Date | string, options?: any): string;
    }
    export default i18n;
}