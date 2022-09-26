# ZoeWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 개발 환경

- Angular
- tailwind

## 의존성 및 역할

- page: service 와 template, layout 을 연결해주는 adapter 역할
    - service: 도메인 특화 서비스들
        - service-common: 공통 service 로직
        - api: 도메인 특화 api 호출 서비스들
        - config: 설정(상수)값을 가진 서비스들
    - ui/layout: 도메인 특화 레이아웃 형태
    - ui/template: 도메인 특화 ui
        - ui-common/component: 공통 ui component
        - ui-common/directive: 공통 ui directive
        - ui-common/pipe: 공통 ui pipe

## 디렉토리 구조 및 파일명 규칙과 예시

- page [component route module]
    - {name}.page.component.{ts,html,scss}
- api [service]
    - {name}.api.service.{ts,html,scss}
- config [service]
    - {name}.conf.service.{ts,html,scss}
- service [service]
    - {name}.app.service.ts
- service-common [service]
    - {name}.service.ts
    - constant.service.ts
    - cookie.service.ts
    - http.service.ts
    - logger.service.ts
    - storage.service.ts
    - util.service.ts
    - validator.service.ts

- ui: 보여주는것에 특화.
    - layout [component module]
        - {name}
            - {name}.layout.component.{ts,html,scss}
    - template [component module]
        - {name}
            - {name}.template.component.{ts,html,scss}
- ui-common [component module]
    - directive [directive module]
        - {name}
            - {name}.directive.{ts,html,scss}
    - pipe [pipe module]
        - {name}
            - {name}.pipe.{ts,html,scss}
    - component [component module]
        - {사용목적}
            - {일반적인 이름}
                - {name}
                    - {name}.component.{ts,html,scss}
        - form
            - input, select, checkbox, radio, textarea, button, textarea, datepicker, timepicker, file, range, color,
              slider, switch, autocomplete, chips, editor, rating, search, spinner
        - data
            - datatable, orderlist, picklist, schedule, tree, gmap, orgchart, paginator, chart, dragdrop, carousel,
              editor, fullcalendar, inbox, rating, slider, virtualscroller
        - navigation
            - breadcrumb, menu, sidenav, paginator, steps, tabs, toolbar
        - overlay
            - dialog, lightbox, overlaypanel, sidebar, tooltip, confirm, progressbar, blockui, fieldset, terminal,
              scrollpanel, card, accordion, tabview, carousel, splitbutton, chip, megamenu, menubar, panel, tabmenu,
              tieredmenu, tree, contextmenu, listbox, orderlist, picklist, selectbutton, steps, tabview, toolbar, tree,
              treeTable, virtualScroller
        - media
            - avatar, carousel, galleria, image, media, videoplayer

## 이후 개발 방향

- new relic / datadog / sentry
- GA

## TODO

- dotenv 로 환경변수 관리

## tailwindcss

- https://tailwindcss.com/docs/guides/angular
- 