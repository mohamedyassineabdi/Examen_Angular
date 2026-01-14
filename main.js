import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { bootstrapApplication } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_platform-browser.js?v=4ae871b7";

// src/app/app.ts
import { Component as Component4 } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import { CommonModule as CommonModule3 } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_common.js?v=4ae871b7";

// src/app/components/book-list/book-list.ts
import { Component } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import { CommonModule } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_common.js?v=4ae871b7";
import * as i02 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";

// src/app/services/book.ts
var book_exports = {};
__export(book_exports, {
  BookService: () => BookService
});
import { Injectable } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import * as i0 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import * as i1 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_common_http.js?v=4ae871b7";
var BookService = class _BookService {
  http;
  apiUrl = "https://openlibrary.org";
  // URL de base de l'API OpenLibrary
  constructor(http) {
    this.http = http;
  }
  // Méthode pour récupérer tous les livres sur le sujet "computers"
  getBooks() {
    return this.http.get(`${this.apiUrl}/subjects/computers.json`);
  }
  // Méthode pour rechercher un livre par titre
  searchByTitle(title) {
    return this.http.get(`${this.apiUrl}/search.json?title=${title}`);
  }
  // Méthode pour rechercher par année de première publication
  searchByYear(year) {
    return this.http.get(`${this.apiUrl}/search.json?first_publish_year=${year}`);
  }
  // Méthode pour récupérer un livre spécifique par son ID
  getBookById(id) {
    return this.http.get(`${this.apiUrl}/works/${id}.json`);
  }
  static \u0275fac = function BookService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookService)(i0.\u0275\u0275inject(i1.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _BookService, factory: _BookService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BookService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i1.HttpClient }], null);
})();

// src/app/components/book-list/book-list.ts
import * as i2 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_common.js?v=4ae871b7";
function BookList_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div")(1, "h3");
    i02.\u0275\u0275text(2);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(3, "img", 1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const book_r1 = ctx.$implicit;
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(book_r1.title);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("alt", i02.\u0275\u0275interpolate(book_r1.title))("src", "https://covers.openlibrary.org/b/id/" + book_r1.cover_id + "-M.jpg", i02.\u0275\u0275sanitizeUrl);
  }
}
var BookList = class _BookList {
  bookService;
  books = [];
  // Tableau pour stocker la liste des livres
  constructor(bookService) {
    this.bookService = bookService;
  }
  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data.works;
    });
  }
  static \u0275fac = function BookList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookList)(i02.\u0275\u0275directiveInject(BookService));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _BookList, selectors: [["app-book-list"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "src", "alt"]], template: function BookList_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275template(0, BookList_div_0_Template, 4, 4, "div", 0);
    }
    if (rf & 2) {
      i02.\u0275\u0275property("ngForOf", ctx.books);
    }
  }, dependencies: [CommonModule, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(BookList, [{
    type: Component,
    args: [{ standalone: true, selector: "app-book-list", imports: [CommonModule], template: `<div *ngFor="let book of books">\r
  <h3>{{ book.title }}</h3>\r
  <img [src]="'https://covers.openlibrary.org/b/id/' + book.cover_id + '-M.jpg'" alt="{{ book.title }}">\r
</div>\r
` }]
  }], () => [{ type: BookService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(BookList, { className: "BookList", filePath: "src/app/components/book-list/book-list.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fbook-list%2Fbook-list.ts%40BookList";
  function BookList_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(BookList, m.default, [i02, i2, book_exports], [CommonModule, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && BookList_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && BookList_HmrLoad(d.timestamp)));
})();

// src/app/components/head-bar/head-bar.ts
import { Component as Component2, Input } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import * as i03 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
var HeadBar = class _HeadBar {
  title = "";
  static \u0275fac = function HeadBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeadBar)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _HeadBar, selectors: [["app-head-bar"]], inputs: { title: "title" }, decls: 3, vars: 1, consts: [[1, "head-bar"]], template: function HeadBar_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275domElementStart(0, "header", 0)(1, "h1");
      i03.\u0275\u0275text(2);
      i03.\u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275textInterpolate1("Welcome to ", ctx.title, "!");
    }
  }, styles: ["\n\n.head-bar[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #0080ff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.head-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #111827;\n}\n/*# sourceMappingURL=head-bar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(HeadBar, [{
    type: Component2,
    args: [{ standalone: true, selector: "app-head-bar", template: '<header class="head-bar">\r\n  <h1>Welcome to {{ title }}!</h1>\r\n</header>\r\n', styles: ["/* src/app/components/head-bar/head-bar.css */\n.head-bar {\n  padding: 1rem;\n  background: #0080ff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.head-bar h1 {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #111827;\n}\n/*# sourceMappingURL=head-bar.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(HeadBar, { className: "HeadBar", filePath: "src/app/components/head-bar/head-bar.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fhead-bar%2Fhead-bar.ts%40HeadBar";
  function HeadBar_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(HeadBar, m.default, [i03], [Component2, Input], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HeadBar_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HeadBar_HmrLoad(d.timestamp)));
})();

// src/app/components/search-bar/search-bar.ts
import { Component as Component3, EventEmitter, Output } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import { CommonModule as CommonModule2 } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_common.js?v=4ae871b7";
import { FormsModule } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_forms.js?v=4ae871b7";
import * as i04 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import * as i12 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_common.js?v=4ae871b7";
import * as i22 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_forms.js?v=4ae871b7";
var SearchBar = class _SearchBar {
  title = "";
  year = null;
  search = new EventEmitter();
  onSearch() {
    this.search.emit({ title: this.title || void 0, year: this.year ?? void 0 });
  }
  static \u0275fac = function SearchBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchBar)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _SearchBar, selectors: [["app-search-bar"]], outputs: { search: "search" }, decls: 5, vars: 2, consts: [[1, "search-bar"], ["placeholder", "Recherche par titre", 1, "search-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ann\xE9e de 1re \xE9dition", 1, "year-input", 3, "ngModelChange", "ngModel"], [1, "search-btn", 3, "click"]], template: function SearchBar_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
      i04.\u0275\u0275twoWayListener("ngModelChange", function SearchBar_Template_input_ngModelChange_1_listener($event) {
        i04.\u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
        return $event;
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(2, "input", 2);
      i04.\u0275\u0275twoWayListener("ngModelChange", function SearchBar_Template_input_ngModelChange_2_listener($event) {
        i04.\u0275\u0275twoWayBindingSet(ctx.year, $event) || (ctx.year = $event);
        return $event;
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(3, "button", 3);
      i04.\u0275\u0275listener("click", function SearchBar_Template_button_click_3_listener() {
        return ctx.onSearch();
      });
      i04.\u0275\u0275text(4, "Rechercher");
      i04.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i04.\u0275\u0275advance();
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.title);
      i04.\u0275\u0275advance();
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.year);
    }
  }, dependencies: [CommonModule2, i12.NgClass, i12.NgComponentOutlet, i12.NgForOf, i12.NgIf, i12.NgTemplateOutlet, i12.NgStyle, i12.NgSwitch, i12.NgSwitchCase, i12.NgSwitchDefault, i12.NgPlural, i12.NgPluralCase, FormsModule, i22.\u0275NgNoValidate, i22.NgSelectOption, i22.\u0275NgSelectMultipleOption, i22.DefaultValueAccessor, i22.NumberValueAccessor, i22.RangeValueAccessor, i22.CheckboxControlValueAccessor, i22.SelectControlValueAccessor, i22.SelectMultipleControlValueAccessor, i22.RadioControlValueAccessor, i22.NgControlStatus, i22.NgControlStatusGroup, i22.RequiredValidator, i22.MinLengthValidator, i22.MaxLengthValidator, i22.PatternValidator, i22.CheckboxRequiredValidator, i22.EmailValidator, i22.MinValidator, i22.MaxValidator, i22.NgModel, i22.NgModelGroup, i22.NgForm, i12.AsyncPipe, i12.UpperCasePipe, i12.LowerCasePipe, i12.JsonPipe, i12.SlicePipe, i12.DecimalPipe, i12.PercentPipe, i12.TitleCasePipe, i12.CurrencyPipe, i12.DatePipe, i12.I18nPluralPipe, i12.I18nSelectPipe, i12.KeyValuePipe], styles: ["\n\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  background: #ffffff;\n}\n.search-input[_ngcontent-%COMP%], \n.year-input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n}\n.search-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background: #0369a1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=search-bar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(SearchBar, [{
    type: Component3,
    args: [{ standalone: true, selector: "app-search-bar", imports: [CommonModule2, FormsModule], template: '<div class="search-bar">\r\n  <input class="search-input" [(ngModel)]="title" placeholder="Recherche par titre" />\r\n  <input class="year-input" type="number" [(ngModel)]="year" placeholder="Ann\xE9e de 1re \xE9dition" />\r\n  <button class="search-btn" (click)="onSearch()">Rechercher</button>\r\n</div>\r\n', styles: ["/* src/app/components/search-bar/search-bar.css */\n.search-bar {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  background: #ffffff;\n}\n.search-input,\n.year-input {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n}\n.search-btn {\n  padding: 0.5rem 0.75rem;\n  background: #0369a1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=search-bar.css.map */\n"] }]
  }], null, { search: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(SearchBar, { className: "SearchBar", filePath: "src/app/components/search-bar/search-bar.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fsearch-bar%2Fsearch-bar.ts%40SearchBar";
  function SearchBar_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(SearchBar, m.default, [i04, i12, i22], [CommonModule2, FormsModule, Component3, Output], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && SearchBar_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SearchBar_HmrLoad(d.timestamp)));
})();

// src/app/app.ts
import * as i05 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import * as i13 from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_common.js?v=4ae871b7";
function AppComponent_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "span");
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i05.\u0275\u0275nextContext(2);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1("Titre: ", ctx_r0.filterTitle);
  }
}
function AppComponent_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "span");
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i05.\u0275\u0275nextContext(2);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" \u2014 Ann\xE9e: ", ctx_r0.filterYear);
  }
}
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "div", 3)(1, "p");
    i05.\u0275\u0275text(2, "Filtres appliqu\xE9s: ");
    i05.\u0275\u0275template(3, AppComponent_div_2_span_3_Template, 2, 1, "span", 4)(4, AppComponent_div_2_span_4_Template, 2, 1, "span", 4);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275property("ngIf", ctx_r0.filterTitle);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", ctx_r0.filterYear);
  }
}
var AppComponent = class _AppComponent {
  title = "open-library-app";
  filterTitle;
  filterYear;
  onSearch(event) {
    this.filterTitle = event.title;
    this.filterYear = event.year;
    console.log("Search event", event);
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[3, "title"], [3, "search"], ["class", "filters", 4, "ngIf"], [1, "filters"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275element(0, "app-head-bar", 0);
      i05.\u0275\u0275elementStart(1, "app-search-bar", 1);
      i05.\u0275\u0275listener("search", function AppComponent_Template_app_search_bar_search_1_listener($event) {
        return ctx.onSearch($event);
      });
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275template(2, AppComponent_div_2_Template, 5, 2, "div", 2);
      i05.\u0275\u0275element(3, "app-book-list");
    }
    if (rf & 2) {
      i05.\u0275\u0275property("title", ctx.title);
      i05.\u0275\u0275advance(2);
      i05.\u0275\u0275property("ngIf", ctx.filterTitle || ctx.filterYear);
    }
  }, dependencies: [CommonModule3, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgStyle, i13.NgSwitch, i13.NgSwitchCase, i13.NgSwitchDefault, i13.NgPlural, i13.NgPluralCase, BookList, HeadBar, SearchBar, i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(AppComponent, [{
    type: Component4,
    args: [{ standalone: true, selector: "app-root", imports: [CommonModule3, BookList, HeadBar, SearchBar], template: '<app-head-bar [title]="title"></app-head-bar>\r\n<app-search-bar (search)="onSearch($event)"></app-search-bar>\r\n\r\n<div class="filters" *ngIf="filterTitle || filterYear">\r\n	<p>Filtres appliqu\xE9s:\r\n		<span *ngIf="filterTitle">Titre: {{ filterTitle }}</span>\r\n		<span *ngIf="filterYear"> \u2014 Ann\xE9e: {{ filterYear }}</span>\r\n	</p>\r\n</div>\r\n\r\n<app-book-list></app-book-list>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40AppComponent";
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(AppComponent, m.default, [i05, i13], [CommonModule3, BookList, HeadBar, SearchBar, Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.config.ts
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_core.js?v=4ae871b7";
import { provideRouter } from "/@fs/C:/Users/yassi/OneDrive/Bureau/open-library-app/.angular/cache/20.3.14/open-library-app/vite/deps/@angular_router.js?v=4ae871b7";

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAudHMiLCJzcmMvYXBwL2FwcC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2Jvb2stbGlzdC9ib29rLWxpc3QudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1saXN0L2Jvb2stbGlzdC5odG1sIiwic3JjL2FwcC9zZXJ2aWNlcy9ib29rLnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWQtYmFyL2hlYWQtYmFyLnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWQtYmFyL2hlYWQtYmFyLmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLnRzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5odG1sIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2FwcCc7XHJcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4vYXBwL2FwcC5jb25maWcnO1xyXG5cclxuYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwQ29tcG9uZW50LCBhcHBDb25maWcpXHJcbiAgLmNhdGNoKChlcnI6IHVua25vd24pID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCb29rTGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYm9vay1saXN0L2Jvb2stbGlzdFwiO1xyXG5pbXBvcnQgeyBIZWFkQmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkLWJhci9oZWFkLWJhclwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC5jc3MnXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCb29rTGlzdCwgSGVhZEJhciwgU2VhcmNoQmFyXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICB0aXRsZSA9ICdvcGVuLWxpYnJhcnktYXBwJztcclxuICBmaWx0ZXJUaXRsZT86IHN0cmluZztcclxuICBmaWx0ZXJZZWFyPzogbnVtYmVyO1xyXG5cclxuICBvblNlYXJjaChldmVudDogeyB0aXRsZT86IHN0cmluZzsgeWVhcj86IG51bWJlciB9KSB7XHJcbiAgICB0aGlzLmZpbHRlclRpdGxlID0gZXZlbnQudGl0bGU7XHJcbiAgICB0aGlzLmZpbHRlclllYXIgPSBldmVudC55ZWFyO1xyXG4gICAgLy8gRm9yIG5vdyB3ZSBqdXN0IHN0b3JlIHRoZSBmaWx0ZXJzOyBCb29rTGlzdCBpcyBub3Qgd2lyZWQgdG8gdGhlbSB5ZXQuXHJcbiAgICAvLyBGdXR1cmU6IHBhc3MgZmlsdGVycyB0byBCb29rTGlzdCBvciBmZXRjaCBmaWx0ZXJlZCByZXN1bHRzIGZyb20gdGhlIHNlcnZpY2UuXHJcbiAgICBjb25zb2xlLmxvZygnU2VhcmNoIGV2ZW50JywgZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8YXBwLWhlYWQtYmFyIFt0aXRsZV09XCJ0aXRsZVwiPjwvYXBwLWhlYWQtYmFyPlxyXG48YXBwLXNlYXJjaC1iYXIgKHNlYXJjaCk9XCJvblNlYXJjaCgkZXZlbnQpXCI+PC9hcHAtc2VhcmNoLWJhcj5cclxuXHJcbjxkaXYgY2xhc3M9XCJmaWx0ZXJzXCIgKm5nSWY9XCJmaWx0ZXJUaXRsZSB8fCBmaWx0ZXJZZWFyXCI+XHJcblx0PHA+RmlsdHJlcyBhcHBsaXF1w6lzOlxyXG5cdFx0PHNwYW4gKm5nSWY9XCJmaWx0ZXJUaXRsZVwiPlRpdHJlOiB7eyBmaWx0ZXJUaXRsZSB9fTwvc3Bhbj5cclxuXHRcdDxzcGFuICpuZ0lmPVwiZmlsdGVyWWVhclwiPiDigJQgQW5uw6llOiB7eyBmaWx0ZXJZZWFyIH19PC9zcGFuPlxyXG5cdDwvcD5cclxuPC9kaXY+XHJcblxyXG48YXBwLWJvb2stbGlzdD48L2FwcC1ib29rLWxpc3Q+XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJvb2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYm9vayc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWJvb2stbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jvb2stbGlzdC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ib29rLWxpc3QuY3NzJ10sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2tMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBib29rczogYW55W10gPSBbXTsgIC8vIFRhYmxlYXUgcG91ciBzdG9ja2VyIGxhIGxpc3RlIGRlcyBsaXZyZXNcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib29rU2VydmljZTogQm9va1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYm9va1NlcnZpY2UuZ2V0Qm9va3MoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuYm9va3MgPSBkYXRhLndvcmtzOyAgLy8gT24gcsOpY3Vww6hyZSBsYSBsaXN0ZSBkZXMgbGl2cmVzXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdGb3I9XCJsZXQgYm9vayBvZiBib29rc1wiPlxyXG4gIDxoMz57eyBib29rLnRpdGxlIH19PC9oMz5cclxuICA8aW1nIFtzcmNdPVwiJ2h0dHBzOi8vY292ZXJzLm9wZW5saWJyYXJ5Lm9yZy9iL2lkLycgKyBib29rLmNvdmVyX2lkICsgJy1NLmpwZydcIiBhbHQ9XCJ7eyBib29rLnRpdGxlIH19XCI+XHJcbjwvZGl2PlxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2tTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcnOyAgLy8gVVJMIGRlIGJhc2UgZGUgbCdBUEkgT3BlbkxpYnJhcnlcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgLy8gTcOpdGhvZGUgcG91ciByw6ljdXDDqXJlciB0b3VzIGxlcyBsaXZyZXMgc3VyIGxlIHN1amV0IFwiY29tcHV0ZXJzXCJcclxuICBnZXRCb29rcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmFwaVVybH0vc3ViamVjdHMvY29tcHV0ZXJzLmpzb25gKTtcclxuICB9XHJcblxyXG4gIC8vIE3DqXRob2RlIHBvdXIgcmVjaGVyY2hlciB1biBsaXZyZSBwYXIgdGl0cmVcclxuICBzZWFyY2hCeVRpdGxlKHRpdGxlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmFwaVVybH0vc2VhcmNoLmpzb24/dGl0bGU9JHt0aXRsZX1gKTtcclxuICB9XHJcblxyXG4gIC8vIE3DqXRob2RlIHBvdXIgcmVjaGVyY2hlciBwYXIgYW5uw6llIGRlIHByZW1pw6hyZSBwdWJsaWNhdGlvblxyXG4gIHNlYXJjaEJ5WWVhcih5ZWFyOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmFwaVVybH0vc2VhcmNoLmpzb24/Zmlyc3RfcHVibGlzaF95ZWFyPSR7eWVhcn1gKTtcclxuICB9XHJcblxyXG4gIC8vIE3DqXRob2RlIHBvdXIgcsOpY3Vww6lyZXIgdW4gbGl2cmUgc3DDqWNpZmlxdWUgcGFyIHNvbiBJRFxyXG4gIGdldEJvb2tCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmFwaVVybH0vd29ya3MvJHtpZH0uanNvbmApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWhlYWQtYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZC1iYXIuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZC1iYXIuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRCYXIge1xyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcbn1cclxuIiwiPGhlYWRlciBjbGFzcz1cImhlYWQtYmFyXCI+XHJcbiAgPGgxPldlbGNvbWUgdG8ge3sgdGl0bGUgfX0hPC9oMT5cclxuPC9oZWFkZXI+XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaC1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYmFyLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1iYXIuY3NzJ10sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXIge1xyXG4gIHRpdGxlID0gJyc7XHJcbiAgeWVhcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHsgdGl0bGU/OiBzdHJpbmc7IHllYXI/OiBudW1iZXIgfT4oKTtcclxuXHJcbiAgb25TZWFyY2goKSB7XHJcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgdGl0bGU6IHRoaXMudGl0bGUgfHwgdW5kZWZpbmVkLCB5ZWFyOiB0aGlzLnllYXIgPz8gdW5kZWZpbmVkIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxyXG4gIDxpbnB1dCBjbGFzcz1cInNlYXJjaC1pbnB1dFwiIFsobmdNb2RlbCldPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZSBwYXIgdGl0cmVcIiAvPlxyXG4gIDxpbnB1dCBjbGFzcz1cInllYXItaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJBbm7DqWUgZGUgMXJlIMOpZGl0aW9uXCIgLz5cclxuICA8YnV0dG9uIGNsYXNzPVwic2VhcmNoLWJ0blwiIChjbGljayk9XCJvblNlYXJjaCgpXCI+UmVjaGVyY2hlcjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMsIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBDb25maWc6IEFwcGxpY2F0aW9uQ29uZmlnID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgcHJvdmlkZUJyb3dzZXJHbG9iYWxFcnJvckxpc3RlbmVycygpLFxyXG4gICAgcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24oeyBldmVudENvYWxlc2Npbmc6IHRydWUgfSksXHJcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcylcclxuICBdXHJcbn07XHJcbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUFTLGFBQUFBLGtCQUFpQjtBQUMxQixTQUFTLGdCQUFBQyxxQkFBb0I7OztBRUQ3QixTQUFTLGlCQUF5QjtBQUNsQyxTQUFTLG9CQUFvQjs7OztBRUQ3Qjs7OztTQUFTLGtCQUFrQjs7O0FBT3JCLElBQU8sY0FBUCxNQUFPLGFBQVc7RUFJRjtFQUZaLFNBQVM7O0VBRWpCLFlBQW9CLE1BQWdCO0FBQWhCLFNBQUEsT0FBQTtFQUFvQjs7RUFHeEMsV0FBUTtBQUNOLFdBQU8sS0FBSyxLQUFLLElBQVMs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QUFBLFVBQUEsU0FBQSx1REFBQSxRQUFBO0FBQUEsZUFBVSxJQUFBLFNBQUEsTUFBQTtNQUFnQixDQUFBO0FBQUUsTUFBQSwyQkFBQTtBQUU1QyxNQUFBLHlCQUFBLEdBQUEsNkJBQUEsR0FBQSxHQUFBLE9BQUEsQ0FBQTtBQU9BLE1BQUEsd0JBQUEsR0FBQSxlQUFBOzs7QUFWYyxNQUFBLHlCQUFBLFNBQUEsSUFBQSxLQUFBO0FBR1EsTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSx5QkFBQSxRQUFBLElBQUEsZUFBQSxJQUFBLFVBQUE7O29CRFFWSyxlQUFZLGFBQUEsdUJBQUEsYUFBQSxVQUFBLHNCQUFBLGFBQUEsY0FBQSxrQkFBQSxxQkFBQSxjQUFBLGtCQUFFLFVBQVUsU0FBUyxXQUFTLGVBQUEsbUJBQUEsbUJBQUEsY0FBQSxlQUFBLGlCQUFBLGlCQUFBLG1CQUFBLGtCQUFBLGNBQUEsb0JBQUEsb0JBQUEsZ0JBQUEsR0FBQSxlQUFBLEVBQUEsQ0FBQTs7O2dGQUV6QyxjQUFZLENBQUE7VUFQeEJDO3lCQUNhLE1BQUksVUFDTixZQUFVLFNBR1gsQ0FBQ0QsZUFBYyxVQUFVLFNBQVMsU0FBUyxHQUFDLFVBQUEsa1pBQUEsQ0FBQTs7OztpRkFFMUMsY0FBWSxFQUFBLFdBQUEsZ0JBQUEsVUFBQSxrQkFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7Ozs7K0RBQVosY0FBWSxFQUFBLFNBQUEsQ0FBQUUsS0FBQUMsR0FBQSxHQUFBLENBQUFILGVBQUEsVUFBQSxTQUFBLFdBQUFDLFVBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLHFCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLHFCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FTYnpCLFNBQTRCLG9DQUFvQyxrQ0FBa0M7QUFDbEcsU0FBUyxxQkFBcUI7OztBQ0N2QixJQUFNLFNBQWlCLENBQUE7OztBREd2QixJQUFNLFlBQStCO0VBQzFDLFdBQVc7SUFDVCxtQ0FBa0M7SUFDbEMsMkJBQTJCLEVBQUUsaUJBQWlCLEtBQUksQ0FBRTtJQUNwRCxjQUFjLE1BQU07Ozs7O0FWTHhCLHFCQUFxQixjQUFjLFNBQVMsRUFDekMsTUFBTSxDQUFDLFFBQWlCLFFBQVEsTUFBTSxHQUFHLENBQUM7IiwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ29tbW9uTW9kdWxlIiwiaTAiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsIkNvbW1vbk1vZHVsZSIsImkwIiwiaTEiLCJpMiIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTEiXX0=