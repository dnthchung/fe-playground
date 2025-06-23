import { ApplicationConfig, importProvidersFrom } from "@angular/core"
import { provideRouter } from "@angular/router"
import { provideHttpClient, withFetch } from "@angular/common/http"
import { routes } from "./app.routes"
import { LucideAngularModule, ShoppingCart, User, Star, Heart, Mail, Image, ArrowRight } from "lucide-angular"

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      LucideAngularModule.pick({
        ShoppingCart,
        User,
        Star,
        Heart,
        Mail,
        Image,
        ArrowRight,
      }),
    ),
  ],
}
