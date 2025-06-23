angular-carversion/
├── angular.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── db.json                  <-- JSON Server (fake API)
├── docs/                    <-- Tài liệu dự án
│   └── content.md
└── src/
    ├── main.ts
    ├── styles.scss
    ├── index.html
    ├── assets/
    │   └── ...
    └── app/
        ├── core/            <-- Service, interceptor, guard, constant, config chung
        │   ├── services/
        │   │   ├── car.service.ts
        │   │   ├── brand.service.ts
        │   │   └── auth.service.ts
        │   ├── guards/
        │   │   └── auth.guard.ts
        │   ├── interceptors/
        │   │   └── token.interceptor.ts
        │   └── models/
        │       ├── car.model.ts
        │       ├── brand.model.ts
        │       └── user.model.ts
        ├── shared/          <-- Component dùng chung: header, footer, button, card
        │   ├── components/
        │   │   ├── header/
        │   │   ├── footer/
        │   │   └── car-card/
        │   └── pipes/
        │       └── filter.pipe.ts
        ├── features/        <-- Tách theo domain chính
        │   ├── home/
        │   │   ├── home.component.ts
        │   │   └── ...
        │   ├── car/
        │   │   ├── car-list/
        │   │   ├── car-detail/
        │   │   └── filter/
        │   ├── brand/
        │   │   ├── brand-list/
        │   │   └── brand-detail/
        │   ├── admin/
        │   │   ├── dashboard/
        │   │   ├── car-add/
        │   │   └── car-edit/
        │   ├── auth/
        │   │   ├── login/
        │   │   └── register/
        │   └── blog/         <-- cho giai đoạn mở rộng
        │       ├── blog-list/
        │       ├── blog-detail/
        │       └── blog-editor/
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.scss
        ├── app.routes.ts
        └── app.config.ts
